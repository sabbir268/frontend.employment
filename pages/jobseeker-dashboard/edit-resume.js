import React from 'react';
import JobseekerLayout from '../../components/JobseekerLayout';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../components/data/countries.json';


const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="edit-resume">
                <h3>Personal Information</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" placeholder="Full Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label>Date of Birth</label>
                        <DatePicker
                            // selected={dob}
                            // onChange={(dob) => {this.setState({dob: dob})}}
                            showMonthDropdown
                            showYearDropdown
                            className="form-control"
                            placeholderText="Date of Birth"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Father's Name</label>
                            <input type="text" name="father_name" placeholder="Father's Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Mother's Name</label>
                            <input type="text" name="mother_name" placeholder="Mother's Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <div>Gender:</div>
                            <input type="radio" name="gender" id="male" value="Male" /> <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" value="Female" /> <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="other" value="Other" /> <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Religion</label>
                            <select name="religion" className="form-control">
                                <option>Select Religion</option>
                                <option>Islam</option>
                                <option>Hinduism</option>
                                <option>Christianity</option>
                                <option>Buddhism</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <div>Marital Status:</div>
                            <input type="radio" name="gender" id="male" value="Male" /> <label htmlFor="male">Single</label>
                            <input type="radio" name="gender" id="female" value="Female" /> <label htmlFor="female">Married</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Blood Group</label>
                            <select name="religion" className="form-control">
                                <option>Select Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Nationality</label>
                            <select name="country" className="form-control">
                                <option>Select Country</option>
                                {
                                    Countries.map(country =>
                                        <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>NID</label>
                            <input type="nid" name="nid" placeholder="Write your NID No" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <PhoneInput
                                country={'bd'}
                                // value={phone}
                                // onChange={(phone) => {this.setState({phone: phone})}}
                                inputClass="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Write your email" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </JobseekerLayout>
    )
}
export default JobseekerDashboard;