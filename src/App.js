import './scss/style.scss';
//import Orbit from './components/Orbit';
import { Canvas } from 'react-three-fiber';
//Suspense 리액트 컴포넌트 안쪽에서 비동기 실행되는 구문을 동기화
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Bulb from './components/Bulb';
import Box from './components/Box';
import Floor from './components/Floor';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';

function App() {
	return (
		<figure>
			<ColorPicker/>
			<Canvas
				shadowMap
				style={{background: '#111'}}
				camera={{position:[7, 5, 7]}}	// x, y, z
			>
				<axesHelper args={[6]} />
				<Orbit />

				{/* <fog attach='fog' args={['white', 1, 10]} /> */}
				<ambientLight intensity={0.2} />
				<Bulb position={[0, 3, 0]} />
				<Dragable>
					<Suspense fallback={null}>
						<Box position={[-2, 1, 0]} />
					</Suspense>
					<Suspense fallback={null}>
						<Box position={[2, 1, 0]} />
					</Suspense>
				</Dragable>
				<Floor position={[0, -0.5, 0]} />
			</Canvas>
		</figure>
	);
}

export default App;
