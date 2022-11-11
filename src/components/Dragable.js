import { DragControls }from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useRef, useEffect, useState } from 'react';
extend({ DragControls });

function Dragable(props) {

  const groupRef = useRef(null);
  const controlRef = useRef(null);
  const { camera, gl, scene } = useThree();
  const [ Children, setChildren ] = useState([]);

  useEffect(()=>{
    //console.log(groupRef.current);
    setChildren(groupRef.current.children);
  }, []);

  // box 컴포넌트가 실제로 dragable 컴포넌트에 담기는 순간 호버 연결
  useEffect(()=>{
    // console.log(Children);
    //if (!Children.length) return;
    controlRef.current.addEventListener('hoveron', (e)=>{
      scene.__objects[0].enabled = false;
    })
    controlRef.current.addEventListener('hoveroff', (e)=>{
      scene.__objects[0].enabled = true;
    })
  }, [Children])

  return (
    <group ref={groupRef}>
      <dragControls args={[Children, camera, gl.domElement]} ref={controlRef} />
        {props.children}
    </group>
  );
}

export default Dragable;