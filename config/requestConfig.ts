// 引入对应环境配置信息
import dev from './serverConfig/server.dev';
import prod from './serverConfig/server.prod';
import test from './serverConfig/server.test';
import uat from './serverConfig/server.uat';
/**
 * @name 接口配置文件
 * -------------------------------
 * 提供 dev，test，uat，prod 四个环境
 */
export default {
  // 开发环境
  dev,
  // 测试环境
  test,
  // UAT环境
  uat,
  // 生产环境
  prod,
};
