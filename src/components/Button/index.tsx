import { Button, ButtonProps } from 'antd';
import React from 'react';

const OCButton: React.FC<ButtonProps> = (props) => {
  // 可以在这里添加额外的逻辑或属性
  return <Button {...props} />;
};

export default OCButton;
