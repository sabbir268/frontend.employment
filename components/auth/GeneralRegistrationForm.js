import React from 'react';
import Link from 'next/link';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import countries from '../../utils/country-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class GeneralRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            gender: '',
            dob: '',
            country: '',
            email: '',
            phone: '',
            password: '',
            confirm_password:'',
            category: '',
            terms: false,
            subscribe: false
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
        const {full_name, gender, dob, country, email, phone, password, confirm_password, category, terms, subscribe} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="example">Accountant, Marketing, HR, Project Manager, Engineer, Merchandiser</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="full_name" value={full_name} onChange={this.handleChange} placeholder="Full Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <span>Gender:</span>
                            <input type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={this.handleChange} /> <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'} onChange={this.handleChange} /> <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            selected={dob}
                            onChange={(dob) => {this.setState({dob: dob})}}
                            showMonthDropdown
                            showYearDropdown
                            className="form-control"
                            placeholderText="Date of Birth"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="country" value={country} onChange={this.handleChange} className="form-control">
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
                            <input type="text" name="email" value={email} onChange={this.handleChange} placeholder="Email" className="form-control" />
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
                        <div className="form-group">
                            <input type="text" name="password" value={password} onChange={this.handleChange} placeholder="Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="confirm_password" value={confirm_password} onChange={this.handleChange} placeholder="Confirm Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="category" value={category} onChange={this.handleChange} className="form-control">
                                <option>Select Category</option>
                                <option>Industry</option>
                                <option>Education</option>
                                <option>Real State/Developers</option>
                                <option>Information Technology</option>
                                <option>Garments/Textile</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div><input type="checkbox" name="terms" id="terms" checked={terms} onChange={this.handleChange} /> <label htmlFor="terms">I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a></label></div>
                        <div><input type="checkbox" name="subscribe" id="subscribe" checked={subscribe} onChange={this.handleChange} /> <label htmlFor="subscribe">Subscribe to Employment Newsletter and others notifications</label></div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-default">Register</button>
                        </div>
                    </div>
                </div>
                <div className="social-login">
                    <p>Register with</p>
                    <ul>
                        <li className="facebook"><button><FontAwesomeIcon icon={faFacebookF} /></button></li>
                        <li className="google"><button><FontAwesomeIcon icon={faGoogle} /></button></li>
                        <li className="linkedin"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></li>
                    </ul>
                </div>
                <div className="already-have">
                    <p>Already have an Account? <Link href="/jobseeker/login"><a>Login</a></Link></p>
                </div>
            </form>
        )
    }
}
export default GeneralRegistrationForm;