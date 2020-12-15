package com.animal.snail.modules.base.controller.manage;

import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.utils.StopWordsUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.base.entity.StopWord;
import com.animal.snail.modules.base.service.StopWordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Exrick
 */
@Slf4j
@RestController
@Api(description = "禁用词管理管理接口")
@RequestMapping("/snail/stopWord")
@Transactional
public class StopWordController {

    @Autowired
    private StopWordService stopWordService;

    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<StopWord>> getByCondition(StopWord stopWord, SearchVo searchVo, PageVo pageVo){

        Page<StopWord> page = stopWordService.findByCondition(stopWord, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<StopWord>>().setData(page);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ApiOperation(value = "保存数据")
    public Result<StopWord> save(StopWord stopWord) {

        StopWord s = stopWordService.save(stopWord);
        StopWordsUtil.addWord(stopWord.getTitle());
        return new ResultUtil<StopWord>().setData(s);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ApiOperation(value = "更新数据")
    public Result<StopWord> update(StopWord stopWord) {

        StopWord old = stopWordService.get(stopWord.getId());
        StopWord s = stopWordService.update(stopWord);
        StopWordsUtil.removeWord(old.getTitle());
        StopWordsUtil.addWord(stopWord.getTitle());
        return new ResultUtil<StopWord>().setData(s);
    }

    @RequestMapping(value = "/delByIds", method = RequestMethod.POST)
    @ApiOperation(value = "批量通过id删除")
    public Result<Object> delByIds(@RequestParam String[] ids) {

        for (String id : ids) {
            StopWord stopWord = stopWordService.get(id);
            stopWordService.delete(id);
            StopWordsUtil.removeWord(stopWord.getTitle());
        }
        return ResultUtil.success("批量通过id删除数据成功");
    }

}