import React from 'react';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class CandidateLogin extends React.Component {

    render() {
        return (
            <Layout>
                <div className="section-padding section-bg login-page candidate">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    {/* <img src="/icons/employee.png" alt="employee" /> */}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="login-form">
                                    <h2 className="text-center mb-3">Candidate Login</h2>
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
                                        <a href="#" className="btn btn-black">Register Here</a>
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