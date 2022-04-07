import React from 'react'
import Navbar from './Navbar';

function Home() {
    return (
       
        <>
         <Navbar/>
        <section className="home">
        <div className="front-carousel padding-container" id="top">
  <div id="carouselExampleFade" class="carousel slide carousel-fade container--full-width" data-bs-ride="carousel">
  <div class="carousel-inner vh-100">
    <div class="carousel-item active carousel-home vh-100">
    <div className='theme-background'></div>
        <div className="carousel-text">
            <div className="carousel-text1">
                <div className="col-10 col-lg-8 max-w-900">
                    <h1 className="ctext1">Photography is poetry</h1>
                    <p className="ctext2">THE BEAUTY OF MOMENTS</p>
                </div>
            </div>
        </div>
    </div>
    <div class="carousel-item carousel-home vh-100">
    <div className='theme-background'></div>
    <div className="carousel-text">
            <div className="carousel-text1">
                <div className="col-10 col-lg-8 max-w-900">
                    <h1 className="ctext1">Moment</h1>
                    <p className="ctext2">FOLLOW YOUR SOUL</p>
                </div>
            </div>
        </div>
    </div>
    <div class="carousel-item carousel-home vh-100">
    <div className='theme-background'></div>
    <div className="carousel-text">
            <div className="carousel-text1">
                <div className="col-10 col-lg-8 max-w-900">
                    <h1 className="ctext1">Faith</h1>
                    <p className="ctext2">WORLD</p>
                </div>
            </div>
        </div>
    </div>
    <div class="carousel-item carousel-home vh-100">
    <div className='theme-background'></div>
    <div className="carousel-text">
            <div className="carousel-text1">
                <div className="col-10 col-lg-8 max-w-900">
                    <h1 className="ctext1">Pure</h1>
                    <p className="ctext2">world</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className="storyteller padding-container">
    <div className="container-fluid storyteller-container">
        <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
            <div className="col-12 col-md-10 h-100 col-lg-8">
            <div className="text">
                <h1 className="heading mb-4">Hi, I am a Storyteller.</h1>
                <p className="mt-4">I love documenting moments where I try to weave every picture into meaningful and beautiful stories. My style of photography includes candid, documentary, street, landscape, portraiture, weddings and wildlife. Out of all, I particularly specialise in wedding photography as it allows me to interact with new people. Every family, couple, immediate relatives et al I meet during the shoot have varying stories to tell.</p>
                <p className="mt-4">Our travel across different countries have inspired us to look at moments from a very different perspective. It has been quite a journey and I look forward to relishing each and every minute of it.</p>
                <p className="mt-4">My Photography is self-represented and I take clients on a limited basis.</p>
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
    <div className="container-fluid-one">
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 h-100 col-lg-8">
        <h1 className="heading mb-4 opacity-75">See My Work</h1>
        </div>
    </div>
    </div>
</div>

<div className="padding-container">
    <div className="display">
                <div className="container--full-width my-work d-flex align-items-center"> 
                    <div className="my-wrok-one my-work-hover showme">
                    </div>
                    <div className="my-wrok-two my-work-hover showme">
                    </div>
                    <div className="my-wrok-three my-work-hover showme">
                    </div>
                    <div className="container-fluid-one w-100">
                        <div className="row d-flex align-item-center justify-content-center">
                            <div className="col-12 col-md-4">
                                <div className="element-text-one">
                                    <a href="/portfolio_wedding">
                                        <div className="feature-text">
                                            <h2 className="feature-text-one">Wedding</h2>
                                            <p className="feature-text-two">The Big Day</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                            <div className="element-text">
                                <a href="/portfolio_escapades">
                                        <div className="feature-text">
                                            <h2 className="feature-text-one">Escapades</h2>
                                            <p className="feature-text-two">The Beginning</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                                        </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="element-text">
                                <a href="/portfolio_classic">
                                        <div className="feature-text">
                                            <h2 className="feature-text-one">Classic</h2>
                                            <p className="feature-text-two">The Elegance</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                                        </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <div className="display-mobile">
                    <div className="container--full-width">
                        <div className="row my-work-mobile d-flex align-item-center justify-content-center">
                            <div className="col-12 col-md-4 mobile-image">
                                <div>
                                    <a href="">
                                        <div className="my-work-mobile-image"></div>
                                    </a>
                                </div>
                            </div>
                           <div className="col-12 col-md-4  mobile-image">
                                <div>
                                    <a href="">
                                        <div className="my-work-mobile-image-one"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mobile-image">
                                <div>
                                    <a href="">
                                        <div className="my-work-mobile-image-two"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="container-fluid-two w-100">
                        <div className="row d-flex align-item-center justify-content-center">
                            <div className="col-12 col-md-4 height-300px">
                                <div className="element-text-one">
                                    <a href="/portfolio_escapades">
                                        <div className="feature-text-mobile">
                                            <h2 className="feature-text-one-mobile">Escapades</h2>
                                            <p className="feature-text-two-mobile">The Big Day</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 height-300px">
                            <div className="element-text">
                                <a href="/portfolio_wedding">
                                        <div className="feature-text-mobile">
                                            <h2 className="feature-text-one-mobile">Wedding</h2>
                                            <p className="feature-text-two-mobile">The Beginning</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
                                        </div>
                                </a>
                            </div>
                            </div>
                            <div className="col-12 col-md-4 height-300px">
                                <div className="element-text">
                                <a href="/portfolio_classic">
                                        <div className="feature-text-mobile">
                                            <h2 className="feature-text-one-mobile">Classic</h2>
                                            <p className="feature-text-two-mobile">The Elegance</p>
                                            <i class="fas fa-arrow-right d-flex justify-content-center"></i>
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
<div className="padding-container">
    <div className="container container-fluid-one">
        <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2 className="quote opacity-75">“Photography takes an instant out of time, altering life by holding it still.”</h2>
                <hr className="quote-divider" />
            </div>
        </div>
        <div className="row justify-content-center text-center">
            <div className="col-12 col-md-4 col-lg-8 text-center quote">
                <label className="quote-source">- Dorothea lange</label>
            </div>
        </div>
    </div>
</div>
<div className="padding-container block-spacer">
    <div className="container">
        <div className="block-spacer block-size"></div>
    </div>
</div>

</section>
        </>
    )
}

export default Home
