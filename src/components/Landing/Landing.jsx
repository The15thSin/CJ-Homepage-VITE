import React from 'react';

import "./Landing.css";

export default function Welcome() {
  window.scrollTo(0,0);
  return (
    <div className='landing'>
      <div className='intro'>
          <h1>WE ARE THE CODING JUNCTION</h1>
      </div>
      <div className='typing-text'>
        <h3>
          University Institute of Technology
        </h3>
      </div>
    </div>
  )
}
