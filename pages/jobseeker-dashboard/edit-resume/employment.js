import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';
import EditResumeMenu from '../../../components/EditResumeMenuThree';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="content-item edit-resume">
                <EditResumeMenu page="employment" />
                <h3>Employment</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Position/Designation</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>From</label>
                            <DatePicker
                                // selected={dob}
                                // onChange={(dob) => {this.setState({dob: dob})}}
                                showMonthDropdown
                                showYearDropdown
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>To</label>
                            <DatePicker
                                // selected={dob}
                                // onChange={(dob) => {this.setState({dob: dob})}}
                                showMonthDropdown
                                showYearDropdown
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Company Location</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Business Type</label>
                            <input type="text" name="company_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Responsibilities</label>
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