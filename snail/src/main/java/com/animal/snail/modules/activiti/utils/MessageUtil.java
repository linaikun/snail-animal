package com.animal.snail.modules.activiti.utils;

import com.animal.snail.common.constant.ActivitiConstant;
import com.animal.snail.common.constant.SettingConstant;
import com.animal.snail.common.exception.SnailException;
import com.animal.snail.common.utils.EmailUtil;
import com.animal.snail.common.utils.SmsUtil;
import com.animal.snail.modules.activiti.vo.EmailMessage;
import com.animal.snail.modules.base.entity.MessageSend;
import com.animal.snail.modules.base.entity.Setting;
import com.animal.snail.modules.base.entity.User;
import com.animal.snail.modules.base.service.MessageSendService;
import com.animal.snail.modules.base.service.SettingService;
import com.animal.snail.modules.base.service.UserService;
import com.animal.snail.modules.base.vo.OtherSetting;
import cn.hutool.core.util.StrUtil;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Snail
 */
@Transactional
@Component
@Slf4j
public class MessageUtil {

    @Autowired
    private SmsUtil smsUtil;

    @Autowired
    private EmailUtil emailUtil;

    @Autowired
    private UserService userService;

    @Autowired
    private MessageSendService messageSendService;

    @Autowired
    private SettingService settingService;

    public OtherSetting getOtherSetting() {

        Setting setting = settingService.get(SettingConstant.OTHER_SETTING);
        if (StrUtil.isBlank(setting.getValue())) {
            throw new SnailException("系统未配置访问域名");
        }
        return new Gson().fromJson(setting.getValue(), OtherSetting.class);
    }

    /**
     * 发送工作流消息
     * @param userId      发送用户
     * @param content     消息内容
     * @param sendMessage 是否发站内信息
     * @param sendSms     是否发短信
     * @param sendEmail   是否发邮件
     */
    @Async
    public void sendActMessage(String userId, String content, Boolean sendMessage, Boolean sendSms, Boolean sendEmail) {

        User user = userService.get(userId);
        if (user == null) {
            return;
        }
        MessageSend messageSend = new MessageSend();
        messageSend.setUserId(user.getId());
        if (sendMessage && ActivitiConstant.MESSAGE_TODO_CONTENT.equals(content)) {
            // 待办
            messageSend.setMessageId(ActivitiConstant.MESSAGE_TODO_ID);
            messageSendService.send(messageSend);
        } else if (sendMessage && ActivitiConstant.MESSAGE_PASS_CONTENT.equals(content)) {
            // 通过
            messageSend.setMessageId(ActivitiConstant.MESSAGE_PASS_ID);
            messageSendService.send(messageSend);
        } else if (sendMessage && ActivitiConstant.MESSAGE_BACK_CONTENT.equals(content)) {
            // 驳回
            messageSend.setMessageId(ActivitiConstant.MESSAGE_BACK_ID);
            messageSendService.send(messageSend);
        } else if (sendMessage && ActivitiConstant.MESSAGE_DELEGATE_CONTENT.equals(content)) {
            // 委托
            messageSend.setMessageId(ActivitiConstant.MESSAGE_DELEGATE_ID);
            messageSendService.send(messageSend);
        }
        if (StrUtil.isNotBlank(user.getMobile()) && sendSms) {
            try {
                smsUtil.sendActMessage(user.getMobile(), content);
            } catch (Exception e) {
                log.error(e.toString());
            }
        }
        if (StrUtil.isNotBlank(user.getEmail()) && sendEmail) {
            EmailMessage e = new EmailMessage();
            e.setUsername(user.getUsername());
            e.setContent(content);
            e.setFullUrl(getOtherSetting().getDomain());
            try {
                emailUtil.sendTemplateEmail(user.getEmail(), "【Snail】工作流通知提醒", "act-message-email", e);
            } catch (Exception ex) {
                log.error(ex.toString());
            }
        }
    }
}
