import React from 'react'
import Navbar from './Navbar';
import './Css File/aboutme.css'
import photo from './images/Screenshot 2022-01-07 at 5.11.33 PM.png'
import testnomials_photo1 from './images/0008548-2759c646.jpeg'
import testnomials_photo2 from './images/DSC02157_1-2-1158dcd7.jpeg'
import testnomials_photo3 from './images/0002420-2-97348576.jpeg'
import testnomials_photo4 from './images/008203-937a3570.jpeg'
import testnomials_photo5 from './images/DSC08733-2a415259.jpeg'

function About() {
    return (
        <>
         <Navbar/>
            <div className="about-me">
                   <div className="header">
                       <div className="padding-container pt-0 px-0">
                            <div className="block-container">
                            <div className="">
                            <div className="container-fluid  d-flex flex-column w-100 h-100">
                                <div className="row">
                                    <div className="col-12 px-0">
                                        <div className="header-background">
                                            <div className="element"></div>
                                        </div>
                                        <div className="header-text text-center">
                                            <div className="row justify-content-center mx-0">
                                                <div className="col-10 col-lg-8 max-w-900">
                                                    <h1 className="aboutme-text">About Me</h1>
                                                    <p className="aboutme-text1">GET TO KNOW ME A LITTLE BETTER</p>
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
                   <div className="about-main">
                       <div className="padding-container">
                           <div className="container-fluid max-w-1200">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 order-2 position-relative aboutme-photo-text">
                                        <div className="aboutme-photo-text1">
                                            <h2 className="aboutme-photo-text-h2 mb-3">Hi, I am Jaspreet Singh.</h2>
                                            <p className="aboutme-photo-text-p mt-5">Coming from a family of doctors, of course I took up Biotechnology in my under graduation. However, I mostly spent time outside appreciating the beauty of nature. My college was located in Vizag, next to a beach and I could not resist myself from capturing the picturesque scenes right in front of my eyes. Fast forwarding eight years from then, I am working as a software engineer at Akamai, Bengaluru, now and alongside started my own photography company with my wife. I wanted to give the creative side of me, a chance to bloom. Travelling helped me broaden my perspective on concepts and composition. And now I can call myself a professional photographer, who through years of experience and practice is doing a good job at meaningfully giving back to the society.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 order-1 aboutme-photo position-relative">
                                        <div className="aboutme-photo-container">
                                            <div className="row mx-0">
                                                <div className="col-12 justify-content-center">
                                                    <div className="aboutme-photo-responsive">
                                                        <img className="aboutme-img" src={photo} alt="" />
                                                    </div>
                                                    <div className="aboutme-photo-responsive1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                       </div>

                       <div className="padding-container">
                           <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="testinomials-h1 text-center">Testimonials</h1>
                                        <div className="testnomials-container position-relative container-fluid">
                                            <div className="testnomials-elements row mx-0">
                                                <div className="col-lg-6 col-sm-12 col-md-6 pb-5 mobile-padding">
                                                    <img className="figure-img img-fluid rounded" src={testnomials_photo1} alt="" />
                                                    <h3 className="testnomials-elements-h3">
                                                    “Eshant and Khushboo were really great to work with!
                                                    <br />
                                                    <br />
                                                    They captured some absolutely amazing pictures of our wedding day! We would definitely recommend them :)”
                                                    <label className="testnomials-elements-label">—KRISHNAN & ANJALI</label>
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 col-md-6 pb-5 mobile-padding">
                                                    <img className="figure-img img-fluid rounded" src={testnomials_photo2} alt="" />
                                                    <h3 className="testnomials-elements-h3">
                                                    “Big thanks to Eshant n Khushboo. These guys did an awesome job on our wedding photography. Our pictures are dreamy! Very professional and friendly team. Would definitely recommend them”                                                    <label className="testnomials-elements-label">—KRISHNAN & ANJALI</label>
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 col-md-6 pb-5 mobile-padding">
                                                    <img className="figure-img img-fluid rounded" src={testnomials_photo3} alt="" />
                                                    <h3 className="testnomials-elements-h3">
                                                    “We loved our whole experience with you guys! How comfortable you made us feel during the photo shoots, how well the pictures show our love and happiness, how skillfully you've captured our story in the videos... Everything!I love the way the photos chronicle the whole wedding!We truly appreciate all your efforts and cherish everything you've given us. Not just the photos and videos, but also the experience of knowing you. You are both wonderful people, and it has been a pleasure interacting with you!”                                                    <label className="testnomials-elements-label">—KRISHNAN & ANJALI</label>
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 col-md-6 pb-5 mobile-padding">
                                                    <img className="figure-img img-fluid rounded" src={testnomials_photo4} alt="" />
                                                    <h3 className="testnomials-elements-h3">
                                                    “Eshant and Khushboo were really great to work with!
                                                    <br />
                                                    <br />
                                                    They captured some absolutely amazing pictures of our wedding day! We would definitely recommend them :)”
                                                    <label className="testnomials-elements-label">—KRISHNAN & ANJALI</label>
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 col-md-6 pb-5 mobile-padding">
                                                    <img className="figure-img img-fluid rounded" src={testnomials_photo5} alt="" />
                                                    <h3 className="testnomials-elements-h3">
                                                    “Eshant and Khushboo were really great to work with!
                                                    <br />
                                                    <br />
                                                    They captured some absolutely amazing pictures of our wedding day! We would definitely recommend them :)”
                                                    <label className="testnomials-elements-label">—KRISHNAN & ANJALI</label>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                       </div>

                       <div className="padding-container">
                           <div className="container-fluid max-w-1200">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <a href="/contact" className="contact-me-button button">
                                            <span>Contact Me</span>
                                        </a>
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
            </div>
        </>
    )
}

export default About
