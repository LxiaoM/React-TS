// 生产环境配置
export default {
  baseURL: 'https://sso.oceania-sh.com',
  debug: <ServerConfig.Debug>{
    log: false,
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
