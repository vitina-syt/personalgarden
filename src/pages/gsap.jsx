import React, { useLayoutEffect, useRef,Suspense,useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Canvas } from "@react-three/fiber";
import Spaceman from './spaceman';
import { Anchor } from 'antd';

import '../css/gsap.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
        gsap.to(box, {
          x: 100,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            markers: true,
          },
        });
      });
     
    },
    { scope: main }
  );

  const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
  };
  return (
    <div>
        <div style={{'position':'relative'}}>
          <Canvas className="spaceman" style={{'width':'1000px','height':'800px'}} camera={{ near: 0.1, far: 1000 ,position: [0, 0, 5]}}>
        <Suspense fallback={null}>
        <Spaceman rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
        
        </Suspense>
        </Canvas>
        <div className="section column" ref={main}>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        </div>  
        </div>
        
      {/* <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section> */}
      <div className='anchor'>
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
      </div>
      <div id='brief' style={{'height':'300px'}}>brief</div>
      <div id='hobbies' style={{'height':'300px'}}>hobbies</div>
    </div>
  );
}

export default Gsap