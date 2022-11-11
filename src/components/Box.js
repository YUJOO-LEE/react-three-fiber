import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';

const handlePointerDown = (e)=>{
	//console.log(e.object);
	// 클릭한 object 에 active 키값을 만들고 true 로 지정
	e.object.active = true;
	// 해당 정보값을 다시 윈도우 전역객체에 옮겨담기

	if (window.activeMesh) {
		scaleDown(window.activeMesh);
		window.activeMesh.active = false;
	}
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

const scaleDown = (object)=>{
	object.scale.x = 1;
	object.scale.y = 1;
	object.scale.z = 1;
}

function Box(props) {
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

export default Box;