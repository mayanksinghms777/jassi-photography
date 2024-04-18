import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const handleCollapse = () => {
        console.log("handleCollapse");
        var nav = document.getElementById("navbarBtn");
        var btn = document.getElementById("myNav");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
     };

    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
     };
     
    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
     };
    const close_subnav = () => {
        var close = document.getElementById("subnav");
        var navsvg = document.getElementById("nav_svg");
        close.classList.toggle("sub-nav");
        navsvg.classList.toggle("navsvg");
     };
    
    return (
        <>
            <div id="navColor">
            <div className="nav-main white padding-container pt-0 pb-0">
                <ul className="nav1">
                    <li><NavLink exact={true} to="/jassi-photography" >Home</NavLink></li>
                    <li><NavLink to="/about" >About</NavLink></li>
                    <li className='nav-portfoliolink'><NavLink to="/portfolio" >Portfolio</NavLink>
                        <div className='nav-dropdown'>
                        <ul className='nav-sublink'>
                            <li><NavLink to="/portfolio_classic">Classic</NavLink></li>
                            <li><NavLink to="/portfolio_wedding">Wedding</NavLink></li>
                            <li><NavLink to="/portfolio_escapades">Escapades</NavLink></li>
                            <li><NavLink to="/portfolio_travel">Travel</NavLink></li>
                        </ul>
                        </div>
                    </li>
                </ul>
                <NavLink className="nav2" to="/jassi-photography" >JASSI PHOTOGRAPHY</NavLink>
                <ul className="nav3">
                    <li><NavLink to="/contact" >Contact</NavLink></li>
                    <li><NavLink to="/blog" >Blog</NavLink></li>
                </ul>
            </div>
            </div>

        <div className="mobile-navbar container-fluid padding-container pt-0 pb-0">
            <div className="navbar-brand mobile-white">
                <h1>JASSI PHOTOGRAPHY</h1>
            </div>
            <div id="myNav" className="overlay">
                <NavLink to="" className="closebtn" onClick={closeNav}>&times;</NavLink>
                <div className="overlay-content" id="collapseExample">
                <ul className='overlay-menu d-flex justify-content-start flex-column'>
                   <li><NavLink onClick={handleCollapse}  exact={true} to="/jassi-photography">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li>
                        <NavLink  className='d-inline-block' to="/portfolio">Portfolio</NavLink>
                        <NavLink onClick={close_subnav} className='d-inline-block' to="" ><svg id='nav_svg' class="svg-inline--fa fa-angle-up fa-w-8 icon-collapse-toggle" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"></path></svg></NavLink>
                        <ul className='p-0 subnav' id='subnav'>
                            <li><NavLink onClick={handleCollapse} to="/portfolio_classic">Classic</NavLink></li>
                            <li><NavLink onClick={handleCollapse} to="/portfolio_wedding">Wedding</NavLink></li>
                            <li><NavLink onClick={handleCollapse} to="/portfolio_escapades">Escapades</NavLink></li>
                            <li><NavLink onClick={handleCollapse} to="/portfolio_travel">Travel</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink onClick={handleCollapse} to="/contact">Contact</NavLink></li>
                    <li><NavLink onClick={handleCollapse} to="/blog">Blog</NavLink></li>
                </ul>
                </div>
            </div>
            <span className="nav-icon mobile-white" onClick={openNav}><span style={{fontSize:'1.1rem', marginRight:'8px', verticalAlign:'-0.09em'}}>MENU</span>&#9776;</span>
        </div>

        </>
    )
}

export default Navbar
