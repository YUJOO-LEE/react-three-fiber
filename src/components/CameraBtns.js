import { useRef } from 'react';
import state from '../state';

function CameraBtns({ setIndex }) {
  const btns = useRef(null);

  const pos = {
    0: {
      value: 'Introduction',
      cameraPos: [55, 125, 95],
      target: [-80, -300, 0],
    },
    1: {
      value: 'Incident',
      cameraPos: [153, 127, 45],
      target: [-50, 0, -100],
    },
    2: {
      value: 'Reference',
      cameraPos: [50, 150, -200],
      target: [-200, 10, -1000],
    },
    3: {
      value: 'Contact',
      cameraPos: [95, 120, 120],
      target: [-50, 10, 250],
    },
    4: {
      value: 'Yujoo',
      cameraPos: [50, 300, 220],
      target: [0, 0, 0],
    },
  }

  const handleClick = index => {
    const btns_li = btns.current.querySelectorAll('li');
    for (const btn of btns_li) btn.classList.remove('on');
    if (index < 4) {
      btns_li[index].classList.add('on');
    }

    state.cameraPos.set(...pos[index].cameraPos);
    state.target.set(...pos[index].target);
    state.shouldUpdate = true;
    setIndex(index);
  }

  return (
    <>
      <h1 onClick={() => handleClick(4)}>{pos[4].value}</h1>
      <ul className='cameraBtns' ref={btns}>
        {Array(4).fill().map((_, idx) => {
          let isOn = '';
          if (idx === 0) isOn = 'on';

          return (
            <li key={idx} className={isOn} onClick={() => handleClick(idx)}>
              {pos[idx].value}
            </li>)
          }
        )}
      </ul>
    </>
  );
}

export default CameraBtns;