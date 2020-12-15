package com.animal.snail.modules.base.utils;

import com.animal.snail.modules.base.entity.Permission;
import com.animal.snail.modules.base.vo.MenuVo;
import cn.hutool.core.bean.BeanUtil;

/**
 * @author Exrick
 */
public class VoUtil {

    public static MenuVo permissionToMenuVo(Permission p) {

        MenuVo menuVo = new MenuVo();
        BeanUtil.copyProperties(p, menuVo);
        return menuVo;
    }
}
