import React from 'react'
import Navbar1 from './Navbar1';
import ImageGallery from 'react-image-gallery';
import { escapades_photo } from "./photo-api/escapades_photo";
import 'react-image-gallery/styles/css/image-gallery.css';

function Portfolio_escapades() {
  return (
    <>
    <Navbar1/>
        <div className="portfolio-classic">
            
        <div className="padding-container mt-5">
                <div className="container-fluid-one">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 h-100 col-lg-8">
                            <h1 className="heading mb-4">Escapades</h1>
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
                                     <ImageGallery items={escapades_photo} autoPlay={true} />
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
                       <a href="/portfolio_wedding">
                        <h3 className="text-center mb-4">Wedding</h3>
                        <p className="text-center opacity-75 mb-4">THE BIG DAY</p>
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

export default Portfolio_escapades