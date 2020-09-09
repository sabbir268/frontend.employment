import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../components/JobseekerLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

const ViewResume = (props) => {
    return (
        <JobseekerLayout>
            <div className="view-resume">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="profile">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="details">
                                        <h2>John Due</h2>
                                        <p>Account Manager</p>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Road 10, Baridhara House 5, Dhaka, Bangladesh</li>
                                            <li><FontAwesomeIcon icon={faPhone} /> 01947384456</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</li>
                                            <li><FontAwesomeIcon icon={faGlobe} /> example.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="image">
                                        <img src="/images/team-1.jpg" alt="user" className="img-thumbnail" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="objective">
                            <h2 className="title">Career Objective</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima impedit reiciendis est quidem exercitationem vitae odit, praesentium cum magni? Distinctio quos libero nulla autem molestias saepe illum necessitatibus atque.</p>
                        </div>
                        <div className="experiences">
                            <h2 className="title">Experience</h2>
                            <div className="experience-item">
                                <h3>Account Manager</h3>
                                <p className="company-name">ABC Company. Dhaka, Bangladesh</p>
                                <p className="period">01 Jan 2020 - Present</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit fugit voluptatum eaque id placeat illo consequatur sint dolore repellendus odit in, nostrum cum rem facere, soluta harum nihil et.</p>
                            </div>
                            <div className="experience-item">
                                <h3>Jonior Account Manager</h3>
                                <p className="company-name">XYZ Company. Dhaka, Bangladesh</p>
                                <p className="period">01 Jan 2019 - 31 Dec 2019</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit fugit voluptatum eaque id placeat illo consequatur sint dolore repellendus odit in, nostrum cum rem facere, soluta harum nihil et.</p>
                            </div>
                        </div>
                        <div className="education">
                            <h2 className="title">Education</h2>
                            <div className="education-item">
                                <h3>Master's of Business Studies</h3>
                                <p className="institute-name">ABC University</p>
                                <p className="period">Duration: 2015 - 2017</p>
                                <p className="result">Result: 3.75 out of 4</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit fugit voluptatum eaque id placeat illo consequatur sint dolore repellendus odit in, nostrum cum rem facere, soluta harum nihil et.</p>
                            </div>
                            <div className="education-item">
                                <h3>Bachelor of Business Studies</h3>
                                <p className="institute-name">ABC University</p>
                                <p className="period">Duration: 2011 - 2014</p>
                                <p className="result">Result: 3.5 out of 4</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit fugit voluptatum eaque id placeat illo consequatur sint dolore repellendus odit in, nostrum cum rem facere, soluta harum nihil et.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

            </div>
        </JobseekerLayout>
    )
}
export default ViewResume;