import React from 'react'
import './Features.css'

export default function Features(props) {
  return (
    <div className='Features'>
       <div className='feat-circle-img'>
            <img src={new URL(props.url, import.meta.url).href} alt={props.name} />
       </div>
       <div className="feat-title">
            {props.title}
       </div>
    </div>
  )
}
