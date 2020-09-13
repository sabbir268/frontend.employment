import React, { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/MailOutline';
import Notifications from '@material-ui/icons/NotificationsOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTags, faTasks, faChalkboardTeacher, faCogs, faChevronRight, faCannabis, faProjectDiagram, faChartPie, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEnvelopeOpen, faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';


const EmployerLayout = (props) => {

    const [activeClass, setActiveClass] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const addActiveClass = (name, e) => {
        e.preventDefault();

        if (activeClass === name) {
            setActiveClass(false);
        } else {
            setActiveClass(name);
        }
    }

    return (
        <>
            <header className="dashboard-header">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="logo">
                            <Link href="/jobseeker-dashboard"><a><img src="/logo.jpeg" alt="logo" /></a></Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="menu-right">
                            <ul>
                                <li><IconButton><SearchOutlined /></IconButton></li>
                                <li>
                                    <IconButton>
                                        <Badge badgeContent={4} color="primary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton>
                                        <Badge badgeContent={4} color="primary">
                                            <Notifications />
                                        </Badge>
                                    </IconButton>
                                </li>
                                <li className="user-dropdown">
                                    {/* <Avatar alt="Remy Sharp" src="/images/team-1.jpg" /> */}
                                    <span>John Due</span>
                                    <div className="image" onClick={handleClick}>
                                        <img src="/images/team-1.jpg" alt="user" />
                                    </div>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="dashboard jobseeker section-bg">
                <div className="sidebar">
                    <ul className="menu">
                        <li><a href="/jobseeker-dashboard"><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
                        <li className={(activeClass === 'jobs') ? 'active' : ''}>
                            <a href="#" onClick={addActiveClass.bind(this, 'jobs')}><FontAwesomeIcon icon={faEdit} /> Jobs <FontAwesomeIcon icon={faChevronRight} className="right-icon" /></a>
                            <ul className="submenu">
                                <li><Link href="/employer-dashboard/post-job"><a>Post a Job</a></Link></li>
                                <li><Link href="/employer-dashboard/post-job"><a>Job List</a></Link></li>
                                <li><Link href="/employer-dashboard/post-job"><a>Packges</a></Link></li>
                                <li><Link href="/employer-dashboard/post-job"><a>Job Posting History</a></Link></li>
                            </ul>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faTasks} /> Activities</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} /> Message</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faCogs} /> Settings</a></li>
                    </ul>
                </div>

                <div className="dashboard-content">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default EmployerLayout;