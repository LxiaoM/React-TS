import requestConfig from '../config/requestConfig';

// 配置环境变量，不存在的时候默认走dev

const UMI_APP_SERVER = process.env.UMI_APP_SERVER ?? 'dev';

// 全局配置操作
let nowServerConfig = requestConfig[UMI_APP_SERVER as keyof typeof requestConfig];
// Console
if (nowServerConfig.debug.info === false) {
  window.console.info = () => {};
}
if (nowServerConfig.debug.warn === false) {
  window.console.warn = () => {};
}
if (nowServerConfig.debug.log === false) {
  window.console.log = () => {};
}
if (nowServerConfig.debug.error === false) {
  window.console.error = () => {};
}
if (nowServerConfig.debug.debug === false) {
  window.console.debug = () => {};
}
