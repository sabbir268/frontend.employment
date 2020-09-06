import React from 'react';
import Link from 'next/link';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../components/data/countries.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class SpecialRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            gender: '',
            dob: '',
            country: '',
            nid: '',
            phone: '',
            skill: ''
        }
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('submited')
    }

    render() {
        const {full_name, gender, dob, country, nid, phone, skill } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <p className="example">ড্রাইভার, সিকিরিউটি গার্ড, শেফ/বাবুর্চী, পিয়ন</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="full_name" value={full_name} onChange={this.handleChange} placeholder="আপনার নাম" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <span>নিঙ্গ:</span>
                            <input type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={this.handleChange} /> <label htmlFor="male">পুরুষ</label>
                            <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <label htmlFor="female">মহিলা</label>
                            <input type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'} onChange={this.handleChange} /> <label htmlFor="other">অন্যান্য</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            selected={dob}
                            onChange={(dob) => {this.setState({dob: dob})}}
                            showMonthDropdown
                            showYearDropdown
                            className="form-control"
                            placeholderText="জন্ম তারিখ"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="country" value={country} onChange={this.handleChange} className="form-control">
                                <option>দেশ নির্বাচন করুন</option>
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
                            <input type="text" name="nid" value={nid} onChange={this.handleChange} placeholder="এনআইডি নম্বার" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <PhoneInput
                                country={'bd'}
                                value={phone}
                                onChange={(phone) => {this.setState({phone: phone})}}
                                inputClass="form-control"
                            />
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