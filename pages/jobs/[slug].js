import React from 'react';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faBriefcase, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const JobDetails = (props) => {
    return (
        <Layout>
            <div className="job-details-page mb-5">
                <div className="container">
                    <div className="detail-top">
                        <div className="row align-items-center">
                            <div className="col-sm-8">
                                <div className="image">
                                    <img src="/images/logos/walton.jpg" alt="logo" />
                                </div>
                                <div className="content">
                                    <h3>Commerce Marketing Manager</h3>
                                    <ul className="top-points">
                                        <li><FontAwesomeIcon icon={faBuilding} /> Walton Group</li>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                    </ul>
                                    <p className="deadline">Deadline: 20 Sep 2020</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center">
                                    <a href="#" className="btn btn-default">Apply Online</a>
                                </div>
                                <div className="social-share">
                                    <ul className="social-icons">
                                        <li className="facebook"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li className="google"><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                        <li className="linkedin"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li className="twitter"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li className="pinterest"><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="job-details">

                                <div className="detail-body">
                                    <h4>Job Responsibilities</h4>
                                    <p>Aenean condimentum aliquet suscipit. Sed volutpat erat tortor, non tristique odio feugiat eu. In aliquet, odio varius eleifend viverra, mi velit fermentum libero, ac molestie erat odio in justo. Maecenas ex ante, tempus quis fermentum eu, maximus nec odio. Quisque lacinia est ex, in consequat mi tempus vel. Maecenas consequat cursus aliquam.</p>
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

                                    <div className="apply-bottom">
                                        <button className="btn btn-green">Apply Online</button>
                                        <p>Or</p>
                                        <p>Send your CV to hr@example.com</p>
                                        <p><strong>Application Deadline: </strong>20 Sep 2020</p>
                                    </div>
                                </div>
                                <div className="company-information">
                                    <h4>Walton Group</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt est eget dignissim placerat. Nulla lacinia hendrerit rutrum. Aliquam ornare finibus nisi in efficitur. Sed ut lacinia magna. Phasellus tristique ligula leo, in blandit ipsum lacinia sit amet. Mauris magna turpis, lobortis sed aliquet id, ultrices id erat.</p>
                                    <ul>
                                        <li><strong>Address: </strong>Dhaka, Bangladesh</li>
                                        <li><strong>Website: </strong><a href="#">www.example.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sidebar">


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

                                <div className="job-video mt-4">
                                    <iframe width="100%" height="250" src="https://www.youtube.com/embed/5L4DQfVIcdg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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