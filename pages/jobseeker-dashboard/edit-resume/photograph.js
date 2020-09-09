import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../../components/data/countries.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="edit-resume">
                <ul className="resume-top-menu">
                    <li><Link href="/jobseeker-dashboard/edit-resume"><a><FontAwesomeIcon icon={faAddressCard} /> <span>Personal</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/employment"><a><FontAwesomeIcon icon={faBriefcase} /> <span>Employment</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/education"><a><FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span></a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/others"><a><FontAwesomeIcon icon={faCog} /> <span>Others</span></a></Link></li>
                    <li className="active"><Link href="/jobseeker-dashboard/edit-resume/photograph"><a><FontAwesomeIcon icon={faImage} /> <span>Photo</span></a></Link></li>
                </ul>
                <h3>Photograph</h3>
                <div className="photograph">
                    <img src="/images/team-1.jpg" alt="photo" className="img-thumbnail" />
                    <p className="mt-2">File must be of .png/.jpg/.jpeg/.gif format. <br /> File size must not exceed 200 KB.</p>
                    <div className="mt-3">
                        <button className="btn btn-green mr-2">Change</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </JobseekerLayout>
    )
}
export default JobseekerDashboard;