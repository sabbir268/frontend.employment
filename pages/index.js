import Head from 'next/head';
import React, { useRef, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BannerSearch from '../components/BannerSearch';

import CountUp from 'react-countup';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination]);


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faMapMarkerAlt, faFilter, faSuitcase, faBuilding, faQuoteRight, faAngleRight, faPlay, faEllipsisH, faAngleDown, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { faClock, faBell } from '@fortawesome/free-regular-svg-icons';



const Home = (props) => {
    const [moreJobsId, setMoreJobsId] = useState(null);
    const moreJobsRef = useRef(null);
    const moreJobsButtonRef = useRef(null);

    const clickListener = (e) => {
        if (moreJobsRef.current && !moreJobsRef.current.contains(e.target) && !moreJobsButtonRef.current.contains(e.target)) {
            setMoreJobsId(null);
        }
    }

    useEffect(() => {
        document.addEventListener('click', clickListener)
        return () => {
            document.removeEventListener('click', clickListener)
        }
    }, [])



    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="homepage">
                <BannerSearch />

                <section className="promotions">
                    <div className="container">
                        <div className="row sm-gutters">
                            <div className="col-sm-3">
                                <div className="promotion-item">
                                    <a href="#">
                                        <img src="/images/companies/1.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="promotion-item">
                                    <a href="#">
                                        <img src="/images/companies/2.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="promotion-item">
                                    <a href="#">
                                        <img src="/images/companies/3.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="promotion-item">
                                    <a href="#">
                                        <img src="/images/companies/4.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hot-jobs section-padding">
                    <div className="container">
                        <h1 className="section-title"><span>Premium</span> Jobs</h1>
                        <div className="row sm-gutters">
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <button className="more-jobs-icon" onClick={() => { setMoreJobsId(1) }} ref={moreJobsButtonRef} title="More Jobs">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </button>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                    {
                                        moreJobsId === 1 &&
                                        <ul className="more-jobs" ref={moreJobsRef}>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Executive</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Senior Marketing Officer</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Project Manager</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight} /> Account Officer</a></li>
                                        </ul>
                                    }

                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="job-item">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h4><a href="#">Senior Executive</a></h4>
                                        <ul>
                                            <li><a href="#">Walton Hi-Tech Industries Ltd.</a></li>
                                            <li><a href="#">Dhaka, Bangladesh</a></li>
                                        </ul>
                                        <div className="time">2 weeks ago</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-2">
                            <a href="#" className="btn btn-green">View All</a>
                        </div>
                    </div>
                </section>

                <section className="build-team section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <h2 >Build Your Team on Demand</h2>
                                <p className="title-text">Quickly assemble the teams you need, exactly when you need them.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="expertise">
                                            <div className="icon-design">
                                                <i className="flaticon-profits"></i>
                                            </div>
                                            <h3>Finance Experts</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expertise">
                                            <div className="icon-design">
                                                <i className="flaticon-bank"></i>
                                            </div>
                                            <h3>Commercial</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expertise">
                                            <div className="icon-design">
                                                <i className="flaticon-group"></i>
                                            </div>
                                            <h3>Managers</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="expertise">
                                            <div className="icon-design">
                                                <i className="flaticon-artificial-intelligence"></i>
                                            </div>
                                            <h3>Engineers</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="team-members">
                                    <div className="member">
                                        <div className="image">
                                            <img src="/images/team-3.jpg" alt="candidate" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">Jessica Jung</a></h4>
                                            <p>Financial Expert</p>
                                            <span>Previously at</span>
                                            <div className="company-logo">
                                                <img src="/images/logos/microsoft.svg" alt="company" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="member">
                                        <div className="image">
                                            <img src="/images/team-2.jpg" alt="candidate" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">John Due</a></h4>
                                            <p>Project Manager</p>
                                            <span>Previously at</span>
                                            <div className="company-logo">
                                                <img src="/images/logos/yahoo.svg" alt="company" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="member">
                                        <div className="image">
                                            <img src="/images/team-1.jpg" alt="candidate" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">Justin Michela</a></h4>
                                            <p>Software Enginner</p>
                                            <span>Previously at</span>
                                            <div className="company-logo">
                                                <img src="/images/logos/shopify.svg" alt="company" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            <i className="flaticon-human-resources"></i>
                                        </div>
                                        <div className="content">
                                            <h3><CountUp end={3000} />+</h3>
                                            <p>Candidates</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            <i className="flaticon-suitcase"></i>
                                        </div>
                                        <div className="content">
                                            <h3><CountUp end={5000} />+</h3>
                                            <p>Jobs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            <i className="flaticon-businessman-1"></i>
                                        </div>
                                        <div className="content">
                                            <h3><CountUp end={1000} />+</h3>
                                            <p>Employer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="why-item">
                                        <div className="image icon-design">
                                            <i className="flaticon-web"></i>
                                        </div>
                                        <div className="content">
                                            <h3><CountUp end={500} />+</h3>
                                            <p>Courses</p>
                                        </div>
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

                <section className="testimonial section-padding">
                    <div className="container">
                        <h1 className="section-title">Happy Faces</h1>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="text-center">Employer</h2>
                                <div className="testimonials">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            }
                                        }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)} >
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/1.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Babriel Nolan <span>CEO</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/2.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Olivia Reynolds <span>Software Engineers</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/3.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Rosie Marshall <span>Photograph</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h2 className="text-center">Employer</h2>
                                <div className="testimonials">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        pagination={{ clickable: true }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 0
                                            }
                                        }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)} >
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/1.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Babriel Nolan <span>CEO</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/2.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Olivia Reynolds <span>Software Engineers</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item">
                                                <div className="image">
                                                    <img src="/images/clients/3.jpg" alt="client" />
                                                </div>
                                                <div className="video-icon">
                                                    <a href="#"><FontAwesomeIcon icon={faPlay} /></a>
                                                </div>
                                                <h3>Rosie Marshall <span>Photograph</span></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit tellus tortor, ac commodo dolor placerat vel. Orci varius natoque penatibus et magnis.</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="courses">
                    <div className="container">
                        <h1 className="section-title">Our Courses</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="course-item">
                                    <div className="image">
                                        <img src="/icons/excel.png" alt="courses" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title"><a href="#">Microsoft Excel for Data Analyst</a></h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptates. Facere iste laboriosam, quas commodi amet nihil voluptates earum.</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCalendarAlt} /> 22-09-2020</li>
                                            <li><FontAwesomeIcon icon={faTag} /> Marketing/ Sales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="course-item">
                                    <div className="image">
                                        <img src="/icons/brain.png" alt="courses" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title"><a href="#">AI & Deep Learning with Tensor Flow</a></h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptates. Facere iste laboriosam, quas commodi amet nihil voluptates earum.</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCalendarAlt} /> 22-09-2020</li>
                                            <li><FontAwesomeIcon icon={faTag} /> Marketing/ Sales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="course-item">
                                    <div className="image">
                                        <img src="/icons/server.png" alt="courses" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title"><a href="#">AWS Architect Certification Training Combo</a></h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptates. Facere iste laboriosam, quas commodi amet nihil voluptates earum.</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCalendarAlt} /> 22-09-2020</li>
                                            <li><FontAwesomeIcon icon={faTag} /> Marketing/ Sales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="advice section-padding">
                    <div className="container">
                        <h1 className="section-title">Career Advice</h1>
                        <div className="text-center">
                            <iframe width="900" height="500" src="https://www.youtube.com/embed/GXI0l3yqBrA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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