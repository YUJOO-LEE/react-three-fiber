import React from 'react'

function Bulb(props) {
	return(
		<mesh {...props}>
			<pointLight 
				castShadow
				intensity={1}
			/>
			{/* 반지금, 가로면분할, 세로면분할 */}
			<sphereGeometry args={[1, 20, 20]} />
			<meshPhongMaterial emissive='yellow'/>
		</mesh>
	);
}

export default Bulb