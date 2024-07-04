import { AvatarDropdown, AvatarName, HeaderMenu, Question, SelectLang } from '@/components';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { Link, history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import requestConfig from '../config/requestConfig';
import { errorConfig } from '../config/requestErrorConfig';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

// 配置环境变量，不存在的时候默认走dev

const UMI_APP_SERVER = process.env.UMI_APP_SERVER ?? 'dev';
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// TODO 框架顶部重构区域
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    actionsRender: () => [
      <Question key="doc" />,
      <Question key="doc" />,
      <SelectLang key="SelectLang" />,
    ],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // 水印透传，赋予水印对应内容信息(水印展示标准：依据阿里系默认约定，水印展示在主体内容区域)
    waterMarkProps: {
      content: initialState?.currentUser?.name,
      // image: "https://sso.oceania-sh.com/static/img/OceaniaLOGO-1.91fadb4.png"// 对于特殊情况下用户名不存在，此时展示对应公司图标 Oceania
    },
    // footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return <>{children}</>;
    },
    ...initialState?.settings,
    logo: () => [
      <>
        {/* 这里不用headerTitleRender  用作UI简单处理 */}
        <HeaderMenu></HeaderMenu>
      </>,
    ],
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  // 接口请求超时时间，50s
  timeout: 50000,
  // 统一Header
  headers: { Authorization: 'Bearer ' + 'xxxxxxxxx' },
  // 统一请求
  baseURL: requestConfig[UMI_APP_SERVER as keyof typeof requestConfig].baseURL,
  // 异常拦截器（）
  ...errorConfig,
};

/**
 * 微服务配置
 */
export const qiankun = {
  apps: requestConfig[UMI_APP_SERVER as keyof typeof requestConfig].appConfig,
};
