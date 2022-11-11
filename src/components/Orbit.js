import { useThree } from 'react-three-fiber';

// 중심축 생성
function Orbit() {
  const { camera, gl  } = useThree();

  return (
    <orbitControls attach='orbitControls'
      args={[camera, gl.domElement]}
    ></orbitControls>
  )
}

export default Orbit