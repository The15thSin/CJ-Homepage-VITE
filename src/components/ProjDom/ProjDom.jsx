import React, { useState } from 'react';
import './ProjDom.css'
import ProjDomsCards from '../ProjDomsCards/ProjDomsCards';
import json from '../../imagepaths.json'

export default function ProjDom() {

  const domainArray = json.ProjDom.domainArray;

  return (
    <div className='ProjDom'>
      <div className='projDom-head'>
        Project Domains
      </div>
      <div className='projDoms-domains'>
      {
        domainArray.map(domainArray => (
          <ProjDomsCards key={domainArray.key} title={domainArray.title} imgUrl={domainArray.imgUrl} desc={domainArray.desc}/>
          ))
      } 
      </div>
        
    </div>
  )
}
