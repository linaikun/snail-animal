package com.animal.snail.modules.file.controller;

import com.animal.snail.common.constant.CommonConstant;
import com.animal.snail.common.constant.SettingConstant;
import com.animal.snail.common.exception.LimitException;
import com.animal.snail.common.limit.RedisRaterLimiter;
import com.animal.snail.common.utils.*;
import com.animal.snail.common.utils.Base64DecodeMultipartFile;
import com.animal.snail.common.utils.CommonUtil;
import com.animal.snail.common.utils.IpInfoUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.modules.base.entity.Setting;
import com.animal.snail.modules.base.service.SettingService;
import com.animal.snail.modules.base.vo.OssSetting;
import com.animal.snail.common.vo.Result;
import com.animal.snail.modules.file.entity.File;
import com.animal.snail.modules.file.manage.FileManageFactory;
import com.animal.snail.modules.file.service.FileService;
import cn.hutool.core.util.StrUtil;
import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;

/**
 * @author Snail
 */
@Slf4j
@RestController
@Api(description = "文件上传接口")
@RequestMapping("/snail/upload")
@Transactional
public class UploadController {

    @Autowired
    private RedisRaterLimiter redisRaterLimiter;

    @Autowired
    private IpInfoUtil ipInfoUtil;

    @Autowired
    private FileManageFactory fileManageFactory;

    @Autowired
    private SettingService settingService;

    @Autowired
    private FileService fileService;

    @RequestMapping(value = "/file", method = RequestMethod.POST)
    @ApiOperation(value = "文件上传")
    public Result<Object> upload(@RequestParam(required = false) MultipartFile file,
                                 @RequestParam(required = false) String base64,
                                 HttpServletRequest request) {

        Setting setting = settingService.get(SettingConstant.OSS_USED);
        if (setting == null || StrUtil.isBlank(setting.getValue())) {
            return ResultUtil.error(501, "您还未配置OSS存储服务");
        }

        // IP限流 在线Demo所需 5分钟限1个请求
        /*Boolean token = redisRaterLimiter.acquireByRedis("upload:" + ipInfoUtil.getIpAddr(request), 1L, 300000L);
        if (!token) {
            throw new LimitException("上传那么多干嘛，等等再传吧");
        }*/

        if (StrUtil.isNotBlank(base64)) {
            // base64上传
            file = Base64DecodeMultipartFile.base64Convert(base64);
        }
        String result = "";
        String fKey = CommonUtil.renamePic(file.getOriginalFilename());
        File f = new File();
        try {
            InputStream inputStream = file.getInputStream();
            // 上传至第三方云服务或服务器
            result = fileManageFactory.getFileManage(null).inputStreamUpload(inputStream, fKey, file);
            // 保存数据信息至数据库
            f.setLocation(getType(setting.getValue())).setName(file.getOriginalFilename()).setSize(file.getSize())
                    .setType(file.getContentType()).setFKey(fKey).setUrl(result);
            fileService.save(f);
        } catch (Exception e) {
            log.error(e.toString());
            return ResultUtil.error(e.toString());
        }
        if (setting.getValue().equals(SettingConstant.LOCAL_OSS)) {
            OssSetting os = new Gson().fromJson(settingService.get(SettingConstant.LOCAL_OSS).getValue(), OssSetting.class);
            result = os.getHttp() + os.getEndpoint() + "/" + f.getId();
        }
        return ResultUtil.data(result);
    }

    public Integer getType(String type) {
        switch (type) {
            case SettingConstant.QINIU_OSS:
                return CommonConstant.OSS_QINIU;
            case SettingConstant.ALI_OSS:
                return CommonConstant.OSS_ALI;
            case SettingConstant.TENCENT_OSS:
                return CommonConstant.OSS_TENCENT;
            case SettingConstant.MINIO_OSS:
                return CommonConstant.OSS_MINIO;
            case SettingConstant.LOCAL_OSS:
                return CommonConstant.OSS_LOCAL;
            default:
                return -1;
        }
    }
}
