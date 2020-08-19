import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-menu">
                        <div className="header-logo">
                            <img src="/logo.jpeg" alt="logo" />
                        </div>
                        <ul className="menu">
                            <li className="menu-item"><a href="#">Home</a></li>
                            <li className="menu-item"><a href="#">Find Jobs</a></li>
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
                                            <h3>Candidate</h3>
                                            <p>Login or Register to grab the best opportunity</p>
                                            <div className="buttons">
                                                <a href="#">Login</a>
                                                <a href="#">Register</a>
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