import React from 'react'
import Navbar from './Navbar';
import './Css File/contact.css'

function Contact() {
  return (
    <>
        <Navbar/>
        <div className="contact">
            
        <div className="header">
                       <div className="padding-container pt-0 px-0">
                            <div className="block-container">
                            <div className="">
                            <div className="container-fluid  d-flex flex-column w-100 h-100">
                                <div className="row">
                                    <div className="col-12 px-0">
                                        <div className="header-background-contact">
                                            <div className="element"></div>
                                        </div>
                                        <div className="header-text text-center">
                                            <div className="row justify-content-center mx-0">
                                                <div className="col-10 col-lg-8 max-w-900">
                                                    <h1 className="aboutme-text">Contact Me</h1>
                                                    <p className="aboutme-text1">YOUR STORY BEGINS HERE</p>
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

                <div className="padding-container mt-5">
                <div className="container-fluid-one">
                    <div className="row justify-content-flex-start">
                        <div className="col-12  h-100 ">
                            <h2 className="fs-1 opacity-75 mb-5 text-left">Let's Start Your Journey</h2>
                            <p className="text-left opacity-75 mb-4 text">Thank you so much for considering us to document your wedding day! We are happy for your interest in our work :) Please fill out this small form and Khushboo and I will be in touch with you shortly. If you dont hear back from either of us within 48 hours then please shoot us an email directly on eshantkhush@gmail.com</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="padding-container mt-5">
                <div className="container-fluid-one max-w-1200">
                    <div className="row">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8">
                                    <div className="contact-form">
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">YOUR NAME</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="exampleFormControlInput1">EMAIL ADDRESS</label>
                                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                            </div>
                                            <div class="form-group mt-4">
                                                <label for="exampleFormControlSelect2">WHAT TYPE OF SESSION ARE YOU LOOKING FOR?</label>
                                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                                <option>Wedding</option>
                                                <option>Escapades</option>
                                                <option>Travel</option>
                                                </select>
                                            </div>
                                            <label class="my-1 mr-2 mt-4" for="inlineFormCustomSelectPref">HOW DID YOU HEAR ABOUT ME?</label>
                                                <select class="custom-select my-1 mr-sm-2 ml-4" id="inlineFormCustomSelectPref">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            <div class="form-group mt-4">
                                                <label for="exampleFormControlTextarea1">MESSAGE</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <a href="" className="contact-me-button button mt-4">
                                            <span>Contact Me</span>
                                        </a>
                                        </form>
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

export default Contact