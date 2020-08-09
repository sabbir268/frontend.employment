import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import BannerSearch from '../components/BannerSearch';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <BannerSearch />
                <section className="find-talents section-padding">
                    <div className="container">
                        <h1>Find Talents by Category</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/statistics.png" alt="finance" />
                                    <h3>Finance Experts</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/commercials.png" alt="finance" />
                                    <h3>Commercial</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/managers.png" alt="finance" />
                                    <h3>Managers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/engineers.png" alt="finance" />
                                    <h3>Engeeners</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/marketing.png" alt="finance" />
                                    <h3>Marketing Professionals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu laoreet orci. Maecenas lorem nisi, maximus ac urna ut.</p>
                                    <a href="#">View Talents <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="talent-item">
                                    <img src="/icons/lawyer.png" alt="finance" />
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
                                        <img src="/images/person.jpg" alt="person" />
                                    </div>
                                    <div className="person-item two">
                                        <img src="/images/person.jpg" alt="person" />
                                    </div>
                                    <div className="person-item three">
                                        <img src="/images/person.jpg" alt="person" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h1>Nerrow down your talent hunt process by our rich CV collection.</h1>
                                <p>Creative Talent Hunt is an initiative by the Government of Bangladesh to find great talents from all over the country. The competition was first launched in 2013. The competition is held in 3 categories and 4 subjects.Creative Talent Hunt is an initiative by the Government of Bangladesh to find great talents from all over the country. The competition was first launched in 2013. The competition is held in 3 categories and 4 subjects.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
export default Home;