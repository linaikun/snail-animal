package com.animal.snail.modules.file.controller;

import com.animal.snail.common.constant.CommonConstant;
import com.animal.snail.common.constant.SettingConstant;
import com.animal.snail.common.exception.SnailException;
import com.animal.snail.common.redis.RedisTemplateHelper;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.base.entity.User;
import com.animal.snail.modules.base.service.SettingService;
import com.animal.snail.modules.base.service.UserService;
import com.animal.snail.modules.base.vo.OssSetting;
import com.animal.snail.modules.file.entity.File;
import com.animal.snail.modules.file.manage.FileManageFactory;
import com.animal.snail.modules.file.manage.impl.LocalFileManage;
import com.animal.snail.modules.file.service.FileService;
import cn.hutool.core.util.StrUtil;
import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;


/**
 * @author Exrick
 */
@Slf4j
@Controller
@Api(description = "文件管理管理接口")
@RequestMapping("/snail/file")
@Transactional
@CacheConfig(cacheNames = "file")
public class FileController {

    @Autowired
    private FileService fileService;

    @Autowired
    private FileManageFactory fileManageFactory;

    @Autowired
    private SettingService settingService;

    @Autowired
    private UserService userService;

    @Autowired
    private RedisTemplateHelper redisTemplate;

    @PersistenceContext
    private EntityManager entityManager;

    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    @ResponseBody
    public Result<Page<File>> getFileList(File file,
                                          SearchVo searchVo,
                                          PageVo pageVo) {

        Page<File> page = fileService.findByCondition(file, searchVo, PageUtil.initPage(pageVo));
        OssSetting os = new Gson().fromJson(settingService.get(SettingConstant.LOCAL_OSS).getValue(), OssSetting.class);
        Map<String, String> map = new HashMap<>(16);
        for (File e : page.getContent()) {
            if (e.getLocation() != null && CommonConstant.OSS_LOCAL.equals(e.getLocation())) {
                String url = os.getHttp() + os.getEndpoint() + "/";
                entityManager.detach(e);
                e.setUrl(url + e.getId());
            }
            if (StrUtil.isNotBlank(e.getCreateBy())) {
                if (!map.containsKey(e.getCreateBy())) {
                    User u = userService.findByUsername(e.getCreateBy());
                    if (u != null && StrUtil.isNotBlank(u.getNickname())) {
                        e.setNickname(u.getNickname());
                        map.put(e.getCreateBy(), u.getNickname());
                    }
                } else {
                    e.setNickname(map.get(e.getCreateBy()));
                }
            }
        }
        // GC
        map = null;
        return new ResultUtil<Page<File>>().setData(page);
    }

    @RequestMapping(value = "/copy", method = RequestMethod.POST)
    @ApiOperation(value = "文件复制")
    @ResponseBody
    public Result<Object> copy(@RequestParam String id,
                               @RequestParam String key) throws Exception {

        File file = fileService.get(id);
        if (file.getLocation() == null) {
            return ResultUtil.error("存储位置未知");
        }

        String toKey = "副本_" + key;
        // 特殊处理本地服务器
        if (CommonConstant.OSS_LOCAL.equals(file.getLocation())) {
            key = file.getUrl();
        }
        String newUrl = fileManageFactory.getFileManage(file.getLocation()).copyFile(key, toKey);
        File newFile = new File().setName(file.getName()).setFKey(toKey).setSize(file.getSize()).setType(file.getType())
                .setLocation(file.getLocation()).setUrl(newUrl);
        fileService.save(newFile);
        return ResultUtil.data(null);
    }

    @RequestMapping(value = "/rename", method = RequestMethod.POST)
    @ApiOperation(value = "文件重命名")
    @ResponseBody
    @CacheEvict(key = "#id")
    public Result<Object> upload(@RequestParam String id,
                                 @RequestParam String newKey,
                                 @RequestParam String newName) throws Exception {

        File file = fileService.get(id);
        if (file.getLocation() == null) {
            return ResultUtil.error("存储位置未知");
        }
        String newUrl = "", oldKey = file.getFKey();
        if (!oldKey.equals(newKey)) {
            // 特殊处理本地服务器
            if (CommonConstant.OSS_LOCAL.equals(file.getLocation())) {
                oldKey = file.getUrl();
            }
            newUrl = fileManageFactory.getFileManage(file.getLocation()).renameFile(oldKey, newKey);
        }
        file.setName(newName);
        file.setFKey(newKey);
        if (!oldKey.equals(newKey)) {
            file.setUrl(newUrl);
        }
        fileService.update(file);
        return ResultUtil.data(null);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ApiOperation(value = "文件删除")
    @ResponseBody
    public Result<Object> delete(@RequestParam String[] ids) {

        for (String id : ids) {
            File file = fileService.get(id);
            if (file == null) {
                return ResultUtil.error("文件不存在");
            }
            if (file.getLocation() == null) {
                return ResultUtil.error("存储位置未知");
            }
            // 特殊处理本地服务器
            String key = file.getFKey();
            if (CommonConstant.OSS_LOCAL.equals(file.getLocation())) {
                key = file.getUrl();
            }
            fileManageFactory.getFileManage(file.getLocation()).deleteFile(key);
            fileService.delete(id);
            redisTemplate.delete("file::" + id);
        }
        return ResultUtil.data(null);
    }

    @RequestMapping(value = "/view/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "本地存储预览文件")
    public void view(@PathVariable String id,
                     @RequestParam(required = false) String filename,
                     @RequestParam(required = false, defaultValue = "false") Boolean preview,
                     HttpServletResponse response) throws IOException {

        File file = fileService.get(id);
        if (file == null) {
            throw new SnailException("文件ID：" + id + "不存在");
        }
        if (StrUtil.isBlank(filename)) {
            filename = file.getFKey();
        }

        if (!preview) {
            response.addHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(filename, "UTF-8"));
        }
        response.setContentLengthLong(file.getSize());
        response.setContentType(file.getType());
        response.addHeader("Accept-Ranges", "bytes");
        if (file.getSize() != null && file.getSize() > 0) {
            response.addHeader("Content-Range", "bytes " + 0 + "-" + (file.getSize() - 1) + "/" + file.getSize());
        }
        response.setBufferSize(10 * 1024 * 1024);
        LocalFileManage.view(file.getUrl(), response);
    }
}
