import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Container, Row, Col } from 'react-bootstrap';
import { WiStars } from "react-icons/wi";
import SpecialOfferItem from './SpecialOfferItem/SpecialOfferItem'
import SpecialOfferGroup from './SpecialOfferGroup/SpecialOfferGroup'
import 'swiper/css';
import './SpecialOffer.css'

export default function SpecialOffer() {

  const [swiper, setSwiper] = useState(null);
  const [products, setProducts] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("api/products.json")
      .then((response) => {
        return response.json()
      }).then((data) => {
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    fetch("api/group.json")
      .then((response) => {
        return response.json()
      }).then((data) => {
        setGroups(data)
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
      <h2 className="special-offer__title">پیشنهاد <span>ویژه</span><WiStars /></h2>
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

      <Container className='w-75'>
        <Row>
          {groups.length > 0 && groups.map((group) =>
            <Col><SpecialOfferGroup key={group.id} {...group} /></Col>
          )}
        </Row>
      </Container>
    </div >

  )
}
