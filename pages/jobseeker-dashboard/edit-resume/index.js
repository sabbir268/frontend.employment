import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../../components/data/countries.json';


const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="edit-resume">
                <ul className="resume-top-menu">
                    <li><Link href="/jobseeker-dashboard/edit-resume"><a>Personal</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/employment"><a>Employment</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/education"><a>Education</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/others"><a>Others</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/photograph"><a>Photo</a></Link></li>
                </ul>
                <h3>Personal Informations</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Date of Birth</label>
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
                            <label>Father's Name</label>
                            <input type="text" name="father_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Mother's Name</label>
                            <input type="text" name="mother_name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group radio-input">
                            <p>Gender</p>
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
                        <div className="form-group radio-input">
                            <p>Marital Status</p>
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
                            <input type="nid" name="nid" className="form-control" />
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
                            <input type="email" name="email" className="form-control" />
                        </div>
                    </div>
                </div>
                <h5>Present Address</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Country</label>
                            <select name="country" className="form-control">
                                <option>Select Country</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Division</label>
                            <select name="division" className="form-control">
                                <option>Select Division</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>District</label>
                            <select name="district" className="form-control">
                                <option>Select District</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Thana</label>
                            <select name="thana" className="form-control">
                                <option>Select Thana</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Zip/Postal Code</label>
                            <input type="text" name="postal" className="form-control" />
                        </div>
                    </div>
                </div>
                <h5>Permanent Address</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Country</label>
                            <select name="country" className="form-control">
                                <option>Select Country</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Division</label>
                            <select name="division" className="form-control">
                                <option>Select Division</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>District</label>
                            <select name="district" className="form-control">
                                <option>Select District</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select label">
                            <label>Thana</label>
                            <select name="thana" className="form-control">
                                <option>Select Thana</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Zip/Postal Code</label>
                            <input type="text" name="postal" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <button type="submit" className="btn btn-black mr-2">Cancel</button>
                    <button type="submit" className="btn btn-default">Save</button>
                </div>
            </div>
        </JobseekerLayout>
    )
}
export default JobseekerDashboard;