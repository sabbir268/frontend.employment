import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="header-menu">
                    <div className="header-logo">
                        <img src="/logo.jpeg" alt="logo" />
                    </div>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Find Jobs</a></li>
                        <li><a href="#">Employees</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    
                </div>
            </header>
        )
    }
}
export default Header;