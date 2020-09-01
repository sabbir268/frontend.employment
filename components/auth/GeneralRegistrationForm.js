import React from 'react';
import Link from 'next/link';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../components/data/countries.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class GeneralRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <p className="example">Accountant, Marketing, HR, Project Manager, Engineer, Merchandiser</p>
                <div className="row sm-gutters">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Full Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group gander">
                            <span>Gander:</span>
                            <input type="radio" name="gender" id="male" value="Male" /> <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="female" value="Female" /> <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="other" value="Other" /> <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showMonthDropdown
                            showYearDropdown
                            className="form-control"
                            placeholderText="Date of Birth"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
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
                            <input type="text" name="email" placeholder="Email" className="form-control" />
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
                        <div className="form-group">
                            <input type="text" name="password" placeholder="Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="repeat-password" placeholder="Repeat Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group select">
                            <select name="category" className="form-control">
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
                        <div><input type="checkbox" id="terms" /> <label htmlFor="terms">I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a></label></div>
                        <div><input type="checkbox" id="subscribe" /> <label htmlFor="subscribe">Subscribe to Employment Newsletter and others notifications</label></div>
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