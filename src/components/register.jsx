import React, { useState } from 'react';

const Register=()=>{
    const[info,setInfo]=useState({})
    const login=()=>{
        console.log('hello',info)
    }
    const saveformdata=(type)=>{
        return (e)=>{
            console.log('e,type',e,type)
            setInfo({...info,[type]:e.target.value})
        }
    }
    return (
        <>
        <form action='' method='post'>
        <div className="box  h-16 leading-[4rem] bg-slate-100/50  z-10 flex flex-row mb-[8px] rounded-md">
                    <span className='z-20 px-1 	block'>username</span>
                    <input className='pl-1 flex-1 flex-1 bg-slate-100/50  rounded-r-md' 
                    type='text' name='username' onChange={saveformdata('username')}></input>
                </div>
                <div className="box  h-16 leading-[4rem] bg-slate-100/50  z-10 flex flex-row mb-[8px] rounded-md">
                <span className='z-20 px-1 	block'>password</span>
                    <input className='pl-1 flex-1 flex-1 bg-slate-100/50  rounded-r-md' 
                    type='password' name='password' onChange={saveformdata('password')}></input>
                </div>
                <div className="box h-8 leading-[2rem] bg-slate-100 z-10 rounded-md hover:bg-lime-950 hover:text-white" type='submit' onClick={login}>Submit</div>
        </form>
        </>
    )
}

export default Register