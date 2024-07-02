# Oceania Frontend 

Oceania 前端框架
# 入门说明
## 项目初始化

```bash
git clone https://gitee.com/oceania-frontend/oceania-front.git
npm install
```

## 本地运行
```bash
npm run start          开发环境（Mock接口）
npm run start:dev      开发环境
npm run start:test     测试环境
npm run start:uat      UAT环境
npm run start:prod     生产环境
```
### 打包项目
```bash
npm run build:dev       开发环境
npm run build:test      测试环境
npm run build:uat       UAT环境
npm run build:prod      生产环境
```
# 项目标准
## 目录结构
```bash
├── config                   # umi 配置，包含路由，构建等配置
│   └── serverConfig         #    -- 不同环境相关配置信息
│   └── UIConfig             #    -- 各个主题包对应配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

## 代码结构
```bash
src
├── components
└── pages
    ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   ├── Form.tsx
    |   ├── index.tsx  // 页面组件的代码
    |   └── index.less // 页面样式
    ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── User
    |   ├── components // group 下公用的组件集合
    |   ├── Login      // group 下的页面 Login
    |   ├── Register   // group 下的页面 Register
    |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              // 其它页面组件代码
```
## 代码提交规范
```bash
    💥 feat: 新功能
    🐛 fix: BUG 修复
    📝 docs: 文档更新
    🌷 UI: UI 调整
    🏰 chore: 基础架构调整
    🌐 locale: 国际化配置
    (英文冒号 + 空格)

官方出处：https://github.com/vuejs/core/blob/main/.github/commit-convention.md
```
# 说明文档
## 框架说明
[框架说明](https://alidocs.dingtalk.com/i/nodes/Qnp9zOoBVBgQ4z5QfpZvw36vJ1DK0g6l?utm_scene=team_space "框架说明")
## 框架包说明
[框架包说明](https://alidocs.dingtalk.com/i/nodes/AR4GpnMqJzjlrLdlIvZenDBoJKe0xjE3?utm_scene=team_space "Node包说明")
