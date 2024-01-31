import React from 'react'
import { WiStars } from "react-icons/wi";
import './SpecialOfferGroup.css'

export default function SpecialOfferGroup(props) {
  return (
    <div className={`special-offer-group ${props.position}`}>
        <div className='special-offer-group__image'>
            <img src={props.image} alt={props.alt} />
        </div>
        <div className='special-offer-group__text'>
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            <WiStars id='star'/>
        </div>
    </div>
  )
}
