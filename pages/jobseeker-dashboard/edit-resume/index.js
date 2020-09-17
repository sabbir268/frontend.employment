import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';
import EditResumeMenu from '../../../components/EditResumeMenuThree';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import countries from '../../../utils/country-list';
import divisions from '../../../utils/divisions';
import districts from '../../../utils/districts';
import postcodes from '../../../utils/postcodes';


class JobseekerDashboard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            full_name: '',
            dob: '',
            father_name: '',
            mother_name: '',
            gender: '',
            marital_status: '',
            religion: '',
            blood_group: '',
            nationality: '',
            nid: '',
            mobile_no: '',
            email: '',
            country: '',
            division: '',
            district: '',
            post_office: '',
            address: '',
            postal_code: '',
            permanent_country: '',
            permanent_division: '',
            permanent_district: '',
            permanent_post_office: '',
            permanent_address: '',
            permanent_postal_code: '',
            errors: {}
        }
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        const errors = this.state.errors;
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        })
    }

    handleSelectChange = (name, selectedOption) => {
        const errors = this.state.errors;
        errors[name] = '';
        this.setState({
            [name]: selectedOption,
            errors
        })
    }

    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (!fields.full_name) {
            formIsValid = false;
            errors.full_name = "Full name is required.";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            console.log("submitted")
        }
    }

    render() {

        const { full_name, dob, father_name, mother_name, gender, marital_status, religion, blood_group, nationality, nid, mobile_no, email, country, division, district, post_office, address, postal_code, permanent_country, permanent_division, permanent_district, permanent_post_office, permanent_address, permanent_postal_code, errors } = this.state;

        return (
            <JobseekerLayout>
                <div className="edit-resume">
                    <EditResumeMenu page="personal" />
                    <h3>Personal Informations</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text"
                                    name="full_name"
                                    className="form-control"
                                    value={full_name}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <DatePicker
                                    selected={dob}
                                    onChange={this.handleSelectChange.bind(this, 'dob')}
                                    showMonthDropdown
                                    showYearDropdown
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Father's Name</label>
                                <input type="text"
                                    name="father_name"
                                    className="form-control"
                                    value={father_name}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Mother's Name</label>
                                <input type="text"
                                    name="mother_name"
                                    className="form-control"
                                    value={mother_name}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group radio-input">
                                <p>Gender</p>
                                <input type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={this.handleChange} /> <label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'} onChange={this.handleChange} /> <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Religion</label>
                                <select name="religion" className="form-control" value={religion} onChange={this.handleChange}>
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
                                <input type="radio" name="marital_status" id="single" value="Single" checked={marital_status === 'Single'} onChange={this.handleChange} /> <label htmlFor="single">Single</label>
                                <input type="radio" name="marital_status" id="married" value="Married" checked={marital_status === 'Married'} onChange={this.handleChange} /> <label htmlFor="married">Married</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Blood Group</label>
                                <select name="blood_group" className="form-control" value={blood_group} onChange={this.handleChange}>
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
                                <select name="nationality" className="form-control" value={nationality} onChange={this.handleChange}>
                                    <option>Select Country</option>
                                    {
                                        countries.map(country =>
                                            <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>NID</label>
                                <input
                                    type="number"
                                    name="nid"
                                    className="form-control"
                                    value={nid}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <PhoneInput
                                    country={'bd'}
                                    value={mobile_no}
                                    onChange={this.handleSelectChange.bind(this, 'mobile_no')}
                                    containerClass="phone-input"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <h5>Present Address</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Country</label>
                                <select name="country" className="form-control" value={country} onChange={this.handleChange}>
                                    <option>Select Country</option>
                                    {
                                        countries.map(country =>
                                            <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Division</label>
                                <select name="division" className="form-control" value={division} onChange={this.handleChange}>
                                    <option>Select Division</option>
                                    {divisions.map(division =>
                                        <option key={division.id} value={division.id}>{division.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>District</label>
                                <select name="district" className="form-control" value={district} onChange={this.handleChange}>
                                    <option>Select District</option>
                                    {districts.map(district => {
                                        if (district.division_id === division) {
                                            return <option key={district.id} value={district.id}>{district.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Post Office</label>
                                <select name="post_office" className="form-control" value={post_office} onChange={this.handleChange}>
                                    <option>Select P.O</option>
                                    {postcodes.map(po => {
                                        if (po.district_id === district) {
                                            return <option key={po.postCode} value={po.postCode}>{po.postOffice}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="address" className="form-control" value={address} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Zip/Postal Code</label>
                                <input type="text" name="postal_code" className="form-control" value={postal_code} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <h5>Permanent Address</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Country</label>
                                <select name="permanent_country" className="form-control" value={permanent_country} onChange={this.handleChange} >
                                    <option>Select Country</option>
                                    {
                                        countries.map(country =>
                                            <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Division</label>
                                <select name="permanent_division" className="form-control" value={permanent_division} onChange={this.handleChange}>
                                    <option>Select Division</option>
                                    {divisions.map(division =>
                                        <option key={division.id} value={division.id}>{division.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>District</label>
                                <select name="permanent_district" className="form-control" value={permanent_district} onChange={this.handleChange}>
                                    <option>Select District</option>
                                    {districts.map(district => {
                                        if (district.division_id === permanent_division) {
                                            return <option key={district.id} value={district.id}>{district.name}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group select label">
                                <label>Post Office</label>
                                <select name="permanent_post_office" className="form-control" value={permanent_post_office} onChange={this.handleChange}>
                                    <option>Select P.O</option>
                                    {postcodes.map(po => {
                                        if (po.district_id === permanent_district) {
                                            return <option key={po.postCode} value={po.postCode}>{po.postOffice}</option>
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="permanent_address" className="form-control" value={permanent_address} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Zip/Postal Code</label>
                                <input type="text" name="permanent_postal_code" className="form-control" value={permanent_postal_code} onChange={this.handleChange} />
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
}
export default JobseekerDashboard;