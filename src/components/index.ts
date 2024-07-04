/**
 * 这个文件作为组件的目录
 * 目的是统一管理对外输出的组件，方便分类
 * 命名规则：
 *  框架布局组件：大驼峰命名(帕斯卡命名)  （调整前请联系Eric.Guo 并在钉钉群进行同步）
 *  业务组件：{prefix} + {AntDesign底层组件名}   系统默认Prefix 为 OC
 *      eg：OCButton
 * 使用：import { xxx } from '@/components';
 * 权重说明：
 *  组件权重 < 业务场景使用权重
 *  不推荐：在业务中对属性进行修改，覆盖默认组件全局样式（会造成系统UI,UX的不一致），特殊场景下使用需要联系Eric.Guo 并钉钉群进行同步
 *  推荐：全局统一化，涉及到某个具体组件，在组件中进行调整，从而全局生效
 */
// 框架布局组件
import Footer from './Footer';
import HeaderMenu from './HeaderMenu';
import { Question, SelectLang } from './RightContent';
import { AvatarDropdown, AvatarName } from './RightContent/AvatarDropdown';

// 业务组件
import OCButton from './Button';
import OCCard from './Card';
import OCSkeleton from './Skeleton';
import OCWatermark from './WaterMark';

// 对外导出组件
export {
  AvatarDropdown,
  AvatarName,
  Footer,
  HeaderMenu,
  OCButton,
  OCCard,
  OCSkeleton,
  OCWatermark,
  Question,
  SelectLang,
};
