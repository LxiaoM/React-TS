// 默认主题包

// 声明配置文件数据类型
import { ProLayoutProps } from '@ant-design/pro-components';

// 默认主题配置信息
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  splitMenus: true,
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'ReactTS Demo ERP',
  pwa: true,
  logo: 'https://sso.oceania-sh.com/erp/static/img/OceaniaLOGO-small.8101544.png',
  iconfontUrl: '',
  token: {
    // 通过token 修改样式(注意此处会进行类型检测，不可忽略对应类型带来的异常)
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
