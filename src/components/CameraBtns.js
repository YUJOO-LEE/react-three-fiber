import state from "../state";


function CameraBtns() {
  const pos = {
    0: {
      cameraPos: [7, 7, 7],
      target: [0, 0, 0]
    },
    1: {
      cameraPos: [10, 10, 10],
      target: [0, 0, 0]
    },
    2: {
      cameraPos: [20, 20, 20],
      target: [0, 0, 0]
    },
    2: {
      cameraPos: [30, 30, 30],
      target: [0, 0, 0]
    }
  }

  const handleClick = (idx)=>{
    state.cameraPos.set(pos[idx].cameraPos);
    state.target.set(pos[idx].target);
    state.shouldUpdate = true;
  }

  return (
    <ul className='camera btns'>
      <li onClick={()=>handleClick(0)}>view1</li>
      <li onClick={()=>handleClick(1)}>view2</li>
      <li onClick={()=>handleClick(2)}>view3</li>
      <li onClick={()=>handleClick(3)}>view4</li>
    </ul>
  )
}

export default CameraBtns