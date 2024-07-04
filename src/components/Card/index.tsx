import { useModel } from '@umijs/max';
import { Card, CardProps } from 'antd';
import React from 'react';

const OCCard: React.FC<CardProps> = (props) => {
  // 可以在这里添加额外的逻辑或属性
  const { initialState } = useModel('@@initialState');
  return (
    <Card
      style={{
        borderRadius: 8,
        backgroundImage:
          initialState?.settings?.navTheme === 'realDark'
            ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
            : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
      }}
      {...props}
    ></Card>
  );
};

export default OCCard;
