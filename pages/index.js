import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BannerSearch from '../components/BannerSearch';

import CountUp from 'react-countup';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faMapMarkerAlt, faFilter, faSuitcase, faBuilding } from '@fortawesome/free-solid-svg-icons';
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
                <section className="find-talents section-padding">
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
                                    <h3>Engeeners</h3>
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
                </section>
                <section className="recent-jobs section-padding">
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
                        </div>
                        <div className="text-center mt-4">
                            <a href="#" className="btn btn-default">View More</a>
                        </div>
                    </div>
                </section>

                <section className="work-process section-padding">
                    <h1 className="section-title">How it Works</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <img src="/icons/account.png" alt="account" />
                                    </div>
                                    <h3>Create an Account</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <img src="/icons/search-jobs.png" alt="account" />
                                    </div>
                                    <h3>Search Jobs</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="process-item">
                                    <div className="icon-design">
                                        <img src="/icons/piggy-bank.png" alt="account" />
                                    </div>
                                    <h3>Save & Apply</h3>
                                    <p>Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-employment">
                    <div className="overlay section-padding">
                        <div className="container">
                            <h1 className="section-title">Why Employment</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image">
                                            <img src="/icons/resources.png" alt="candidates" />
                                        </div>
                                        <h3><CountUp end={3000} />+</h3>
                                        <p>Candidates</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image">
                                            <img src="/icons/jobs.png" alt="candidates" />
                                        </div>
                                        <h3><CountUp end={5000} />+</h3>
                                        <p>Jobs</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image">
                                            <img src="/icons/businessman.png" alt="candidates" />
                                        </div>
                                        <h3><CountUp end={1000} />+</h3>
                                        <p>Employer</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image">
                                            <img src="/icons/courses.png" alt="candidates" />
                                        </div>
                                        <h3><CountUp end={500} />+</h3>
                                        <p>Courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <FontAwesomeIcon icon={faBell} className="icon" />
                                <h3>Get Job Notifications</h3>
                                <p>Free Subscribe Our Newsletter Now!</p>
                            </div>
                            <div className="col-sm-8">
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