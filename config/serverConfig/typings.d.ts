// @ts-ignore
/* eslint-disable */

declare namespace ServerConfig {
  // 是否开启调试模式，输出对应调试信息
  type Debug = {
    log?: Boolean;
    info?: Boolean;
    warn?: Boolean;
    error?: Boolean;
    debug?: Boolean;
  };
  // 弹窗message 提示
  type MessageAlert = {
    duration?: number; // 默认自动关闭延时，单位秒
    maxCount?: number; // 最大显示数，超过限制时，最早的消息会被自动关闭·
  };
  // 通知提示框
  type NotificationAlert = {
    duration?: number;
    maxCount?: number; // 最但显示数，超过限制时，最早的消息会被自动关闭
  };
}
