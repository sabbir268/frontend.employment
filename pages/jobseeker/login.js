import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class CandidateLogin extends React.Component {

    render() {
        return (
            <Layout>
                <div className="section-padding login-page candidate">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                {/* <div className="login-image">
                                    <img src="/icons/teamwork.png" alt="employee" />
                                </div> */}
                                <div>
                                    <h2>Manage your profile and shortlisted jobs</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla nec leo ut pretium. Donec id dui lacus. Phasellus scelerisque, leo nec imperdiet faucibus, lorem turpis volutpat mi, eu posuere diam enim eget orci.</p>
                                    <p>Donec fringilla, quam a molestie dapibus, urna sem venenatis tellus, sit amet placerat quam odio et purus.</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="login-form">
                                    <h2 className="text-center mb-3">Jobseeker Login</h2>
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
                                        <Link href="/jobseeker/register"><a className="btn btn-black">Register Here</a></Link>
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
export default CandidateLogin;