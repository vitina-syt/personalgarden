import React, {  useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delperson, addperson } from '../reducer/personer'

//react redux模拟
const Adminrudex=()=>{
    const person=useSelector((state) => state.person.value)
    console.log('person',person)
    const dispatch = useDispatch()
    const addpersoner=()=>{
            dispatch(addperson({name:'123',id:'0'}))
            
    }
    const delpersoner=(id)=>{
            dispatch(delperson(id))
    }
    return (
        <>
        <ul>
            {person&&person.map((item)=>(
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
export default Adminrudex;