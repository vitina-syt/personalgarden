import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import {materials} from '../data/material.js'
import { addmaterial,findmaterial ,delmaterial} from '../reducer/materialer.js';

const Chosematerial=(props) => {
    console.log('props',props)//获取父组件传来的值
    const material=useSelector(state=>state.material.value)
    // // console.log('material',material)//获取父组件传来的值
    // const [material,setMaterials]=useState(materials)
        console.log('material',material)//获取父组件传来的值
    const dispatch = useDispatch()
    const changematerial=(id)=>{
      dispatch(findmaterial(id))
    }
    const add=()=>{
      dispatch(addmaterial({id:'4',name:'one',file:'1.jpeg'}))
    }
    const del=()=>{
      dispatch(delmaterial('1'))
    }
  return (
    
    <>
    {material&&material.map((item,index)=>{
         return <button key={item.id} className='leading-[2rem] bg-slate-100 mb-[8px]' onClick={()=>changematerial(item.id)}>{item.name}</button>
      })
    }
    <button id='hobbies' className='leading-[2rem] bg-slate-100 mb-[8px]' onClick={add}>添加</button>
    <button id='hobbies' className='leading-[2rem] bg-slate-100 mb-[8px]'onClick={del}>删除</button></>
  );
};
export default Chosematerial;