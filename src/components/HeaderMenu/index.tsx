import {
  CloseOutlined,
  StarFilled,
  StarOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Drawer, Input, Menu } from 'antd';
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import React, { useState } from 'react';
import styles from './index.less';

const HeaderMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // 抽屉样式重构
  const containerStyle: React.CSSProperties = {
    top: 56,
    boxSizing: 'border-box',
  };
  const drawerStyles: DrawerStyles = {
    header: {
      display: 'none',
    },
    content: {
      width: '1000px',
      boxShadow: 'inset rgb(102, 102, 102) 3px -2px 6px',
    },
    body: {
      padding: 0,
    },
    wrapper: {
      width: '1000px',
    },
  };

  // 左侧菜单信息
  type MenuItem = Required<MenuProps>['items'][number];

  const menusItems: MenuItem[] = [
    {
      key: 'sub1',
      label: '产品与服务',
      children: [
        { key: '9', label: 'ERP 系统' },
        { key: '10', label: 'OA 系统' },
        { key: '11', label: 'WMS 系统' },
        { key: '12', label: 'PDA 系统' },
        { key: '13', label: 'TMS 系统' },
      ],
    },
    {
      key: 'sub2',
      label: '我的收藏',
      children: [
        { key: '19', label: 'ERP 系统' },
        { key: '110', label: 'OA 系统' },
        { key: '111', label: 'WMS 系统' },
        { key: '112', label: 'PDA 系统' },
        { key: '113', label: 'TMS 系统' },
      ],
    },
  ];
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <>
      {open ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <CloseOutlined />
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            showDrawer();
          }}
        >
          <UnorderedListOutlined />
        </Button>
      )}
      <Drawer
        rootStyle={containerStyle}
        styles={drawerStyles}
        destroyOnClose={true}
        title="Menu Test"
        placement="left"
        size="large"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onClose={(e) => {
          e.stopPropagation();
          onClose();
        }}
        open={open}
      >
        <div className={styles.menuContainer}>
          {/* 左侧菜单模块 */}
          <div className={styles.left}>
            <Menu
              onClick={onClick}
              className={styles.menuBox}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={menusItems}
            />
          </div>
          {/* 右侧内容模块 */}
          <div className={styles.right}>
            {/* 顶部搜索工具栏 */}
            <div className={styles.topContainer}>
              <div className={styles.rightTitle}>产品与服务</div>
              <div className={styles.cursorAni} onClick={onClose}>
                <CloseOutlined />
              </div>
            </div>
            {/* 内容主体部分 */}
            <div className={styles.rightContainer}>
              {/* 搜索栏 */}
              <div className={styles.searchBar}>
                <Input
                  className={styles.searchInput}
                  placeholder="请输入关键词"
                  prefix={<UserOutlined />}
                />
              </div>
              {/* 内容区域 */}
              <div className={styles.bodyBox}>
                {/* 最近访问 */}
                <div>
                  <div className={styles.itemTitle}>最近访问</div>
                  <div className={styles.itemGrads}>
                    <div className={styles.item}>
                      <div>Order List</div>
                      <div className={styles.cursorAni}>
                        <StarOutlined />
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div>Black Order List</div>
                      <div className={styles.cursorAni}>
                        <StarOutlined />
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div>Order Reveiw</div>
                      <div className={styles.cursorAni}>
                        <StarFilled className={styles.star} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 按照功能块切割具体细节模块（参考阿里 计算、容器、存储、网络与存储、安全等等） */}
                <div>
                  <div className={styles.itemTitle}>
                    <div className={styles.itemMenuTitle}>产品</div>
                    <div className={styles.itemMenuLine}></div>
                  </div>
                  <div className={styles.itemGrads}>
                    <div className={styles.childItems}>
                      <div className={styles.itemTitle}>
                        <div>新品编辑</div>
                      </div>
                      <div className={styles.item}>
                        <div>SKU 图文需求</div>
                      </div>
                      <div className={styles.item}>
                        <div>指派任务列表</div>
                      </div>
                      <div className={styles.item}>
                        <div>处理人任务列表</div>
                      </div>
                      <div className={styles.item}>
                        <div>终审页面</div>
                      </div>
                    </div>
                    <div className={styles.childItems}>
                      <div className={styles.itemTitle}>
                        <div>产品管理</div>
                      </div>
                      <div className={styles.item}>
                        <div>说明书管理</div>
                      </div>
                      <div className={styles.item}>
                        <div>认证管理</div>
                      </div>
                    </div>
                    <div className={styles.childItems}>
                      <div className={styles.itemTitle}>
                        <div>产品管理</div>
                      </div>
                      <div className={styles.item}>
                        <div>全部产品</div>
                      </div>
                      <div className={styles.item}>
                        <div>产品搜索</div>
                      </div>
                    </div>
                    <div className={styles.childItems}>
                      <div className={styles.itemTitle}>
                        <div>商品中心</div>
                      </div>
                      <div className={styles.item}>
                        <div>产品线</div>
                      </div>
                      <div className={styles.item}>
                        <div>提案管理</div>
                      </div>
                      <div className={styles.item}>
                        <div>项目调研</div>
                      </div>
                      <div className={styles.item}>
                        <div>项目开发</div>
                      </div>
                      <div className={styles.item}>
                        <div>新品审核</div>
                      </div>
                      <div className={styles.item}>
                        <div>新品会</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
