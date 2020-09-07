import React, { useState } from 'react';
import Link from 'next/link';
import Layout from './Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTags, faTasks, faChalkboardTeacher, faCogs, faChevronRight, faCannabis, faProjectDiagram, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const JobseekerLayout = (props) => {

    const [activeClass, setActiveClass] = useState(false);

    const addActiveClass = (name, e) => {
        e.preventDefault();

        if(activeClass === name){
            setActiveClass(false);
        } else {
            setActiveClass(name);
        }
    }

    return (
        <Layout>
            <div className="dashboard jobseeker section-padding section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <ul className="menu">
                                    <li><a href="#"><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
                                    <li className={(activeClass === 'resume') ? 'active' : ''}>
                                        <a href="#" onClick={addActiveClass.bind(this, 'resume')}><FontAwesomeIcon icon={faEdit} /> Resume <FontAwesomeIcon icon={faChevronRight} className="right-icon" /></a>
                                        <ul className="submenu">
                                            <li><Link href="#"><a>View Resume</a></Link></li>
                                            <li><Link href="#"><a>Edit Resume</a></Link></li>
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
                        </div>
                        <div className="col-sm-9">
                            <div className="dashboard-content">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default JobseekerLayout;