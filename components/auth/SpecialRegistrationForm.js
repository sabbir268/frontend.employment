import React from 'react';
import Link from 'next/link';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import countries from '../../utils/country-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class SpecialRegistrationForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            full_name: '',
            gender: '',
            dob: '',
            country: '',
            nid: '',
            phone: '',
            skill: '',
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
        if (!fields.gender) {
            formIsValid = false;
            errors.gender = "Gender is required.";
        }
        if (!fields.dob) {
            formIsValid = false;
            errors.dob = "Date of Birth is required.";
        }
        if (!fields.country) {
            formIsValid = false;
            errors.country = "Country is required.";
        }
        if (!fields.nid) {
            formIsValid = false;
            errors.nid = "NID is required.";
        }
        if (!fields.phone) {
            formIsValid = false;
            errors.phone = "Phone number is required.";
        }
        if (!fields.terms) {
            formIsValid = false;
            errors.terms = "This is required.";
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
        const {full_name, gender, dob, country, nid, phone, skill, errors } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <p className="example">ড্রাইভার, সিকিরিউটি গার্ড, শেফ/বাবুর্চী, পিয়ন</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="full_name" value={full_name} onChange={this.handleChange} placeholder="আপনার নাম" className={`form-control ${errors.full_name ? 'error' : ''}`} />
                            {errors.full_name && <div className="error-message">{errors.full_name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <span>নিঙ্গ:</span>
                            <input type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={this.handleChange} /> <label htmlFor="male">পুরুষ</label>
                            <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <label htmlFor="female">মহিলা</label>
                            <input type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'} onChange={this.handleChange} /> <label htmlFor="other">অন্যান্য</label>
                            {errors.gender && <div className="error-message">{errors.gender}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            selected={dob}
                            onChange={this.handleSelectChange.bind(this, 'dob')}
                            showMonthDropdown
                            showYearDropdown
                            className={`form-control ${errors.dob ? 'error' : ''}`}
                            placeholderText="জন্ম তারিখ"
                        />
                        {errors.dob && <div className="error-message mb-3">{errors.dob}</div>}
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="country" value={country} onChange={this.handleChange} className={`form-control ${errors.country ? 'error' : ''}`}>
                                <option>দেশ নির্বাচন করুন</option>
                                {
                                    countries.map(country =>
                                        <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                    )
                                }
                            </select>
                            {errors.country && <div className="error-message">{errors.country}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="nid" value={nid} onChange={this.handleChange} placeholder="এনআইডি নম্বার" className={`form-control ${errors.nid ? 'error' : ''}`} />
                            {errors.nid && <div className="error-message">{errors.nid}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <PhoneInput
                                country={'bd'}
                                value={phone}
                                onChange={this.handleSelectChange.bind(this, 'phone')}
                                containerClass={`phone-input ${errors.phone ? 'error' : ''}`}
                            />
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="skill" value={skill} onChange={this.handleChange} className="form-control">
                                <option value="">দক্ষতা নির্বাচন করুন</option>
                                <option>ড্রাইভার</option>
                                <option>সিকিরিউটি গার্ড</option>
                                <option>শেফ/বাবুর্চী</option>
                                <option>পিয়ন</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-default">অ্যাকাউন্ট তৈরী</button>
                        </div>
                    </div>
                </div>
                <div className="already-have">
                    <p>Already have an Account? <Link href="/jobseeker/login"><a>Login</a></Link></p>
                </div>
            </form>
        )
    }
}
export default SpecialRegistrationForm;