// 测试环境配置
export default {
  baseURL: '//192.168.59.5',
  debug: <ServerConfig.Debug>{
    log: true,
    info: true,
    warn: true,
    error: true,
    debug: true,
  },
  // 弹窗提示
  messageConfig: <ServerConfig.MessageAlert>{
    maxCount: 3,
  },
  // 通知提示
  notificationConfig: <ServerConfig.NotificationAlert>{
    maxCount: 3,
  },
  // 微服务信息
  appConfig: <ServerConfig.MicrosoftApps>[
    // SCP 商品中心
    {
      name: 'scp-product',
      entry: '//product-test.oceaniasoft.com',
    },
  ],
};
