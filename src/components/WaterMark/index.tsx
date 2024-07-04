import { Watermark, WatermarkProps } from 'antd';
import React from 'react';

const OCWatermark: React.FC<WatermarkProps> = (props) => {
  // 可以在这里添加额外的逻辑或属性
  return <Watermark {...props}></Watermark>;
};

export default OCWatermark;
