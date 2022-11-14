import { useRef, useEffect } from 'react';

function Txt({ index }) {
  const txt = useRef(null);

  const init = () => {
    const boxs = txt.current.querySelectorAll('article');
    boxs.forEach((box) => {
      const tit = box.querySelector('h2');
      const tit_txt = tit.innerText;
      let newTags = '';

      for (const type of tit_txt) newTags += `<span>${type}</span>`;
      tit.innerHTML = newTags;
    })
  }

  const activation = () => {
    const boxs = txt.current.querySelectorAll('article');
    for (const box of boxs) box.classList.remove('on');
    boxs[index].classList.add('on');
  }

  useEffect(init, [])
  useEffect(activation, [index])

  return (
    <section className='txt' ref={txt}>
      <article>
        <h2>Consect</h2>
      </article>
      <article>
        <h2>Dolor</h2>
      </article>
      <article>
        <h2>Lorem</h2>
      </article>
      <article>
        <h2>Sit amet</h2>
      </article>
      <article>
        <h2>Adipisic</h2>
      </article>
      <article>
        <h2> Corporis</h2>
      </article>
    </section>
  );
}

export default Txt;