import React from 'react';
import PhoneInput from 'react-phone-input-2';
import ReCAPTCHA from "react-google-recaptcha";
import Geosuggest from 'react-geosuggest';
import Select from 'react-select';

import { industryTypes } from '../../utils/common-variables';

const style = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#33333" : "#e4e4e4",
        backgroundColor: '#fcfcfc',
        padding: '4px',
        boxShadow: 'none',
        "&:hover": {
            borderColor: state.isFocused ? "#33333" : "#e4e4e4"
        }
    })
};

const ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}


class EmployerRegistrationForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            company_name: '',
            company_location: '',
            company_type: '',
            description: '',
            trade_license: '',
            tin_no: '',
            rl_no: '',
            contact_name: '',
            contact_designation: '',
            contact_no: '',
            email: '',
            password: '',
            confirm_password: '',
            how_known: '',
            terms: false,
            pricing_policy: false,
            website: '',
            facebook: '',
            youtube: '',
            linkedin: '',
            recaptcha: '',
            firend_email: '',
            user_id_type: '',
            errors: {}
        }
    }

    onCaptchaChange = () => {
        console.log('changed')
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

    onLocationSelect(fieldName, location) {
        if (location) {
            const errors = this.state.errors;
            errors[fieldName] = '';
            this.setState({
                [fieldName]: location.label,
                errors
            })
        }
    }

    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (!fields.company_name) {
            formIsValid = false;
            errors.company_name = "Company name is required.";
        }
        if (!fields.company_location) {
            formIsValid = false;
            errors.company_location = "Company location is required.";
        }
        if (!fields.company_type) {
            formIsValid = false;
            errors.company_type = "Company type is required.";
        }
        if (!fields.description) {
            formIsValid = false;
            errors.description = "Description is required.";
        }
        if (!fields.trade_license) {
            formIsValid = false;
            errors.trade_license = "Trade License is required.";
        }
        if (!fields.tin_no) {
            formIsValid = false;
            errors.tin_no = "BIN/NIT is required.";
        }
        if (!fields.rl_no) {
            formIsValid = false;
            errors.rl_no = "RL No is required.";
        }
        if (!fields.contact_name) {
            formIsValid = false;
            errors.contact_name = "Name is required.";
        }
        if (!fields.contact_designation) {
            formIsValid = false;
            errors.contact_designation = "Designation is required.";
        }
        if (!fields.contact_no) {
            formIsValid = false;
            errors.contact_no = "Conatact No is required.";
        }
        if (!fields.email || !ValidateEmail(fields.email)) {
            formIsValid = false;
            errors.email = "Invalid Email address";
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
        if (!fields.pricing_policy) {
            formIsValid = false;
            errors.pricing_policy = "This is required.";
        }
        if (fields.firend_email && !ValidateEmail(fields.firend_email)) {
            formIsValid = false;
            errors.firend_email = "Invalid Email address";
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
        const { company_name, company_location, company_type, description, trade_license, tin_no, rl_no, contact_name, contact_designation, contact_no, email, password, confirm_password, how_known, terms, pricing_policy, website, facebook, linkedin, firend_email, youtube, user_id_type, recaptcha, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <h4>Company Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="company_name"
                                placeholder="Company Name"
                                value={company_name}
                                onChange={this.handleChange}
                                className={`form-control ${errors.company_name ? 'error' : ''}`} />
                            {errors.company_name && <div className="error-message">{errors.company_name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Geosuggest
                                id="company_location"
                                placeholder="Company Location"
                                inputClassName={`form-control ${errors.company_location ? 'error' : ''}`}
                                onSuggestSelect={this.onLocationSelect.bind(this, 'company_location')} />
                            {errors.company_location && <div className="error-message">{errors.company_location}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <Select
                                instanceId="company_type"
                                className={`react-select ${errors.company_type ? 'error' : ''}`}
                                styles={style}
                                name="company_type"
                                isClearable
                                options={industryTypes}
                                placeholder="Company Type"
                                value={company_type}
                                onChange={this.handleSelectChange.bind(this, 'company_type')} />
                            {errors.company_type && <div className="error-message">{errors.company_type}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea
                                name="description"
                                rows="6"
                                placeholder="Company Description"
                                value={description}
                                onChange={this.handleChange}
                                className={`form-control ${errors.description ? 'error' : ''}`}></textarea>
                            {errors.description && <div className="error-message">{errors.description}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={trade_license} type="text" name="trade_license" placeholder="Business/ Trade License No" className={`form-control ${errors.trade_license ? 'error' : ''}`} />
                            {errors.trade_license && <div className="error-message">{errors.trade_license}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={tin_no} type="text" name="tin_no" placeholder="Business BIN/ TIN No" className={`form-control ${errors.tin_no ? 'error' : ''}`} />
                            {errors.tin_no && <div className="error-message">{errors.tin_no}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={rl_no} type="text" name="rl_no" placeholder="RL No (Only for Recruiting Agency)" className={`form-control ${errors.rl_no ? 'error' : ''}`} />
                            {errors.rl_no && <div className="error-message">{errors.rl_no}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={website} type="text" name="website" placeholder="Company's Website" className={`form-control ${errors.website ? 'error' : ''}`} />
                            {errors.website && <div className="error-message">{errors.website}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={facebook} type="text" name="facebook" placeholder="Company's facebook profile" className={`form-control ${errors.facebook ? 'error' : ''}`} />
                            {errors.facebook && <div className="error-message">{errors.facebook}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={linkedin} type="text" name="linkedin" placeholder="Company's linkedin profile" className={`form-control ${errors.linkedin ? 'error' : ''}`} />
                            {errors.linkedin && <div className="error-message">{errors.linkedin}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={youtube} type="text" name="youtube" placeholder="Company's youtube channel" className={`form-control ${errors.linkedin ? 'error' : ''}`} />
                            {errors.youtube && <div className="error-message">{errors.youtube}</div>}
                        </div>
                    </div>
                </div>

                <h4 className="mt-3">Contact Person's Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={contact_name} type="text" name="contact_name" placeholder="Contact person’s Name" className={`form-control ${errors.contact_name ? 'error' : ''}`} />
                            {errors.contact_name && <div className="error-message">{errors.contact_name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={contact_designation} type="text" name="contact_designation" placeholder="Contact person’s Designation" className={`form-control ${errors.contact_designation ? 'error' : ''}`} />
                            {errors.contact_designation && <div className="error-message">{errors.contact_designation}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <PhoneInput
                                country={'bd'}
                                value={contact_no}
                                onChange={this.handleSelectChange.bind(this, 'contact_no')}
                                containerClass={`phone-input ${errors.contact_no ? 'error' : ''}`}
                            />
                            <div className="make-user-id"><span className={user_id_type === 'phone' ? 'active' : ''} onClick={() => {this.setState({ user_id_type: 'phone'})}}>Make User ID</span></div>
                            {errors.contact_no && <div className="error-message">{errors.contact_no}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={email} type="email" name="email" placeholder="Email Address" className={`form-control ${errors.email ? 'error' : ''}`} />
                            <div className="make-user-id"><span className={user_id_type === 'email' ? 'active' : ''} onClick={() => {this.setState({ user_id_type: 'email'})}}>Make User ID</span></div>
                            {errors.email && <div className="error-message">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={password} type="password" name="password" placeholder="Password" className={`form-control ${errors.password ? 'error' : ''}`} />
                            {errors.password && <div className="error-message">{errors.password}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={confirm_password} type="password" name="confirm_password" placeholder="Retype Password" className={`form-control ${errors.confirm_password ? 'error' : ''}`} />
                            {errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group select">
                            <select onChange={this.handleChange} value={how_known} name="how_known" className={`form-control ${errors.how_known ? 'error' : ''}`}>
                                <option value="">How did you know about Employment</option>
                                <option value="facebook">Facebook</option>
                                <option value="google">Google</option>
                                <option value="linkedin">Linkedin</option>
                                <option value="friend">From a Friend</option>
                            </select>
                            {errors.how_known && <div className="error-message">{errors.how_known}</div>}
                        </div>
                    </div>
                    {
                        how_known === 'friend' &&
                        <div className="col-sm-12">
                            <div className="form-group">
                                <input onChange={this.handleChange} value={firend_email} type="email" name="firend_email" placeholder="Please add your firend's Email" className={`form-control ${errors.firend_email ? 'error' : ''}`} />
                                {errors.firend_email && <div className="error-message">{errors.firend_email}</div>}
                            </div>
                        </div>
                    }
                    <div className="col-sm-12">
                        <label className={`custom-checkbox ${errors.terms ? 'error' : ''}`}>I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a>
                            <input type="checkbox" name="terms" checked={terms} onChange={this.handleChange} />
                            <span className="checkmark"></span>
                        </label>
                        <label className={`custom-checkbox ${errors.pricing_policy ? 'error' : ''}`}>Pricing policy of Employment Recruitment service.
                        <input type="checkbox" name="pricing_policy" checked={pricing_policy} onChange={this.handleChange} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>

                <ReCAPTCHA sitekey="6Leyc8gZAAAAAN_rvxn120qayMY-IPvzPZ2CtGiY" onChange={this.onCaptchaChange} className="mt-3" />

                <div className="text-right">
                    <button className="btn btn-default">Register</button>
                </div>
            </form>
        )
    }
}
export default EmployerRegistrationForm;