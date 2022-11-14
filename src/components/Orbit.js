import { useThree } from 'react-three-fiber';

function Orbit() {
  const { camera, gl } = useThree();

  console.log(camera);
  return (
    <orbitControls attach='orbitControls' args={[camera, gl.domElement]} />
  )
}

export default Orbit;