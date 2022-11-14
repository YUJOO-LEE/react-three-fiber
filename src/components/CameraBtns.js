import { useRef } from 'react';
import state from '../state';

function CameraBtns({ setIndex }) {
  const btns = useRef(null);

  const pos = {
    0: {
      cameraPos: [115, 125, 95],
      target: [0, 0, 0],
    },
    1: {
      cameraPos: [95, 120, 120],
      target: [-50, 10, 250],
    },
    2: {
      cameraPos: [-7, -1, 7],
      target: [0, 0, 0],
    },
    3: {
      cameraPos: [-9, 0, -2],
      target: [0, 0, 0],
    }
  }

  const handleClick = index => {
    const btns_li = btns.current.querySelectorAll('li');
    for (const btn of btns_li) btn.classList.remove('on');
    btns_li[index].classList.add('on');

    state.cameraPos.set(...pos[index].cameraPos);
    state.target.set(...pos[index].target);
    state.shouldUpdate = true;
    setIndex(index);
  }

  return (
    <ul className='cameraBtns' ref={btns}>
      {Array(6).fill().map((_, idx) => {
        let isOn = '';
        if (idx === 0) isOn = 'on';

        return (
          <li key={idx} className={isOn} onClick={() => handleClick(idx)}>{`view${idx + 1}`}</li>)
      }
      )
      }
    </ul>
  );
}

export default CameraBtns;