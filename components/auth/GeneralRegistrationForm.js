import React from 'react';
import Link from 'next/link';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import countries from '../../utils/country-list';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

class GeneralRegistrationForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            full_name: '',
            gender: '',
            dob: '',
            country: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            category: '',
            terms: false,
            subscribe: false,
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
        if (!fields.email || !ValidateEmail(fields.email)) {
            formIsValid = false;
            errors.email = "Invalid Email address";
        }
        if (!fields.phone) {
            formIsValid = false;
            errors.phone = "Phone number is required.";
        }
        if (!fields.password) {
            formIsValid = false;
            errors.password = "Password is required.";
        }
        if (!fields.confirm_password) {
            formIsValid = false;
            errors.confirm_password = "Confirm password is required.";
        }
        if (fields.password !== fields.confirm_password) {
            formIsValid = false;
            errors.confirm_password = "Confirm password must be same as password.";
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
        const { full_name, gender, dob, country, email, phone, password, confirm_password, category, terms, subscribe, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="example">Accountant, Marketing, HR, Project Manager, Engineer, Merchandiser</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="full_name" className={`form-control ${errors.full_name ? 'error' : ''}`} value={full_name} onChange={this.handleChange} placeholder="Full Name" />
                            {errors.full_name && <div className="error-message">{errors.full_name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gender">
                            <span>Gender:</span>
                            <input type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={this.handleChange} /> <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'} onChange={this.handleChange} /> <label htmlFor="other">Other</label>
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
                            placeholderText="Date of Birth"
                        />
                        {errors.dob && <div className="error-message mb-3">{errors.dob}</div>}
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="country" value={country} onChange={this.handleChange} className={`form-control ${errors.country ? 'error' : ''}`}>
                                <option>Select Country</option>
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
                            <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" className={`form-control ${errors.email ? 'error' : ''}`} />
                            {errors.email && <div className="error-message">{errors.email}</div>}
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
                        <div className="form-group">
                            <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" className={`form-control ${errors.password ? 'error' : ''}`} />
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="password" name="confirm_password" value={confirm_password} onChange={this.handleChange} placeholder="Confirm Password" className={`form-control ${errors.confirm_password ? 'error' : ''}`} />
                            {errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="category" value={category} onChange={this.handleChange} className={`form-control ${errors.category ? 'error' : ''}`}>
                                <option>Select Category</option>
                                <option>Industry</option>
                                <option>Education</option>
                                <option>Real State/Developers</option>
                                <option>Information Technology</option>
                                <option>Garments/Textile</option>
                            </select>
                            {errors.category && <div className="error-message">{errors.category}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <label className={`custom-checkbox ${errors.terms ? 'error' : ''}`}>I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a>
                            <input type="checkbox" name="terms" checked={terms} onChange={this.handleChange} />
                            <span className="checkmark"></span>
                        </label>
                        <label className="custom-checkbox">Subscribe to Employment Newsletter and others notifications
                            <input type="checkbox" name="subscribe" checked={subscribe} onChange={this.handleChange} />
                            <span className="checkmark"></span>
                        </label>
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