import React from 'react';

import ReCAPTCHA from "react-google-recaptcha";

class EmployerRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
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
            recaptcha: ''
        }
    }


    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    onCaptchaChange = () => {
        console.log('changed')
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit')
    }

    render() {
        const { company_name, company_location, company_type, description, trade_license, tin_no, rl_no, contact_name, contact_designation, contact_no, email, password, confirm_password, how_known, terms, pricing_policy, recaptcha} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Company Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={company_name} type="text" name="company_name" placeholder="Company Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={company_location} type="text" name="company_location" placeholder="Company Location" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group select">
                            <select onChange={this.handleChange} value={company_type} name="company_type" className="form-control">
                                <option value="">Company Type</option>
                                <option value="Industry">Industry</option>
                                <option value="Education">Education</option>
                                <option value="Real State/Developers">Real State/Developers</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Garments/Textile">Garments/Textile</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea onChange={this.handleChange} value={description} name="description" rows="6" placeholder="Company Description" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={trade_license} type="text" name="trade_license" placeholder="Business/ Trade License No" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={tin_no} type="text" name="tin_no" placeholder="Business BIN/ TIN No" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={rl_no} type="text" name="rl_no" placeholder="RL No (Only for Recruiting Agency)" className="form-control" />
                        </div>
                    </div>
                </div>

                <h4 className="mt-3">Contact Person's Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={contact_name} type="text" name="contact_name" placeholder="Contact person’s Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={contact_designation} type="text" name="contact_designation" placeholder="Contact person’s Designation" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={contact_no} type="text" name="contact_no" placeholder="Contact Number" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={email} type="email" name="email" placeholder="Email Address" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={password} type="password" name="password" placeholder="Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={confirm_password} type="password" name="confirm_password" placeholder="Retype Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input onChange={this.handleChange} value={how_known} type="text" name="how_known" placeholder="How did you know about Employment" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div><input type="checkbox" type="checkbox" name="terms" id="terms" checked={terms} onChange={this.handleChange} /> <label htmlFor="terms">I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a></label></div>
                    <div><input type="checkbox" type="checkbox" name="pricing_policy" id="subscribe" checked={pricing_policy} onChange={this.handleChange} /> <label htmlFor="subscribe">Pricing policy of Employment Recruitment service.</label></div>
                </div>

                <ReCAPTCHA sitekey="6Leyc8gZAAAAAN_rvxn120qayMY-IPvzPZ2CtGiY" onChange={this.onCaptchaChange} />
                
                <div className="text-right">
                    <button className="btn btn-default">Register</button>
                </div>
            </form>
        )
    }
}
export default EmployerRegistrationForm;