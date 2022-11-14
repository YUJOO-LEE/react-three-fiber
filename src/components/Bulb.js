import React from 'react'

function Bulb({position, ...props}) {
	return(
		<mesh position={position}>
			<pointLight 
				{...props}
				castShadow
			/>
			{/* 반지름, 가로면분할, 세로면분할 */}
			<sphereGeometry args={[5, 20, 20]} />
			<meshPhongMaterial emissive='orange'/>
		</mesh>
	);
}

export default Bulb