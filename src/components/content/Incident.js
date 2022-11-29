import React from 'react'

function Incident() {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div className='inner incident'>
      <h2>Incident</h2>
      <ul>
        <li>
          <div className="imgWrap">
            <img src={`${baseUrl}/img/polaroid1.png`} alt='polaroid1' />
          </div>
          <p>Your beliefs become your thoughts. Your thoughts become your words. Your words become your actions. Your actions become your habits. Your habits become your values. Your values become your destiny.</p>

        </li>
        <li>
          <div className="imgWrap">
            <img src={`${baseUrl}/img/polaroid2.png`} alt='polaroid2' />
          </div>
          <p>No matter how hard you work for success if your thought is saturated with the fear of failure, it will kill your efforts, neutralize your endeavors and make success impossible.</p>
        </li>
      </ul>
    </div>
  )
}

export default Incident