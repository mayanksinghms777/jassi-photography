import React from 'react'
import Navbar1 from './Navbar1';
import './Css File/portfolio_classic.css'
import Gallery from "react-photo-gallery";
import { classic_photo } from "./photo-api/classic_photo";

function Portfolio_classic() {
    
  return (
    <>
    <Navbar1/>
        <div className="portfolio-classic">

            <div className="padding-container mt-lg-5 mt-sm-2">
                <div className="container-fluid-one">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 h-100 col-lg-8">
                            <h1 className="heading mb-lg-4 mb-sm-0">Classic</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding-container">
                <div className="container-fluid-one max-w-1200">
                    <div className="row justify-content-center">
                        <div className="col-12 ">
                            <p className="text-center opacity-75 mb-4">Coloured photos are good but Black and White (B&W) photos will always be classic. Unlike the regular photographers, we indulge in professional B&W edits. Every shade has its own story to tell and classic photos must never be neglected.</p>
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
                                    <Gallery photos={classic_photo} direction={"column"} />
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
                        <a href="/portfolio_wedding">
                        <h3 className="text-center mb-4">Wedding</h3>
                        <p className="text-center opacity-75 mb-4">THE BIG DAY</p>
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

export default Portfolio_classic