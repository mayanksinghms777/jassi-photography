import React from 'react'
import Navbar1 from './Navbar1';
import './Css File/portfolio_wedding.css'
import Carousel from 'react-bootstrap/Carousel'
import testnomials_photo1 from './images/0008548-2759c646.jpeg'
import testnomials_photo2 from './images/DSC02157_1-2-1158dcd7.jpeg'
import testnomials_photo3 from './images/0002420-2-97348576.jpeg'


function Portfolio_wedding() {



  return (
    <>
        <Navbar1/>
        <div className="portfolio-wedding">

            <div className="padding-container mt-lg-5 mt-sm-2">
                <div className="container-fluid-one">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 h-100 col-lg-8">
                            <h1 className="heading mb-lg-4 mb-sm-0">Wedding</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="padding-container">
                <div className="block-container">
                    <div className="element-photo-slider">
                        <div className="container-fluid max-w-1200">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <Carousel indicators={false}>
                                        <Carousel.Item>
                                        <img
                                        className="d-block w-100 mw-100 mh-100"
                                        src={testnomials_photo1}
                                        alt="First slide"
                                        />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <img
                                        className="d-block w-100 mw-100 mh-100"
                                        src={testnomials_photo2}
                                        alt="Second slide"
                                        />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                        <img
                                        className="d-block w-100 mw-100 mh-100"
                                        src={testnomials_photo3}
                                        alt="Third slide"
                                        />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding-container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 h-100 col-lg-8">
                        <hr className="divider" />
                    </div>
                </div>
            </div>

            <div className="padding-container">
                <div className="container-fluid-one max-w-1200">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 h-100 col-lg-8">
                    <h3 className="text-center mb-4">See More Photos</h3>
                    </div>
                </div>
                </div>
            </div>

            <div className="padding-container see-more">
                <div className="container-fluid-one max-w-1200">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-4 col-lg-4 h-100 pt-4 pb-4">
                       <a href="/portfolio_escapades">
                        <h3 className="text-center mb-4">Escapades</h3>
                        <p className="text-center opacity-75 mb-4">THE BEGINNING</p>
                        <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 h-100 pt-4 pb-4">
                        <a href="/portfolio_classic">
                        <h3 className="text-center mb-4">Classic</h3>
                        <p className="text-center opacity-75 mb-4">THE ELEGANCE</p>
                        <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 h-100 pt-4 pb-4">
                        <a href="/portfolio_travel">
                        <h3 className="text-center mb-4">Travel</h3>
                        <p className="text-center opacity-75 mb-4">LIVING LIFE</p>
                        <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Portfolio_wedding