import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class CandidateRegistration extends React.Component {

    render() {
        return (
            <Layout>
                <div className="section-padding section-bd register-page candidate">
                    <div className="container">
                        <div className="registration-form">
                            <div className="row no-gutters align-items-center">
                                <div className="col-sm-6">
                                    <div className="content">
                                        <img src="/icons/search.png" alt="search" />
                                        <h1>Create an Account</h1>
                                        <p>Provide your skills and experiences to help employers find you.</p>
                                        <div className="social-login">
                                            <p>Register with</p>
                                            <ul>
                                                <li className="facebook"><button><FontAwesomeIcon icon={faFacebookF} /></button></li>
                                                <li className="google"><button><FontAwesomeIcon icon={faGoogle} /></button></li>
                                                <li className="linkedin"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name*" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="Email*" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="password" placeholder="Password*" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="repeat-password" placeholder="Repeat Password*" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" name="number" placeholder="Mobile*" className="form-control" />
                                        </div>
                                        <div className="form-group text-right">
                                            <button type="submit" className="btn btn-default">Register</button>
                                        </div>
                                        <div className="already-have">
                                            <p>Already have an Account? <Link href="/candidate/login"><a>Login</a></Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default CandidateRegistration;