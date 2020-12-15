package com.animal.snail.modules.base.serviceimpl;

import com.animal.snail.modules.base.dao.SettingDao;
import com.animal.snail.modules.base.entity.Setting;
import com.animal.snail.modules.base.service.SettingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 配置接口实现
 * @author Exrick
 */
@Slf4j
@Service
@Transactional
public class SettingServiceImpl implements SettingService {

    @Autowired
    private SettingDao settingDao;

    @Override
    public Setting get(String id) {

        return settingDao.findById(id).orElse(new Setting(id));
    }

    @Override
    public Setting saveOrUpdate(Setting setting) {

        return settingDao.saveAndFlush(setting);
    }
}