import React, { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTags, faTasks, faChalkboardTeacher, faCogs, faChevronRight, faCannabis, faProjectDiagram, faChartPie, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEnvelopeOpen, faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';

const JobseekerLayout = (props) => {

    const [activeClass, setActiveClass] = useState(false);

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
                                <li><FontAwesomeIcon icon={faSearch} /></li>
                                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                                <li><FontAwesomeIcon icon={faBell} /></li>
                                <li className="user-dropdown">
                                    <span>John Due</span>
                                    <div className="image">
                                        <img src="/images/team-1.jpg" alt="user" />
                                    </div>
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
                        <li className={(activeClass === 'resume') ? 'active' : ''}>
                            <a href="#" onClick={addActiveClass.bind(this, 'resume')}><FontAwesomeIcon icon={faEdit} /> Resume <FontAwesomeIcon icon={faChevronRight} className="right-icon" /></a>
                            <ul className="submenu">
                                <li><Link href="/jobseeker-dashboard/view-resume"><a>View Resume</a></Link></li>
                                <li><Link href="/jobseeker-dashboard/edit-resume"><a>Edit Resume</a></Link></li>
                                <li><Link href="#"><a>Upload Resume</a></Link></li>
                                <li><Link href="#"><a>Cover Letter</a></Link></li>
                            </ul>
                        </li>
                        <li><a href="#"><FontAwesomeIcon icon={faTasks} /> Activities</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faProjectDiagram} /> Resume Service</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faChartPie} /> Employer Activities</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faCannabis} /> Referal Activities</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelopeOpen} /> Message & SMS</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faChalkboardTeacher} /> My Trainings</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faCogs} /> Settings</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTags} /> Offers</a></li>
                    </ul>
                </div>

                <div className="dashboard-content">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default JobseekerLayout;