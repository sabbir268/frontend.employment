import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BannerSearch from '../components/BannerSearch';

import CountUp from 'react-countup';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination]);


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faMapMarkerAlt, faFilter, faSuitcase, faBuilding, faQuoteRight, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faClock, faBell } from '@fortawesome/free-regular-svg-icons';

const Home = (props) => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="homepage">
                <BannerSearch />

                <section className="hot-jobs section-padding section-bg">
                    <div className="container">
                        <h1 className="section-title"><span>Premium</span> Job Search</h1>
                        <div className="row sm-gutters">
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Walton Hi-Tech Industries Ltd.</a></h4>
                                        <ul>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Data Entry Operator</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-2">
                            <a href="#" className="btn btn-green">View All</a>
                        </div>
                    </div>
                </section>

                {/* <section className="top-categories section-padding section-bg">
                    <div className="container">
                        <h1 className="section-title">Top <span>Job</span> Categories</h1>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>450</h2>
                                    <p><a href="#">Accounting/Finance</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>400</h2>
                                    <p><a href="#">Engineer/Architects</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>360</h2>
                                    <p><a href="#">Medical/Health</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>380</h2>
                                    <p><a href="#">NGO/Development</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>350</h2>
                                    <p><a href="#">Production/Operation</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>300</h2>
                                    <p><a href="#">Education/Training</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>250</h2>
                                    <p><a href="#">IT/Telecommunication</a></p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="cat-item">
                                    <h2>100</h2>
                                    <p><a href="#">Marketing/Sales</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-default">View More</a>
                        </div>
                    </div>
                </section> */}


                <section className="why-employment">
                    <div className="overlay section-padding">
                        <div className="container">
                            <h1 className="section-title">Why Employment</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            {/* <img src="/icons/resources.png" alt="candidates" /> */}
                                            <i className="flaticon-human-resources"></i>
                                        </div>
                                        <h3><CountUp end={3000} />+</h3>
                                        <p>Candidates</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            {/* <img src="/icons/jobs.png" alt="candidates" /> */}
                                            <i className="flaticon-suitcase"></i>
                                        </div>
                                        <h3><CountUp end={5000} />+</h3>
                                        <p>Jobs</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            {/* <img src="/icons/businessman.png" alt="candidates" /> */}
                                            <i className="flaticon-businessman-1"></i>
                                        </div>
                                        <h3><CountUp end={1000} />+</h3>
                                        <p>Employer</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            {/* <img src="/icons/courses.png" alt="candidates" /> */}
                                            <i className="flaticon-web"></i>
                                        </div>
                                        <h3><CountUp end={500} />+</h3>
                                        <p>Courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <section className="find-talents section-padding">
                    <div className="container">
                        <h1 className="section-title">Find Talents by <span>Category</span></h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-profits"></i>
                                    </div>
                                    <h3>Finance Experts</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-bank"></i>
                                    </div>
                                    <h3>Commercial</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-group"></i>
                                    </div>
                                    <h3>Managers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-artificial-intelligence"></i>
                                    </div>
                                    <h3>Engineers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-portfolio"></i>
                                    </div>
                                    <h3>Marketing Professionals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <div className="icon-design">
                                        <i className="flaticon-trial"></i>
                                    </div>
                                    <h3>Lawyers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cv-collection section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="persons">
                                    <div className="person-item one">
                                        <img src="/images/face.jpg" alt="person" />
                                    </div>
                                    <div className="person-item two">
                                        <img src="/images/face-2.jpg" alt="person" />
                                    </div>
                                    <div className="person-item three">
                                        <img src="/images/face-3.jpg" alt="person" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h1>Minimise your talent hunt process from our rich CV collection.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus fringilla ipsum, vel pulvinar est porttitor et. Mauris libero massa, interdum eu tortor eu, iaculis elementum mi. Quisque euismod elementum eros sed pellentesque.</p>
                                <p>Praesent at metus nec erat convallis pharetra. Integer quis urna egestas, feugiat eros eget, ultricies mi. Curabitur aliquam nunc vel nibh condimentum, et varius odio ultrices. Integer luctus arcu vitae lacus fermentum tincidunt. Curabitur rhoncus ante non ornare tempor.</p>
                                <a href="#" className="btn btn-default">Register</a>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* <section className="recent-jobs section-padding">
                    <div className="container">
                        <h1 className="section-title">Recent Jobs</h1>
                        <div className="job-list">
                            <div className="job-item">
                                <div className="logo">
                                    <img src="/images/company.svg" alt="company logo" />
                                </div>
                                <div className="content">
                                    <h3><a href="#">Marketing and Communications</a></h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBuilding} /> <a href="#">Pendragon Green Ltd</a></li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                        <li><FontAwesomeIcon icon={faFilter} /> IT & Telecoms</li>
                                        <li><FontAwesomeIcon icon={faSuitcase} /> Full-Time</li>
                                    </ul>
                                </div>
                                <div className="apply">
                                    <a href="#" className="btn btn-green">Apply Now</a>
                                    <p><FontAwesomeIcon icon={faClock} /> 1M Ago</p>
                                </div>
                            </div>
                            <div className="job-item">
                                <div className="logo">
                                    <img src="/images/company.svg" alt="company logo" />
                                </div>
                                <div className="content">
                                    <h3><a href="#">Marketing and Communications</a></h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBuilding} /> <a href="#">Pendragon Green Ltd</a></li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                        <li><FontAwesomeIcon icon={faFilter} /> IT & Telecoms</li>
                                        <li><FontAwesomeIcon icon={faSuitcase} /> Full-Time</li>
                                    </ul>
                                </div>
                                <div className="apply">
                                    <a href="#" className="btn btn-green">Apply Now</a>
                                    <p><FontAwesomeIcon icon={faClock} /> 1M Ago</p>
                                </div>
                            </div>
                            <div className="job-item">
                                <div className="logo">
                                    <img src="/images/company.svg" alt="company logo" />
                                </div>
                                <div className="content">
                                    <h3><a href="#">Marketing and Communications</a></h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBuilding} /> <a href="#">Pendragon Green Ltd</a></li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                        <li><FontAwesomeIcon icon={faFilter} /> IT & Telecoms</li>
                                        <li><FontAwesomeIcon icon={faSuitcase} /> Full-Time</li>
                                    </ul>
                                </div>
                                <div className="apply">
                                    <a href="#" className="btn btn-green">Apply Now</a>
                                    <p><FontAwesomeIcon icon={faClock} /> 1M Ago</p>
                                </div>
                            </div>
                            <div className="job-item">
                                <div className="logo">
                                    <img src="/images/company.svg" alt="company logo" />
                                </div>
                                <div className="content">
                                    <h3><a href="#">Marketing and Communications</a></h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBuilding} /> <a href="#">Pendragon Green Ltd</a></li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                        <li><FontAwesomeIcon icon={faFilter} /> IT & Telecoms</li>
                                        <li><FontAwesomeIcon icon={faSuitcase} /> Full-Time</li>
                                    </ul>
                                </div>
                                <div className="apply">
                                    <a href="#" className="btn btn-green">Apply Now</a>
                                    <p><FontAwesomeIcon icon={faClock} /> 1M Ago</p>
                                </div>
                            </div>
                            <div className="job-item">
                                <div className="logo">
                                    <img src="/images/company.svg" alt="company logo" />
                                </div>
                                <div className="content">
                                    <h3><a href="#">Marketing and Communications</a></h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faBuilding} /> <a href="#">Pendragon Green Ltd</a></li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                        <li><FontAwesomeIcon icon={faFilter} /> IT & Telecoms</li>
                                        <li><FontAwesomeIcon icon={faSuitcase} /> Full-Time</li>
                                    </ul>
                                </div>
                                <div className="apply">
                                    <a href="#" className="btn btn-green">Apply Now</a>
                                    <p><FontAwesomeIcon icon={faClock} /> 1M Ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="btn btn-default">View All</a>
                        </div>
                    </div>
                </section> */}


                <section className="work-process section-padding">
                    <h1 className="section-title">How it Works</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <i className="flaticon-account"></i>
                                    </div>
                                    <h3>Create an Account</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <i className="flaticon-job-search"></i>
                                    </div>
                                    <h3>Search Jobs</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>
                                    <h3>Save & Apply</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="video">
                            <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </div>
                </section>

                {/* <section className="video section-padding">
                    <div className="container">
                        <h1 className="section-title">Video</h1>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/hwb4ozNE6w0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section> */}

                <section className="testimonial section-padding section-bg">
                    <div className="container">
                        <h1 className="section-title">What Our Clients Says</h1>
                        <div className="testimonials">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    }
                                }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)} >
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <div className="image">
                                            <img src="/images/clients/1.jpg" alt="client" />
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                                        <h3>Babriel Nolan <span>CEO</span></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <div className="image">
                                            <img src="/images/clients/2.jpg" alt="client" />
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                                        <h3>Olivia Reynolds <span>Software Engineers</span></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-item">
                                        <div className="image">
                                            <img src="/images/clients/3.jpg" alt="client" />
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                                        <h3>Rosie Marshall <span>Photograph</span></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>

                <section className="top-companies section-padding">
                    <div className="container">
                        <h1 className="section-title">Top Hiring Companies</h1>
                        <div className="row no-gutters">
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/1.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/2.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/3.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/4.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/5.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/6.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/7.png" alt="company" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="company">
                                    <a href="#">
                                        <img src="/images/companies/8.png" alt="company" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-4">
                                <div className="content">
                                    <FontAwesomeIcon icon={faBell} className="icon" />
                                    <h3>Get Job Notifications</h3>
                                    <p>Free Subscribe Our Newsletter Now!</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-8">
                                <form>
                                    <input type="text" name="subscribe" placeholder="Enter Your Email" />
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </Layout>
    )
}
export default Home;