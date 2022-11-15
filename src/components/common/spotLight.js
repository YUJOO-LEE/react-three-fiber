import React from 'react'

function spotLight({position, ...props}) {
	return(
		<mesh position={position}>
			<spotLight {...props}
				//castShadow
			/>
			{/* 반지름, 가로면분할, 세로면분할 */}
			<sphereGeometry args={[0.5, 20, 20]} />
			<meshPhongMaterial emissive='orange'/>
		</mesh>
	);
}

export default spotLight