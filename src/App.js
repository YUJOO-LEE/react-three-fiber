import './scss/style.scss';
import { Canvas, extend } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { Suspense, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Orbit from './components/common/Orbit';
import Bulb from './components/common/Bulb';
//import Dragable from './components/Dragable';
import Model from './components/common/Model';
import CameraControls from './components/common/CameraControls';
import CameraBtns from './components/common/CameraBtns';
import Layout from './components/common/Layout';
import LoadingBox from './components/common/LoadingBox';
extend({ OrbitControls });

function App() {

	const [ Index, setIndex] = useState(4);

	return (
		<figure>
			<Canvas
				shadowMap
				colorManagement
				style={{background: '#222'}}
				camera={[25, 150, 110]}
			>
				<axesHelper args={[5]} />
				<CameraControls />
				<Orbit />
				<ambientLight intensity={0.5} />

				<Suspense fallback={<LoadingBox />}>
					<Model path={`${process.env.PUBLIC_URL}/office/scene.gltf`}
						// position={[200, 5, -350]} // hippie 용
						position={[-400, 35, -250]} 
						scale={[5, 5, 5]} // office
					/>
					{/* <Dragable> */}
						<Bulb position={[60, 60, -10]}
							intensity={2}
							color='#FFE08C'
							distance={100}
							decay={0.2}
						/>
						<Bulb position={[62.5, 50, -145]}
							intensity={2}
							color='#FFE08C'
							distance={200}
							decay={0.2}
						/>
						<Bulb position={[62.5, 95, 185]}
							intensity={2}
							color='#FFE08C'
							distance={300}
							decay={1}
						/>
						<spotLight position={[22.5, 120, 20]}
							intensity={3}
							color='#FAECC5'
							angle={Math.PI/4}
							penumbra={0.01}
							attenuation={5} anglePower={4}
						/>
					{/* </Dragable> */}
				</Suspense>
			</Canvas>

			<CameraBtns setIndex={setIndex} />
			<Layout index={Index} />
		</figure>
	);
}

export default App;
