import React, { useLayoutEffect, useRef,Suspense,useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Canvas } from "@react-three/fiber";
import Spaceman from '../components/spaceman';
import Chosematerial from '../components/chosematerial';
import Register from '../components/register';
import '../index.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function slipup(className){
    gsap.to(className, {
        x: 100,
        scrollTrigger: {
          trigger: className,
          start: 'bottom bottom',
          end: 'top 50%',
          scrub: true,
          markers: true,
        },
      });
}

 function Gsap() {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([2, 2, 2]);
    const [position, setPosition] = useState([0.2, -0.7, 0]);
  const main = useRef();

  
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        // gsap.ticker.add(slipup(box),true,true)
        //  gsap.ticker.remove(slipup(box))
        gsap.to(box, {
            x: 600,
            scrollTrigger: {
              trigger: box,
              start: 'bottom bottom',
              end: 'top 40%',
              scrub: true,
              markers: true,
            },
          });
      });
     
    },
    { scope: main });
//   const handleClick = (e, link) => {
//     e.preventDefault();
//     console.log(link);
//   };
  return (
    <div className='bg-lime-800 w-full flex flex-col '>
        <div className='w-full h-max flex flex-col relative top-[200px]'>
            <Canvas className="spaceman w-full h-1/3 absolute"  style={{height:'800px'}}camera={{ near: 0.1, far: 1000 ,position: [0, 0, 5]}}>
                <Suspense fallback={null}>
                <Spaceman rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
                </Suspense>
            </Canvas>
            <div className="block absolute float-left top-[340px]" ref={main}>
                <Register></Register>
            </div>  
            <div className='block absolute right-[20px] top-[340px] flex flex-col z-10'>
            <Chosematerial></Chosematerial>
            </div>
        </div>
        {/* <Item3></Item3> */}
      {/* <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section> */}
      {/* <div className='anchor'>
      <Anchor affix={false} onClick={handleClick} 
    items={[
      {
        key: '1',
        href: '#brief',
        title: 'My Brief',
      },
      {
        key: '2',
        href: '#hobbies',
        title: 'My Hobbies',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
      </div> */}
      <div id='brief'className='h-96'>brief</div>
      <div id='hobbies' className='h-96'>hobbies</div>
    </div>
  );
}

export default Gsap