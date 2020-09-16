import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

class EmployerLogin extends React.Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const errors = this.state.errors;
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        })
    }

    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (!fields.email || !ValidateEmail(fields.email)) {
            formIsValid = false;
            errors.email = "Invalid Email address";
        }
        if (!fields.password) {
            formIsValid = false;
            errors.password = "Password is required.";
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
        const { email, password, errors } = this.state;
        return (
            <Layout>
                <div className="section-padding login-page employer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="left-content mb-4">
                                    <div className="counter-item">
                                        <i className="flaticon-human-resources"></i>
                                        <strong><CountUp end={3000} />+</strong>
                                        <p>CV Bank</p>
                                    </div>
                                    <div className="counter-item">
                                        <i className="flaticon-suitcase"></i>
                                        <strong><CountUp end={2000} />+</strong>
                                        <p>Live Jobs</p>
                                    </div>
                                    <div className="counter-item">
                                        <i className="flaticon-businessman-1"></i>
                                        <strong><CountUp end={3500} />+</strong>
                                        <p>Online Application</p>
                                    </div>
                                </div>
                                <div className="left-content">
                                    <h2>Explore Advance Features and Top Candidates</h2>
                                    <ul>
                                        <li>Take video interview from anywhere at any time.</li>
                                        <li>Get the right candidate in the fastest way.</li>
                                        <li>Post a Job to the largest community.</li>
                                        <li>Easy and Advance search system.</li>
                                        <li>Job alert emails delivered to candidates.</li>
                                        <li>And Many More.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="login-form">
                                    <h2 className="text-center mb-3">Employer Login</h2>
                                    <form onSubmit={this.handleSubmit} noValidate>
                                        <div className="form-group">
                                            <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email Address *" className={`form-control ${errors.email ? 'error' : ''}`} />
                                            {errors.email && <div className="error-message">{errors.email}</div>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password *" className={`form-control ${errors.password ? 'error' : ''}`} />
                                            {errors.password && <div className="error-message">{errors.password}</div>}
                                        </div>
                                        <div className="submit-button">
                                            <a href="#">Forget Password?</a>
                                            <button className="btn btn-default">Login</button>
                                        </div>
                                    </form>
                                    <div className="social-login">
                                        <p>Ligin with</p>
                                        <ul>
                                            <li className="facebook"><button><FontAwesomeIcon icon={faFacebookF} /></button></li>
                                            <li className="google"><button><FontAwesomeIcon icon={faGoogle} /></button></li>
                                            <li className="linkedin"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></li>
                                        </ul>
                                    </div>
                                    <div className="not-have">
                                        <p>Don't have an account?</p>
                                        <Link href="/employer/register"><a className="btn btn-black">Register Here</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default EmployerLogin;