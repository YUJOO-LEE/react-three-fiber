import { extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

// 중심축 생성
function Orbit(props) {
	const {camera, gl} = useThree();
	return <orbitControls args={[camera, gl.domElement]} {...props}/>

}

export default Orbit;