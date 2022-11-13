import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import Model from './components/Model';
import Floor from './components/Floor';

function App() {
	return (
		<figure>
			<ColorPicker/>
			<Canvas
				shadowMap
				style={{background: '#ddd'}}
				camera={{position:[100, 20, 100]}}	// x, y, z
			>
				<axesHelper args={[6]} />
				<Orbit />

				{/* <fog attach='fog' args={['#111', 20, 200]} /> */}
				{/* <ambientLight intensity={0} /> */}
				<Suspense fallback={null}>
					<Model path={`${process.env.PUBLIC_URL}/adventure/scene.gltf`} />
				</Suspense>
				<Dragable>
					<Bulb position={[85, 100, 95]} />
					<Bulb position={[95, 100, 85]} />
					{/* <Bulb position={[45, 10, 55]} />
					<Bulb position={[55, 10, 45]} /> */}
					{/* 
					<Suspense fallback={null}>
						<Box position={[-2, 1, 0]} />
					</Suspense>
					<Suspense fallback={null}>
							<Box position={[2, 1, 0]} />
					</Suspense>
					*/}
				</Dragable>
					{/* <Floor position={[0, -0.5, 0]} /> */}
			</Canvas>
		</figure>
	);
}

export default App;
