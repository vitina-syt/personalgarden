import { Canvas } from '@react-three/fiber'
import '../css/threeD.css'

const ThreeD=()=>{
    return (
        <div id="canvas-container">
          <Canvas>
          <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
          </Canvas>
        </div>
      )
}
export default ThreeD