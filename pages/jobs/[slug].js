import React from 'react';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const JobDetails = (props) => {
    return (
        <Layout>
            <div className="job-details-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="job-details">
                                <div className="detail-top">
                                    <div className="image">
                                        <img src="/images/logos/walton.jpg" alt="logo" />
                                    </div>
                                    <div className="content">
                                        <h3>Executive / Sr. Executive (Finance & Accounts)</h3>
                                        <p>Walton Group</p>
                                        <ul className="top-points">
                                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                            {/* <li>Vacancy: Not specific</li> */}
                                        </ul>
                                        <p className="deadline">Deadline: 20 Sep 2020</p>
                                        <div className="social-share">
                                            <ul>
                                                <li className="facebook"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                                <li className="google"><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                                <li className="linkedin"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                                <li className="twitter"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                <li className="pinterest"><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-body">
                                    <h4>Job Responsibilities</h4>
                                    <ul>
                                        <li>Supervise & maintain petty cash</li>
                                        <li>Preparation of daily & weekly budget</li>
                                        <li>Preparation of monthly salary statement</li>
                                        <li>Check the supplier bill for final approval</li>
                                        <li>Preparation daily vouchers & post it to software</li>
                                        <li>Maintain the associates currents accounts</li>
                                        <li>Liaison with bank for opening Back to Back L/C and Back to Back Payment</li>
                                        <li>Prepare the export document &submit in Bank and follow up proceeds realization</li>
                                        <li>Prepare monthly export proceeds receipts & BTB LC payments statement</li>
                                        <li>Prepare the export and import purchase vouchers & post it to software</li>
                                        <li>Must have sound knowledge Inventory & assets management</li>
                                        <li>Must have independent working ability to perform all relevant task with accounting system</li>
                                        <li>Any other tasks assigned by management.</li>
                                    </ul>
                                    <h4>Employment Status</h4>
                                    <p>Full-Time</p>
                                    <h4>Educational Requirements</h4>
                                    <ul>
                                        <li>Candidates should be MBA / M.Com with Hon`s in commerce discipline.</li>
                                        <li>CA (CC) will be preferred.</li>
                                    </ul>
                                    <h4>Experience Requirements</h4>
                                    <ul>
                                        <li>1 to 2 year(s)</li>
                                    </ul>
                                    <h4>Additional Requirements</h4>
                                    <ul>
                                        <li>Age 25 to 35 years</li>
                                        <li>The applicant should have minimum 1-2 years practical experience in Accounts, Finance, or Tax in renowned organization.</li>
                                        <li>The applicants should have sound knowledge in Accounting and banking.</li>
                                        <li>The applicants should have problem solving ability.</li>
                                        <li>The applicants should have strong analytical ability and accuracy.</li>
                                        <li>The applicants should have computer literacy in MS words, MS Excel and accounting software is a must.</li>
                                        <li>The applicants should have good team player.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <a href="#" className="btn btn-default d-block">Apply</a>
                                <div className="job-overview">
                                    <h4>Job Overview</h4>
                                    <ul>
                                        <li>
                                            <span className="icon"><i className="flaticon-sticky-notes"></i></span>
                                            <p><strong>Published On</strong> 20 Aug 2020</p>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="flaticon-vacancy"></i></span>
                                            <p><strong>Vacancy</strong> Not Specific</p>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="flaticon-portfolio"></i></span>
                                            <p><strong>Employment Type</strong> Full-time</p>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="flaticon-increase"></i></span>
                                            <p><strong>Age Limit</strong> 23 - 30 years</p>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="flaticon-experience"></i></span>
                                            <p><strong>Experience</strong> 2 - 4 years</p>
                                        </li>
                                        {/* <li>
                                            <span className="icon"><i className="flaticon-map-pin"></i></span>
                                            <p><strong>Location</strong> Dhaka, Bangladesh</p>
                                        </li> */}
                                        <li>
                                            <span className="icon"><i className="flaticon-online-learning"></i></span>
                                            <p><strong>Qualification</strong> MBA/BBA</p>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="flaticon-money"></i></span>
                                            <p><strong>Salary</strong> Negotiable</p>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default JobDetails;