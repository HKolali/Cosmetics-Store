import React from 'react'
import { Image } from 'react-bootstrap';
import { CiShoppingCart } from "react-icons/ci";
import './SpecialOfferItem.css'

export default function SpecialOfferItem(props) {
    return (
        <div className='special-offer-item'>
            <Image src={props.image} rounded className="special-offer-item__image" />
            <span className="special-offer-item__title">{props.title}</span>
            <div className="special-offer-item__price">
                <span className="special-offer-item__value">{props.price}</span>
                <span className="special-offer-item__unit">تومان</span>
            </div>
            <CiShoppingCart className="special-offer-item__icon"></CiShoppingCart>
        </div>
    )
}
