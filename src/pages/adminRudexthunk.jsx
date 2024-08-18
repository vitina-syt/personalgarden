import React, {  useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delperson, addperson } from '../reducer/personer'

//react reduxthunk模拟
const Adminrudexthunk=()=>{
    const [personlist,setPersonlist]=useState()
    const person=useSelector((state) => state.person.value)
    console.log('person',person)
    const dispatch = useDispatch()
    const addpersoner=()=>{
            dispatch(addperson({name:'123',id:'0'}))
        
              //需要redux中间件添加副作用
              setPersonlist(person)
            
    }
    const delpersoner=(id)=>{
            dispatch(delperson(id))
    }
    return (
        <>
        <ul>
            {personlist&&personlist.map((item)=>(
              <li key={item.id}>
              <span>
                {item.name}
              </span>
             
              <button onClick={()=>delpersoner(item.id)}>删除</button>
            </li>
            
        ))}
        </ul>
         <button onClick={addpersoner}>增加</button>
        </>
        
    )
}
export default Adminrudexthunk;