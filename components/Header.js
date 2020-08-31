import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-menu">
                        <div className="header-logo">
                            <Link href="/"><a><img src="/logo.jpeg" alt="logo" /></a></Link>
                        </div>
                        <ul className="menu">
                            <li className="menu-item"><a href="#">About Us</a></li>
                            <li className="menu-item"><Link href="/jobs"><a>Find Jobs</a></Link></li>
                            <li className="menu-item"><a href="#">Employees</a></li>
                            <li className="menu-item"><a href="#">Services</a></li>
                            <li className="menu-item">
                                <button className="btn btn-green">Login | Register</button>
                                <ul className="sub-menu auth">
                                    <li>
                                        <div className="image"><img src="/icons/manager.png" alt="employer" /></div>
                                        <div>
                                            <h3>Employer</h3>
                                            <p>Login or Register to find the best candidate</p>
                                            <ul className="buttons">
                                                <a href="#">Login</a>
                                                <a href="#">Register</a>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image"><img src="/icons/contract.png" alt="candidate" /></div>
                                        <div>
                                            <h3>Jobseeker</h3>
                                            <p>Login or Register to grab the best opportunity</p>
                                            <div className="buttons">
                                                <a href="/jobseeker/login">Login</a>
                                                <a href="jobseeker/register">Register</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;