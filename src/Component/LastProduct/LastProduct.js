import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Container, Row, Col } from 'react-bootstrap';
import { WiStars } from "react-icons/wi";
import SpecialOfferItem from './../SpecialOffer/SpecialOfferItem/SpecialOfferItem'
import 'swiper/css';
import './LastProduct.css'

export default function LastProduct() {

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

    const nextTo = () => {
        swiper.slideNext();
    };

    const prevTo = () => {
        swiper.slidePrev();
    };

    return (
        <>
            <svg className='last-product__wave-start' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#494949" fill-opacity="1" d="M0,288L30,261.3C60,235,120,181,180,160C240,139,300,149,360,160C420,171,480,181,540,181.3C600,181,660,171,720,170.7C780,171,840,181,900,170.7C960,160,1020,128,1080,112C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <div className='last-product'>
                <h2 className="last-product__title">پیشنهاد <span>ویژه</span><WiStars /></h2>
                <h3 className="last-product__show-all"><SlArrowLeft id='arrow-left' />مشاهده همه</h3>

                <div className='last-product__items'>
                    <button onClick={prevTo} className='last-product__items-change'><SlArrowLeft /></button>
                    <Swiper className='last-product__items-swiper'
                        slidesPerView={5}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop>
                        {products.length > 0 && products.map((product) =>
                            <SwiperSlide><SpecialOfferItem key={product.id} {...product} /></SwiperSlide>
                        )}
                    </Swiper>
                    <button onClick={nextTo} className='last-product__items-change'><SlArrowRight /></button>
                </div>
            </div>
            <svg className='last-product__wave-end' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#494949" fill-opacity="1" d="M0,288L30,261.3C60,235,120,181,180,160C240,139,300,149,360,160C420,171,480,181,540,181.3C600,181,660,171,720,170.7C780,171,840,181,900,170.7C960,160,1020,128,1080,112C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </>
    )
}
