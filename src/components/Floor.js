import React from 'react'

const Floor = (props)=>{
	return(
		<mesh {...props}
			receiveShadow
		>
			<boxGeometry args={[20, 1, 10]}/>
			<meshPhysicalMaterial color='white' />
		</mesh>
	);
}

export default Floor