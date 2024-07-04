import { Skeleton, SkeletonProps } from 'antd';
import React from 'react';

/**
 * 使用场景
 *   网络较慢，需要长时间等待加载处理的情况下。
 *   图文信息内容较多的列表/卡片中。
 *   只在第一次加载数据的时候使用。
 *   可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。
 *
 * 骨架屏支持项
 *   默认开启动画效果
 *   Avatar     头像
 *   Title      标题
 *   Paragraph  段落
 *   Button     按钮
 *   Input      输入框
 * @param props
 * @returns
 */
const OCSkeleton: React.FC<SkeletonProps> = (props) => {
  return <Skeleton active {...props}></Skeleton>;
};

export default OCSkeleton;
