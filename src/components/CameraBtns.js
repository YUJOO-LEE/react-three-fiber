import { useRef } from 'react';
import state from '../state';

function CameraBtns({ setIndex }) {
  const btns = useRef(null);

  const pos = {
    0: {
      cameraPos: [55, 125, 95],
      target: [-80, -300, 0],
    },
    1: {
      cameraPos: [153, 127, 45],
      target: [-50, 0, -100],
    },
    2: {
      cameraPos: [50, 150, -200],
      target: [-200, 10, -1000],
    },
    3: {
      cameraPos: [95, 120, 120],
      target: [-50, 10, 250],
    },
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
      {Array(4).fill().map((_, idx) => {
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