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
            
        }
    }

    render() {
        return (
            <form>
                <p className="example">ড্রাইভার, সিকিরিউটি গার্ড, শেফ/বাবুর্চী, পিয়ন</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="আপনার নাম" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gander">
                            <span>নিঙ্গ:</span>
                            <input type="radio" name="gender" id="male" value="Male" /> <label htmlFor="male">পুরুষ</label>
                            <input type="radio" name="gender" id="female" value="Female" /> <label htmlFor="female">মহিলা</label>
                            <input type="radio" name="gender" id="other" value="Other" /> <label htmlFor="other">অন্যান্য</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showMonthDropdown
                            showYearDropdown
                            className="form-control"
                            placeholderText="জন্ম তারিখ"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="country" className="form-control">
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
                            <input type="text" name="nid" placeholder="এনআইডি নম্বার" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <PhoneInput
                                country={'bd'}
                                value={this.state.phone}
                                onChange={phone => this.setState({ phone })}
                                inputClass="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="category" className="form-control">
                                <option>দক্ষতা নির্বাচন করুন</option>
                                <option>Industry</option>
                                <option>Education</option>
                                <option>Real State/Developers</option>
                                <option>Information Technology</option>
                                <option>Garments/Textile</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-default">অ্যাকাউন্ট তৈরী</button>
                        </div>
                    </div>
                </div>
                {/* <div className="already-have">
                    <p>Already have an Account? <Link href="/jobseeker/login"><a>Login</a></Link></p>
                </div> */}
            </form>
        )
    }
}
export default SpecialRegistrationForm;