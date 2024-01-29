import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SpecialOfferItem from './SpecialOfferItem/SpecialOfferItem'
import 'swiper/css';
import './SpecialOffer.css'

export default function SpecialOffer() {

  const [swiper, setSwiper] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => {
        return response.json()
      }).then((data) => {
        setProducts(data)
      })
  }, [])

  const nextTo = () => {
    swiper.slideNext();
  };

  const prevTo = () => {
    swiper.slidePrev();
  };

  return (
    <div className='special-offer'>
      <img className='special-offer__divider' src="image/divider.png" alt="" />
      <h2 className="special-offer__title">پیشنهاد <span>ویژه</span></h2>
      <h3 className="special-offer__show-all"><SlArrowLeft id='arrow-left' />مشاهده همه</h3>

      <div className='special-offer__items'>
        <button onClick={prevTo} className='special-offer__items-change'><SlArrowLeft /></button>
        <Swiper className='special-offer__items-swiper'
          slidesPerView={5}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop>
        {products.length > 0 && products.map((product) =>
          <SwiperSlide><SpecialOfferItem key={product.id} {...product} /></SwiperSlide>
        )}
      </Swiper>
      <button onClick={nextTo} className='special-offer__items-change'><SlArrowRight /></button>
    </div>
    </div >
  )
}
