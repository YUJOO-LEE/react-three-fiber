import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useRef, useEffect, useState } from 'react';
extend({ DragControls });

function Dragable(props) {
  const { camera, gl, scene } = useThree();
  const groupRef = useRef(null);
  const controlRef = useRef(null);
  const [Children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, [])

  useEffect(() => {
    //Dragable컴포넌트로 감싸져있는 자식 3D 오브제에 호버시 orbit기능 비활성화해서 각 3d오브제만 드래그 가능
    controlRef.current.addEventListener('hoveron', e => {
      scene.orbitControls.enabled = false;
    });
    controlRef.current.addEventListener('hoveroff', e => {
      scene.orbitControls.enabled = true;
    });
    controlRef.current.addEventListener('dragstart', e => {
      console.log(e.object);
    })
  }, [Children])

  return (
    <group ref={groupRef}>
      <dragControls ref={controlRef} args={[Children, camera, gl.domElement]} />
      {props.children}
    </group>
  )
}

export default Dragable;