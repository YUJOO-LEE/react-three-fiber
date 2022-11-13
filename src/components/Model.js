import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useMemo } from 'react';

const Model = (props) => {
  const { nodes, scene } = useLoader(GLTFLoader, props.path);

  useMemo(
    () =>
      Object.values(nodes).forEach(
        (obj) =>
          obj.isMesh &&
          Object.assign(obj, { castShadow: false, receiveShadow: false })
      ),
    [nodes]
  );

  return <primitive
    scale={[0.01, 0.01, 0.01]} 
    position={[100, 0, 100]}
    rotation-y={-2.36}
    object={scene}
    {...props}
  />
}

export default Model;
