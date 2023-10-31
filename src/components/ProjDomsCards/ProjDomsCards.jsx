import React,{useState} from 'react'
import './ProjDomsCards.css'

export default function ProjDomsCards(props) {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <span className='domains-card' onClick={()=>setToggle(!toggle)}>
                <h5>
                    {props.title}
                </h5>
                {toggle ?
                <>
                    <img src={new URL(props.imgUrl, import.meta.url).href} alt="logo" />
                    <p className='view-more'>Click to view more</p>
                </>
                 :
                 <p className='domain-details'>{props.desc}</p>
                }
            </span>
        </div>
    )
}
