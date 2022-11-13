import React from 'react'

const Floor = (props)=>{
	return(
		<mesh {...props}
			receiveShadow
			castShadow
		>
			<boxGeometry args={[1000, 1, 1000]}/>
			<meshPhysicalMaterial color='white' />
		</mesh>
	);
}

export default Floor