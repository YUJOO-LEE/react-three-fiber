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

const Box = (props)=>{
	const ref = useRef(null);
	useFrame(()=>{
		ref.current.rotation.z += 0.01;
	})
	return (
		<mesh ref={ref} {...props}
		>
			<boxGeometry />
			<meshPhysicalMaterial color='blue' />
		</mesh>
	);
}

const Floor = (props)=>{
	return(
		<mesh {...props}>
			<boxGeometry args={[20, 1, 10]}/>
			<meshPhysicalMaterial />
		</mesh>
	);
}

function App() {
	return (
		<figure>
			<Canvas // shadowMap 
				style={{background: '#111'}}
				camera={{position:[3,3,3]}}	// x, y, z
			>
				<axesHelper args={[6]} />
				<Orbit />

				<ambientLight intensity={0.2} />
				<Box position={[-1, 1, 2]} />
				<Floor position={[0, -0.5, 0]} />
			</Canvas>
		</figure>
	);
}

export default App;
