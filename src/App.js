import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
import Dragable from './components/Dragable';
import Model from './components/Model';

function App() {
	return (
		<figure>
			<Canvas
				shadowMap
				style={{background: '#222'}}
				camera={{position:[10, 20, 45]}}	// x, y, z
			>
				<axesHelper args={[5]} />
				<Orbit />
				<fog attach='fog' args={['#111', 20, 200]} />
				<ambientLight intensity={0.2} />
				<Suspense fallback={null}>
					<Model path={`${process.env.PUBLIC_URL}/hippie/scene.gltf`}
						position={[200, 5, -350]}
					/>
				</Suspense>
				<Dragable>
					<Bulb position={[5, 0, 25]} />
				</Dragable>
			</Canvas>
		</figure>
	);
}

export default App;
