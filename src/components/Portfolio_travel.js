import React from 'react'
import Navbar1 from './Navbar1';
import testnomials_photo1 from './images/0008548-2759c646.jpeg'
import testnomials_photo2 from './images/DSC02157_1-2-1158dcd7.jpeg'
import testnomials_photo3 from './images/KE-1154-d4dbf107.jpeg'
import testnomials_photo4 from './images/0002420-2-97348576.jpeg'
import testnomials_photo5 from './images/KE-1016-df2e87d0.jpeg'

function Portfolio_travel() {
  return (
    <>
        <Navbar1/>
        <div className="portfolio-classic">

        <div className="padding-container mt-5">
                <div className="container-fluid-one">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 h-100 col-lg-8">
                            <h1 className="heading mb-4">Travel</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding-container">
                <div className="container-fluid-one max-w-1200">
                    <div className="row justify-content-center">
                        <div className="col-12 text">
                            <p className="text-center opacity-75 mb-4">You must wonder how did we get into photography and wedding photography specifically. Khushboo and I (Eshant), we love exploring cultures, different ethics, religions, way of living, styles and food. We discovered most of this through travelling. We just did not want to restrict it by clicking ourselves so we thought of expanding our notion of photography from “us” to “them” and could do it best by clicking others in their most special day – wedding. In this section we have traversed our journey of photography, we hope you enjoy it!</p>
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
                                    <div className="row justify-content-center pt-2 pb-2">
                                        <div className="col-12 col-sm-8">
                                            <img className='mw-100 align-middle' src={testnomials_photo1} alt="" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pt-2 pb-2">
                                        <div className="col-12 col-sm-8">
                                            <img className='mw-100 align-middle' src={testnomials_photo3} alt="" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pt-2 pb-2">
                                        <div className="col-12 col-sm-8">
                                            <img className='mw-100 align-middle' src={testnomials_photo2} alt="" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pt-2 pb-2">
                                        <div className="col-12 col-sm-8">
                                            <img className='mw-100 align-middle' src={testnomials_photo4} alt="" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pt-2 pb-2">
                                        <div className="col-12 col-sm-8">
                                            <img className='mw-100 align-middle' src={testnomials_photo5} alt="" />
                                        </div>
                                    </div>
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
                        <a href="/portfolio_wedding">
                        <h3 className="text-center mb-4">Wedding</h3>
                        <p className="text-center opacity-75 mb-4">THE BIG DAY</p>
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

export default Portfolio_travel