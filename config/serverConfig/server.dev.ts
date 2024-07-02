// 开发环境配置
export default {
  // 基础API接口
  baseURL: '/',
  // 调试模式
  debug: <ServerConfig.Debug>{
    log: true,
    info: false,
    warn: false,
    error: false,
    debug: false,
  },
  // 弹窗提示
  messageConfig: <ServerConfig.MessageAlert>{
    maxCount: 3,
  },
  // 通知提示
  notificationConfig: <ServerConfig.NotificationAlert>{
    maxCount: 3,
  },
};
