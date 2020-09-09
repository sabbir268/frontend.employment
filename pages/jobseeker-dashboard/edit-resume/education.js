import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../../components/data/countries.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="edit-resume">
                <ul className="resume-top-menu">
                    <li><Link href="/jobseeker-dashboard/edit-resume"><a><FontAwesomeIcon icon={faAddressCard} /> <span>Personal</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/employment"><a><FontAwesomeIcon icon={faBriefcase} /> <span>Employment</span></a></Link></li>
                    <li className="active"><Link href="/jobseeker-dashboard/edit-resume/education"><a><FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/others"><a><FontAwesomeIcon icon={faCog} /> <span>Others</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/photograph"><a><FontAwesomeIcon icon={faImage} /> <span>Photo</span></a></Link></li>
                </ul>
                <h3>Education</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Level of Education</label>
                            <select className="form-control" >
                                <option>Select</option>
                                <option>PSC/5 pass</option>
                                <option>JSC/JDC/8 pass</option>
                                <option>Secondary</option>
                                <option>Higher Secondary</option>
                                <option>Diploma</option>
                                <option>Bachelor/Honors</option>
                                <option>Masters</option>
                                <option>PhD (Doctor of Philosophy)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Result</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>First Division/Class</option>
                                <option>Second  Division/Class</option>
                                <option>Third Division/Class</option>
                                <option>Grade</option>
                                <option>Appeared</option>
                                <option>Enrolled</option>
                                <option>Awarded</option>
                                <option>Do not mention</option>
                                <option>Pass</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Exam Title</label>
                            <select className="form-control">
                                <option>SSC</option>
                                <option>O Level</option>
                                <option>Dakhil (Madrasah)</option>
                                <option>SSC (Vocational)</option>
                                <option undefined="">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>CGPA</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Concentration/ Major/Group</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Scale</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Board</label>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Barishal</option>
                                <option>Chattogram</option>
                                <option>Cumilla</option>
                                <option>Dhaka</option>
                                <option>Dinajpur</option>
                                <option>Jashore</option>
                                <option>Rajshahi</option>
                                <option>Sylhet</option>
                                <option>Madrasah</option>
                                <option>Technical</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Passing Year</label>
                            <DatePicker
                                // selected={dob}
                                // onChange={(dob) => {this.setState({dob: dob})}}
                                showYearPicker
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Institution Name</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Duration</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Achievement</label>
                            <textarea rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <button className="btn btn-black mr-2">Cancle</button>
                    <button className="btn btn-default">Add</button>
                </div>
            </div>
        </JobseekerLayout>
    )
}
export default JobseekerDashboard;