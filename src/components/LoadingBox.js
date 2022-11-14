import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber';

function LoadingBox() {
  const obj = useRef(null);

  useFrame(()=>{
    obj.current.rotation.x += 0.03;
    obj.current.rotation.Y += 0.03;
  })

  return (
    <mesh ref={obj}>
      <boxGeometry attach='geometry' args={[50, 50, 50]} />
      <meshStandardMaterial attach='material' transparent wireframe color={'#fff'} />
    </mesh>
  )
}

export default LoadingBox;