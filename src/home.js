import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './css/home.css'
import { useEffect } from 'react';
import githubLogo from './img/logos/github-mark-white.png'
import linkedinLogo from './img/logos/in-logo-white.png'
import twitterLogo from './img/logos/twitter-128.png'
import arrowImg from './img/arrow.png'

import photo1 from './img/my-photos/myself1.jpg'
import photo2 from './img/gatito-2.jpeg'
import photo3 from './img/gatito-3.jpg'

import ES_resume from './fpdf/es_resume.pdf'

const { smoothScroll } = require("./scripts/homesScripts");

export default function Home(){
    useEffect(() => {
        smoothScroll(".scroll-link1");
      }, []);
    return (
        <div className="Home">
                <section className='main-page' id='main-page-id'>
                    <div className='container-fluid d-flex align-items-center justify-content-center'>
                        <div className='row text-main-page text-center  '>
                            <div className='col-md-12'>
                                {/*PROFILE PICTURE WILL BE SHOWN*/}
                                <div className='pfp-span'>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="2000  " data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active ">
                                        <img  className='pfp' src={photo1} alt='pfp-photo'/> 
                                        </div>
                                        <div className="carousel-item">
                                        <img className='pfp' src={photo2} alt="pfp-photo"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img className="pfp-3" src={photo3}  alt="pfp-photo"/>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <p className='name'>Jorge <span className='name-p1'>Alexis</span> <span className='name-p1'>M</span>árquez <span className='name-p1'>Rosales</span></p>  
                            </div>
                            <div className='container text-center main-text'>
                                <p>Just someone who likes math and computer science. Currently studying Computer System Enginnering and Mathematics.</p>
                            </div>
                            <div className='col-md-12'>
                                <div className='col-md-12'>
                                    <a href={ES_resume} name="es_resume.pdf" download ><button className='info-btn'>CHECK MY RESUME</button></a>
                                </div>
                            </div>
                            <div className='container sm-all'>
                                <div className='row justify-content-center'>
                                    <div className='col-4'><a href=""><img src={twitterLogo} width={31} height={31} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a></div>
                                    <div className='col-4'><a href="https://github.com/alexismrosales"><img src={githubLogo} width={31} height={31} className="d-inline-block align-top" alt="github.com/alexismrosales"/></a></div>
                                    <div className='col-4'><a href="https://www.linkedin.com/in/alexismrosales/"><img src={linkedinLogo} width={35} height={35} className="d-inline-block align-top" alt="linkedin.com/in/alexismrosales/"/></a></div>      
                                </div>
                            </div>  
                            <div className='col-md-12 arrow-div'>
                                    <a className='scroll-link1' href='#projects-page-section-id'><img src={arrowImg} width={35} height={35}/></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className='projects-page-section' id='projects-page-section-id'>
                    <div className='container projects-page'>
                        <div className='row mb-3'>
                            <div className='col-md-12 text-center'>
                                <div className='project-title-div'>
                                    <p className='title-name'>Projects</p> 
                                </div> 
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className='tag'><span className='tag-text'></span>C++</a>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    <button className='section-btn project1'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    <button className='section-btn project2'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    <button className='section-btn project3'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                    </div>
                    
                </section>
                <section  className='programs-page-section' id='programs-page-section-id'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <div className='project-title-div'>
                                    <p className='title-name'>Programs</p> 
                                </div> 
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className='tag'><span className='tag-text'></span>C++</a>
                                        <a className='tag'><span className='tag-text'></span>Javascript</a>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    
                                    <button className='section-btn project1'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a className='tag'><span className='tag-text'></span>C++</a>
                                        <a className='tag'><span className='tag-text'></span>Javascript</a>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    
                                    <button className='section-btn project1'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    <button className='section-btn project2'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-md-6 col-lg-4 pt-4'>
                                <div className='card'>
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                    <button className='section-btn project3'>Check out</button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='aboutme-page-section' id='aboutme-page-section-id'>
                    <div className='aboutme-page'>
                    <div className='container-fluid text-center '>
                                <div className='row'>
                                <div className='col-md-6 col-xs-12'>
                                        <div className='aboutme-text'>
                                             <p className='title-name'>ABOUT ME</p>
                                        </div>
                                       
                                    </div>
                                    <div className='col-md-6 col-xs-12'>
                                    
                                        <div className='pic-pos-span'>
                                        
                                        <div className='pics-span'>
                                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="2000  " data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active ">
                                                    <img  className='pic' src={photo1} alt='pfp-photo'/> 
                                                    </div>
                                                    <div className="carousel-item">
                                                    <img className='pic' src={photo2} alt="pfp-photo"/>
                                                    </div>
                                                    <div className="carousel-item">
                                                    <img className="pic" src={photo3}  alt="pfp-photo"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        
                        </div>
                    </div>
                </section>
        </div>
    )
}

//Dec of functions
smoothScroll('scroll-link1');