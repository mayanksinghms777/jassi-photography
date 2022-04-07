import React from 'react'
import Navbar from './Navbar';
import './Css File/portfolio.css'
import feature_one from './images/0008548-2759c646.jpeg'
import feature_two from './images/DSC07317-ffcd163a.jpeg'
import feature_three from './images/DSC03323-2-de6c580c.jpeg'
import feature_four from './images/KE-1154-d4dbf107.jpeg'

function Portfolio() {
    return (
        <>
            <Navbar/>
            <div className="portfolio">
                <div className="header">
                       <div className="padding-container pt-0 px-0">
                            <div className="block-container">
                            <div className="">
                            <div className="container-fluid  d-flex flex-column w-100 h-100">
                                <div className="row">
                                    <div className="col-12 px-0">
                                        <div className="header-portfolio-background">
                                            <div className="element"></div>
                                        </div>
                                        <div className="header-text text-center">
                                            <div className="row justify-content-center mx-0">
                                                <div className="col-10 col-lg-8 max-w-900">
                                                    <h1 className="aboutme-text">My Portfolio</h1>
                                                    <p className="aboutme-text1">EVERY PHOTO TELLS A STORY</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                       </div>
                </div>

                <div className="portfolio-main">
                    <div className="padding-container">
                        <div className="container-fluid max-w-1200">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-8">
                                    <div className="portfolio-text">
                                        <p>Capturing moments and creating memories is what we do, what we live and breathe. We want to be part of your journey and document it in the purest form. Let us be your companion, so we can create something unique and beautiful. We love to travel the world, no matter where you are from.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="padding-container">
                        <div className='clearfix'>
                            <div className="container-fluid max-w-1200">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="feature-links grid-wrapper-container">
                                            <div className="row">
                                                <div className='col-md-6 col-sm-12'>
                                                    <a href="/portfolio_wedding" className='portfolio-tag'>
                                                        <div className="feature-link-grid feature-size">
                                                        <div className="grid-wrapper-content">
                                                            <div className="feature-image">
                                                                <img className="feature-image-one" src={feature_one} alt="" />
                                                            </div>
                                                            <div className="feature-text text-center">
                                                                <h2>Wedding</h2>
                                                                <p>The Big Day</p>
                                                                <span><i class="fas fa-arrow-right"></i></span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </a>
                                                    <div className='col-12 mt-5'>
                                                        <a href="/portfolio_escapades" className='portfolio-tag'>
                                                            <div className="feature-link-grid feature-size-one">
                                                                <div className="feature-image">
                                                                    <img className="feature-image-one" src={feature_three} alt="" />
                                                                </div>
                                                                <div className="feature-text text-center">
                                                                    <h2>Escapades</h2>
                                                                    <p>Beginning of a journey</p>
                                                                    <span><i class="fas fa-arrow-right"></i></span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-sm-12'>
                                                        <a href="/portfolio_classic" className='portfolio-tag'>
                                                            <div className="feature-link-grid feature-size-one">
                                                                <div className="feature-image">
                                                                    <img className="feature-image-one" src={feature_two} alt="" />
                                                                </div>
                                                                <div className="feature-text text-center">
                                                                    <h2>Classic</h2>
                                                                    <p>The Elegance</p>
                                                                    <span><i class="fas fa-arrow-right"></i></span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='col-12 mt-4'>
                                                            <a href="/portfolio_travel" className='portfolio-tag'>
                                                                <div className="feature-link-grid feature-size-two">
                                                                    <div className="feature-image">
                                                                        <img className="feature-image-one" src={feature_four} alt="" />
                                                                    </div>
                                                                    <div className="feature-text text-center">
                                                                        <h2>Travel</h2>
                                                                        <p>Living Life</p>
                                                                        <span><i class="fas fa-arrow-right"></i></span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                </div>                                              
                                            </div>                                   
                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Portfolio
