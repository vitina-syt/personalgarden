import React, { useState } from 'react'
import Datafilter from '../components/datafilter';
import Tabledata from '../components/tabledata';

const Home=()=>{
    const [data,setData]=useState()
    //从子组件拿值到父组件，并通过state状态赋值
   const getdata=(value)=>{
      setData(value);
      console.log('value',value)
   }
    return (
      <>
      <Datafilter getdata={getdata}></Datafilter>
      <Tabledata tabledata={data}></Tabledata>
      </>
    );
}
export default Home;