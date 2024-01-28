import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import SpecialOfferItem from './SpecialOfferItem/SpecialOfferItem'
import './SpecialOffer.css'

export default function SpecialOffer() {
  return (
    <div className='special-offer'>
      <h2 className="special-offer__title">پیشنهاد <span>ویژه</span></h2>
      <h3 className="special-offer__show-all"><SlArrowLeft id='arrow-left' />مشاهده همه</h3>

      <div className='special-offer__items'>
        <SpecialOfferItem />
        <SpecialOfferItem />
        <SpecialOfferItem />
        <SpecialOfferItem />
      </div>
    </div>
  )
}
