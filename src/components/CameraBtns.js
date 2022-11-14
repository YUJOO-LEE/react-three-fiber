import { useRef } from 'react';
import state from '../state';

function CameraBtns({ setIndex }) {
  const btns = useRef(null);

  const pos = {
    0: {
      value: 'Introduction',
      cameraPos: [27, 62, 47],
      target: [-40, -150, 0],
    },
    1: {
      value: 'Incident',
      cameraPos: [71, 63, 22],
      target: [-25, 0, -50],
    },
    2: {
      value: 'Reference',
      cameraPos: [25, 75, -100],
      target: [-100, 5, -500],
    },
    3: {
      value: 'Contact',
      cameraPos: [47, 60, 60],
      target: [-25, 5, 125],
    },
    4: {
      value: 'Yujoo',
      cameraPos: [25, 150, 110],
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