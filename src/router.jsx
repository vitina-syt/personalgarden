import * as React from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import Home from "./pages/home"
import Warnlist from "./pages/warnlist"
import Admin from "./pages/admin"
import Adminrudex from './pages/adminRudex'
import Adminrudexthunk from './pages/adminRudexthunk'
import ThreeD from './pages/threeD'
import Gsap from './pages/gsap'
import { Button } from 'react-vant';
 
function Router() {
    let navigate=useNavigate()
    const referto=()=>{
      navigate('/')
    }
  return (
    <>
    {/* <Button type='primary' onClick={referto}>Home</Button> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/warnlist" element={<Warnlist />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminRudex" element={<Adminrudex />} />
      <Route path="/adminRudexthunk" element={<Adminrudexthunk />} />
      <Route path="/threeD" element={<ThreeD />} />
      <Route path="/gsap" element={<Gsap />} />
      </Routes>
    </>
    
  );
}
 
export default Router;