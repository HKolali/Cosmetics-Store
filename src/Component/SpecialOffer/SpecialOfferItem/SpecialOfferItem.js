import React from 'react'
import { Image } from 'react-bootstrap';
import { CiShoppingCart } from "react-icons/ci";
import './SpecialOfferItem.css'

export default function SpecialOfferItem() {
    return (
        <div className='special-offer-item'>
            <Image src="image/product/product-1.webp" rounded className="special-offer-item__image" />
            <span className="special-offer-item__title">کرم دست و صورت پاپایا</span>
            <div className="special-offer-item__price">
                <span className="special-offer-item__value">۱۱۰,۰۰۰</span>
                <span className="special-offer-item__unit">تومان</span>
            </div>
            <CiShoppingCart className="special-offer-item__icon"></CiShoppingCart>
        </div>
    )
}
