import './scss/style.scss';
//import Orbit from './components/Orbit';
import * as THREE from 'three';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { useRef, Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls});

// 화면 축 변경 컴포넌트
const Orbit = ()=>{
	const {camera, gl} = useThree();
	return <orbitControls args={[camera, gl.domElement]} />
}

const Bulb = (props)=>{
	return(
		<mesh {...props}>
			<pointLight 
				castShadow
				intensity={1}
			/>
			{/* 반지금, 가로면분할, 세로면분할 */}
			<sphereGeometry args={[0.5, 20, 20]} />
			<meshPhongMaterial emissive='yellow'/>
		</mesh>
	);
}

const Box = (props)=>{
	const ref = useRef(null);
	const texture = useLoader(THREE.TextureLoader, `${process.env.PUBLIC_URL}/img/wood.jpg`);
	useFrame(()=>{
		ref.current.rotation.x += 0.01;
		ref.current.rotation.y += 0.01;
	})
	return (
		<mesh ref={ref} {...props}
			receiveShadow
			castShadow
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
		>
			<boxGeometry />
			<meshPhysicalMaterial
				map={texture} 
				// 컬러 지정 color='white' 
				// 유리 느낌 roughness={0} clearcoat={1} transparent transmission={0.5} reflectivity={1} side={THREE.DoubleSide}
				// 메탈 느낌 metalness={1} roughness={0.5} clearcoat={0.5}
			/>
		</mesh>
	);
}

const Floor = (props)=>{
	return(
		<mesh {...props}
			receiveShadow
		>
			<boxGeometry args={[20, 1, 10]}/>
			<meshPhysicalMaterial color='white' />
		</mesh>
	);
}

const handlePointerDown = (e)=>{
	console.log(e.object);
	// 클릭한 object 에 active 키값을 만들고 true 로 지정
	e.object.active = e.object.active ? false : true;
	// 해당 정보값을 다시 윈도우 전역객체에 옮겨담기
	window.activeMesh = e.object;
}

const handlePointerEnter = (e)=>{
	e.object.scale.x = 1.5;
	e.object.scale.y = 1.5;
	e.object.scale.z = 1.5;
}

const handlePointerLeave = (e)=>{
	// 오브젝트 클릭 시 active 키값이 True 아닐때만 동작
	if (!e.object.active) {
		e.object.scale.x = 1;
		e.object.scale.y = 1;
		e.object.scale.z = 1;
	}
}

function App() {
	return (
		<figure>
			<Canvas
				shadowMap
				style={{background: '#111'}}
				camera={{position:[1, 5, 1]}}	// x, y, z
			>
				<axesHelper args={[6]} />
				<Orbit />

				{/* <fog attach='fog' args={['white', 1, 10]} /> */}
				<ambientLight intensity={0.2} />
				<Bulb position={[0, 3, 0]} />
				<Suspense fallback={null}>
					<Box position={[-2, 1, 0]} />
				</Suspense>
				<Suspense fallback={null}>
					<Box position={[2, 1, 0]} />
				</Suspense>
				<Floor position={[0, -0.5, 0]} />
			</Canvas>
		</figure>
	);
}

export default App;
