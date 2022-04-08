import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="padding-container footer-padding">
                    <div className="container-fluid p-0">
                        <div className="footer-style position-relative">
                            <div className="footer-instagram ">
                                <div className="container--full-width">
                                    <div className="row row-margin">
                                        <div className="col-12 col-padding p-0">
                                            <div className="row m-0">
                                                <div className="col-6 col-md-3 col-lg p-0">
                                                    <a href="">
                                                        <div className="instagram-image1"></div>
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-3 col-lg p-0">
                                                    <a href="">
                                                        <div className="instagram-image2"></div>
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-3 col-lg p-0">
                                                    <a href="">
                                                        <div className="instagram-image3"></div>
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-3 col-lg p-0">
                                                    <a href="">
                                                        <div className="instagram-image4"></div>
                                                    </a>
                                                </div>
                                                <div className="d-none d-lg-block col-6 col-md-3 col-lg p-0">
                                                    <a href="">
                                                        <div className="instagram-image5"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="https://www.instagram.com/jaspreetorjassi/" target="_blank" className="link-hover position-absolute top-0 bottom-0 start-0 end-0">
                                                <div className="footer-instagram-text d-flex justify-content-center align-items-center">
                                                    <i class="fab fa-instagram icon-size"></i>
                                                    <h2 className="mb-2">Instagram</h2>
                                                    <span>@JASSI PHOTOGRAPHY</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="col-12 footer-content col-padding">
                                    <div className="footer-border align-items-start d-flex">
                                        <div className="footer-content-element d-flex">
                                            <div className="footer-left-nav">
                                                <ul className="footer-ul">
                                                    <li className="footer-li"><a href="/">HOME</a></li>
                                                    <li className="footer-li"><a href="/about">ABOUT</a></li>
                                                    <li className="footer-li"><a href="/portfolio">PORTFOLIO</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-right-nav">
                                                <ul className="footer-ul">
                                                    <li className="footer-li"><a href="/contact">CONTACT</a></li>
                                                    <li className="footer-li"><a href="/blog">BLOG</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#top" className="go-to-top"><i class="fas fa-arrow-up"></i></a>
                                    </div>
                                    <div className="footer-copyrights d-flex">
                                        <div className="footer-copyright-content">
                                            <p className="footer-copyright-text">All content Copyright © 2022 Jassi Photography</p>
                                            <p className="footer-copyright-text ">Created by <a href="https://mks-portfolio.herokuapp.com/" target="_blank" className='text-danger'>@mayanksinghms777</a></p>
                                        </div>
                                        <div className="footer-icons">
                                            <div className="footer-social-links d-flex">
                                            <a href="" target="_blank" className="footer-fb"><i class="fab fa-facebook-f"></i></a>
                                            <a href="https://www.instagram.com/jaspreetsinghworks/" target="_blank" className="footer-insta"><i class="fab fa-instagram"></i></a>
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

export default Footer
