import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls});

// 화면 축 변경 컴포넌트
const Orbit = ()=>{
	const {camera, gl} = useThree();
	return <orbitControls args={[camera, gl.domElement]} />
}

const Box = ()=>{
	const ref = useRef(null);
	useFrame(()=>{
		ref.current.rotation.z += 0.01;
	})
	return (
		<mesh ref={ref}>
			<boxGeometry />
			<meshBasicMaterial color='blue' />
		</mesh>
	);
}

function App() {
	return (
		<figure>
			<Canvas // shadowMap 
				style={{background: '#111'}}
				camera={{position:[7,7,7]}}	// x, y, z
			>
				<axesHelper args={[6]} />
				<Orbit />
				<Box />
			</Canvas>
		</figure>
	);
}

export default App;
