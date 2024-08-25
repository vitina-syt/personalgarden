import { useAnimations, useGLTF } from "@react-three/drei";

import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/spaceman.glb";
import { useGSAP } from "@gsap/react";

const Spaceman = ({ scale, position }) => {
    const spacemanRef = useRef();
    const { scene, animations } = useGLTF(spacemanScene);
    const { actions } = useAnimations(animations, spacemanRef);
  
    useEffect(() => {
      actions["Idle"].play();
    }, [actions]);
//   useGSAP(()=>{
//     gsap.to('.spaceman', {
//         keyframes: {
//           "0%": { yPercent: 0, scaleX: 1, scaleY: 1 },
//           "7%": { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: "sine.in" },
//           "25%": { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: "sine.in" },
//           "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
//           "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
//           "65%": { yPercent: 500, scaleX: 1, scaleY: 1 },
//           "100%": { yPercent: 0, scaleX: 1, scaleY: 1 },
//           easeEach: "sine.out"
//         },
//         duration: 0.8,
//         repeat: -1,
//         transformOrigin: "center bottom"
//       });
//   },[])
    return (
            <mesh ref={spacemanRef} position={position} scale={scale} rotation={[0, 2.2, 0]}>
        <primitive object={scene} />
      </mesh>
      
    );
  };
  export default Spaceman;