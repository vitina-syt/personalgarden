import { useTexture } from "@react-three/drei";
// import { MeshMatcapMaterialProps } from "@react-three/fiber";
import { forwardRef } from "react";
import { MeshMatcapMaterial } from "three";
import { useSelector, useDispatch } from 'react-redux'

export const CustomMaterial = forwardRef((props, ref) => {
  // const matcap = useStore((x) => x.texture);
  const matcap=useSelector(state=>state.material.value)
  const texture = useTexture(matcap.file);
  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    ></meshMatcapMaterial>
  );
});
