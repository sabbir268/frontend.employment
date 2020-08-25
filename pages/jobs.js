import React from 'react';
import Layout from '../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faClock, faBell, faCalendar } from '@fortawesome/free-regular-svg-icons';

const Jobs = (props) => {
    return (
        <Layout>
            <div className="job-list-page">
                <div className="page-header">
                    <div className="overlay">
                        <div className="container">
                            <h3>EXPLORE THOUSAND OF JOBS</h3>
                            <form>
                                <div className="row sm-gutters">
                                    <div className="col-sm-10">
                                        <div className="row sm-gutters">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" name="title" placeholder="Keywords" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" name="location" placeholder="Location" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group select">
                                                    <select name="industry" placeholder="Industry" className="form-control">
                                                        <option>Category</option>
                                                        <option>Education</option>
                                                        <option>Real State/Developers</option>
                                                        <option>Information Technology</option>
                                                        <option>Garments/Textile</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="submit" className="btn btn-default">Find Job</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="job-list section-padding section-bg">
                    <div className="container">
                        <div className="row sm-gutters">
                            <div className="col-sm-3">
                                <div className="sidebar">
                                    <div className="sidebar-item">
                                        <h4 className="title">Industry</h4>
                                        <ul>
                                            <li>IT/Telecommunication <span>40</span></li>
                                            <li>Education <span>24</span></li>
                                            <li>Real State <span>30</span></li>
                                            <li>Garments/Textile <span>15</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar">
                                    <div className="sidebar-item">
                                        <h4 className="title">Qualification</h4>
                                        <ul>
                                            <li>Masters <span>40</span></li>
                                            <li>Honors <span>24</span></li>
                                            <li>Diploma <span>30</span></li>
                                            <li>HSC/SSC <span>15</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar">
                                    <div className="sidebar-item">
                                        <h4 className="title">Experience</h4>
                                        <ul>
                                            <li>More Then 5 Years <span>40</span></li>
                                            <li>4 to 5 Years <span>24</span></li>
                                            <li>3 to 4 Years <span>30</span></li>
                                            <li>2 to 3 Years <span>15</span></li>
                                            <li>1 to 2 Years <span>5</span></li>
                                            <li>Less Then 1 Years <span>0</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <div className="job-filter">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <p>20 Jobs Showing Out of 200</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <span>Sort By</span>
                                                <select>
                                                    <option>Default</option>
                                                    <option>Newest</option>
                                                    <option>Oldest</option>
                                                    <option>Featured</option>
                                                    <option>Premium</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="jobs">
                                    <div className="job-item">
                                        <div className="logo">
                                            <img src="/images/company.svg" alt="company logo" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="#">Marketing and Communications</a></h3>
                                            <ul>
                                                <li><a href="#">Pendragon Green Ltd</a></li>
                                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                                <li><FontAwesomeIcon icon={faGraduationCap} /> Bachelor of Business Administration</li>
                                                <li><FontAwesomeIcon icon={faBriefcase} /> 2 to 3 Years of Experience</li>
                                            </ul>
                                        </div>
                                        <div className="deadline">
                                            <p><FontAwesomeIcon icon={faCalendar} /> Deadline: 1 Sep 2020</p>
                                        </div>
                                    </div>
                                    <div className="job-item">
                                        <div className="logo">
                                            <img src="/images/company.svg" alt="company logo" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="#">Marketing and Communications</a></h3>
                                            <ul>
                                                <li><a href="#">Pendragon Green Ltd</a></li>
                                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                                <li><FontAwesomeIcon icon={faGraduationCap} /> Bachelor of Business Administration</li>
                                                <li><FontAwesomeIcon icon={faBriefcase} /> 2 to 3 Years of Experience</li>
                                            </ul>
                                        </div>
                                        <div className="deadline">
                                            <p><FontAwesomeIcon icon={faCalendar} /> Deadline: 1 Sep 2020</p>
                                        </div>
                                    </div>
                                    <div className="job-item">
                                        <div className="logo">
                                            <img src="/images/company.svg" alt="company logo" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="#">Marketing and Communications</a></h3>
                                            <ul>
                                                <li><a href="#">Pendragon Green Ltd</a></li>
                                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                                <li><FontAwesomeIcon icon={faGraduationCap} /> Bachelor of Business Administration</li>
                                                <li><FontAwesomeIcon icon={faBriefcase} /> 2 to 3 Years of Experience</li>
                                            </ul>
                                        </div>
                                        <div className="deadline">
                                            <p><FontAwesomeIcon icon={faCalendar} /> Deadline: 1 Sep 2020</p>
                                        </div>
                                    </div>
                                    <div className="job-item">
                                        <div className="logo">
                                            <img src="/images/company.svg" alt="company logo" />
                                        </div>
                                        <div className="content">
                                            <h3><a href="#">Marketing and Communications</a></h3>
                                            <ul>
                                                <li><a href="#">Pendragon Green Ltd</a></li>
                                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                                                <li><FontAwesomeIcon icon={faGraduationCap} /> Bachelor of Business Administration</li>
                                                <li><FontAwesomeIcon icon={faBriefcase} /> 2 to 3 Years of Experience</li>
                                            </ul>
                                        </div>
                                        <div className="deadline">
                                            <p><FontAwesomeIcon icon={faCalendar} /> Deadline: 1 Sep 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li><a href="#">Prev</a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">Next</a></li>
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
export default Jobs;