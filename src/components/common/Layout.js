import { useRef, useEffect } from 'react';
import Introduction from '../content/Introduction';
import Incident from '../content/Incident';
import Reference from '../content/Reference';
import Contact from '../content/Contact';
import Main from '../content/Main';

function Layout({ index }) {
  const section = useRef(null);

  const activation = () => {
    const boxs = section.current.querySelectorAll('article');
    for (const box of boxs) box.classList.remove('on');
    boxs[index].classList.add('on');
  }

  useEffect(activation, [index]);

  return (
    <section ref={section}>
      <article>
        <Introduction />
      </article>
      <article>
        <Incident />
      </article>
      <article>
        <Reference />
      </article>
      <article>
        <Contact />
      </article>
      <article>
        <Main />
      </article>
    </section>
  );
}

export default Layout;