import React from 'react';
import { ProductCard, Tag, Button } from 'react-vant';

const Tabledata=(props) => {
    console.log('props',props)//获取父组件传来的值
  return (
    <ProductCard
      num="2"
      price="2.00"
      desc={props.tabledata&&props.tabledata.name||''}
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  );
};
export default Tabledata;