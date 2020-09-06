import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class EmployerLogin extends React.Component {

    render() {
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
                                    <form>
                                        <div className="form-group">
                                            <input type="email" placeholder="E-mail Address *" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password *" className="form-control" />
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