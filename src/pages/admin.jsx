import React, {  useState } from 'react'

//组件内部变量
const Admin=()=>{
  let person=[
        {id:'0',name:'ww'},
        {id:'1',name:'qq'},
        {id:'2',name:'wwe'}
    ]
    const [personlist,setPersonlist]=useState(person)
    const addperson=()=>{
            setPersonlist([...personlist,{name:'123',id:'3'}])
    }
    const delperson=(id)=>{
            setPersonlist(personlist.filter(item=>item.id!==id))
    }
    return (
        <>
        <ul>
            {personlist.map((item)=>(
              <li key={item.id}>
              <span>
                {item.name}
              </span>
             
              <button onClick={()=>delperson(item.id)}>删除</button>
            </li>
            
        ))}
        </ul>
         <button onClick={addperson}>增加</button>
        </>
        
    )
}
export default Admin;