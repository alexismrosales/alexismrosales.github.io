import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import './css/navbar.css';
import { useEffect } from 'react';
import githubLogo from './img/logos/github-mark-white.png'
import linkedinLogo from './img/logos/in-logo-white.png'
import twitterLogo from './img/logos/twitter-128.png'
import githubLogo1 from './img/logos/github-mark.png'
import linkedinLogo1 from './img/logos/linkedin-black.png'
import twitterLogo1 from './img/logos/twitter-black.png'
import options from './img/options.jpg'

const { smoothScroll } = require("./scripts/homesScripts");


export default function Navbar()
{
    useEffect(() => {
       smoothScroll(".scroll-link1");
      }, []);
    
    return <nav className="navbar nav navbar-expand-lg fixed-top justify-content-between sticky-top">
    <div className="container-fluid">
    <span className="navbar-brand"><span className='brand-title'><span className='brand-title1'>Alexis</span> M. Rosales</span></span>
    <div className="div-invisible">
        <ul className="navbar-nav mx-2 flex-row mb-1 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" href=""><img src={twitterLogo} width={28} height={28} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://github.com/alexismrosales"><img src={githubLogo} width={28} height={28} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://www.linkedin.com/in/alexismrosales/"><img src={linkedinLogo} width={32} height={32} className="d-inline-block align-top" alt="linkedin.com/in/alexismrosales/"/></a>
            </li>
        </ul>
    </div>
    <button className='navbar-toggler btn-toggler shadow-none border-0'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasNavbar'
                aria-controls='offcanvasNavbar'>
                <img className='menu-img' src={options} width={35} height={35} alt='menu'/>
    </button>       
      <div className="offcanvas offcanvas-size-sm offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false"  tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
        <span className="navbar-brand"><span className='brand-title'><span className='brand-title1'>Alexis</span><span className='brand-title2'> M. Rosales</span></span></span>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>  
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className='nav-item mx-2'>
                <a className='nav-link active scroll-link1' href='#projects-page-section-id'><span className='nav-link-color'>Projects</span></a>
            </li>
            <li className='nav-item mx-2'>
                <a className='nav-link active scroll-link1' href='#programs-page-section-id'><span className='nav-link-color'>Programs</span></a>
            </li>
            <li className='nav-item mx-2 hide-for-future'>
                <a className='nav-link active scroll-link1' href='#'><span className='nav-link-color'>Interest</span></a>
            </li>
            <li className='nav-item mx-2'>
                <a className='nav-link active scroll-link1' href='#aboutme-page-section-id'><span className='nav-link-color'>About me</span></a>
            </li>
            <div className="div-visible">
                <ul className="navbar-nav fixed-bottom align-items-center flex-row justify-content-end px- mb-1 mb-lg-0">
                    <li className="nav-item">
                    <   a className="nav-link active mx-2" href=""><img src={twitterLogo1} width={55} height={55} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active mx-2" href="https://github.com/alexismrosales"><img src={githubLogo1} width={43} height={43} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active mx-2" href="https://www.linkedin.com/in/alexismrosales/"><img src={linkedinLogo1} width={65} height={65} className="d-inline-block align-top" alt="linkedin.com/in/alexismrosales/"/></a>
                    </li>
                </ul>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
}