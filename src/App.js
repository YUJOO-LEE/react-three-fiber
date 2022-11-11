import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas, extend, useFrame } from 'react-three-fiber';
import { useRef } from 'react';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// extend({ OrbitControls});


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
				{/* <Orbit /> */}
				<Box />
			</Canvas>
		</figure>
	);
}

export default App;
