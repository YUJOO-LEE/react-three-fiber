import React from 'react';

function Introduction() {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div className='inner introduction'>
      <h2>Introduction</h2>
      <div>
        <div className='profile'>
          <ul>
            <li>Director</li>
            <li>Yujoo Lee</li>
            <li>lllllllllee@gmail.com</li>
          </ul>
          <div className='imgWrap'>
            <img src={`${baseUrl}/img/director.png`} alt='director' />
          </div>
        </div>
        <p>Generally, the sole superiors of the director are the producers and the studio that is financing the film, although sometimes the director can also be a producer of the same film. The role of a director differs from producers in that producers typically manage the logistics and business operations of the production, whereas the director is tasked with making creative decisions. The director must work within the restrictions of the film's budget[14] and the demands of the producer and studio (such as the need to get a particular age rating)</p>
      </div>
    </div>
  )
}

export default Introduction;