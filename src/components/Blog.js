import React, { useState } from 'react'
import BlogApi from "./photo-api/BlogApi"
import Navbar1 from './Navbar1';

function Blog() {

    const [blogData, setblogData] = useState(BlogApi)

  return (
    <>
        <Navbar1/>
        <div className="portfolio-classic">

            <div className="padding-container mt-5">
                <div className="container-fluid-one">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 h-100 col-lg-8">
                            <h1 className="heading mb-4">My Blogs</h1>
                        </div>
                    </div>
                </div>
            </div>

           
                   
                    <div className="padding-container" >
                        <div className='clearfix'>
                            <div className="container-fluid max-w-1200">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="feature-links grid-wrapper-container">
                                            <div className="row">
                                            {blogData.map((curElem) =>{
                                            return(
                                                <>
                                                <div className='col-md-6 col-sm-12'>
                                                    <a href="" className='portfolio-tag'>
                                                        <div className="feature-link-grid feature-size">
                                                        <div className="grid-wrapper-content">
                                                            <div className="feature-image">
                                                                <img className="feature-image-one" src={curElem.image} alt="" />
                                                            </div>
                                                            <div className="feature-text text-center">
                                                                <h2>{curElem.title}</h2>
                                                                <p className='opacity-75'>{curElem.date}</p>
                                                                <span><i class="fas fa-arrow-right"></i></span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                </>
                                                )
                                             })}
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

export default Blog