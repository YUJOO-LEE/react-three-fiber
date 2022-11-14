import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas, extend } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { Suspense, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
//import spotLight from './components/spotLight';
import Dragable from './components/Dragable';
import Model from './components/Model';
import CameraControls from './components/CameraControls';
import CameraBtns from './components/CameraBtns';
import Txt from './components/Txt';
extend({ OrbitControls });

function App() {

	const [ Index, setIndex] = useState(0);

	return (
		<figure>
			<Canvas
				shadowMap
				colorManagement
				style={{background: '#222'}}
			>
				<axesHelper args={[5]} />
				<CameraControls />
				<Orbit />
				<fog attach='fog' args={['#111', 20, 2000]} />
				<ambientLight intensity={0.5} />

				{/* <Dragable> */}
					<Suspense fallback={null}>
						<Model path={`${process.env.PUBLIC_URL}/office/scene.gltf`}
							// position={[200, 5, -350]} // hippie 용
							position={[-800, 70, -500]} 
							scale={[10, 10, 10]} // office
						/>
					</Suspense>
				<Dragable>
					<Bulb position={[120, 120, -20]}
						intensity={2}
						color='#FFE08C'
						distance={100}
						decay={0.2}
					/>
					<Bulb position={[125, 100, -290]}
						intensity={2}
						color='#FFE08C'
						distance={300}
						decay={0.2}
					/>
					<Bulb position={[125, 190, 370]}
						intensity={2}
						color='#FFE08C'
						distance={500}
						decay={1}
					/>
					<spotLight position={[45, 240, 40]}
						intensity={3}
						color='#FAECC5'
						angle={Math.PI/4}
						penumbra={0.01}
						attenuation={5} anglePower={4}
					/>
				</Dragable>
			</Canvas>

			<CameraBtns setIndex={setIndex} />
			<Txt index={Index} />
		</figure>
	);
}

export default App;
