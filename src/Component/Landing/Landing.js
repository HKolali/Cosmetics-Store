import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './Landing.css'
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <Container fluid className='landing-background'>
            <Row className='landing'>
                <Col>
                    <Image className='landing__image' src="image/landing-2.png" />
                </Col>
                <Col>
                    <div className='landing__text'>
                        <h1 className='landing__text-title'><span id='landing__text-title-header'>یک روز  زیبا </span> <br/>  با ما شروع می‌شود</h1>
                        <div className='landing__text-btns'>
                            <Link className='landing__text-btn-product'> محصولات </Link>
                            <Link className='landing__text-btn-consultation'>مشاوره 
                            </Link>
                            {/* <SlArrowLeft className='landing__text-btn-consultation-icon'/> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
