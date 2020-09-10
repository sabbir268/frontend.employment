import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const EditResumeMenu = (props) => {
    return (
        <ul className="resume-top-menu-two">
            <li className={props.page === 'personal' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume"><a><i className="icon"><FontAwesomeIcon icon={faAddressCard} /></i><span>Personal</span></a></Link>
            </li>
            <li className={props.page === 'employment' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/employment"><a><i className="icon"><FontAwesomeIcon icon={faBriefcase} /></i> <span>Employment</span></a></Link>
            </li>
            <li className={props.page === 'education' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/education"><a><i className="icon"><FontAwesomeIcon icon={faGraduationCap} /></i> <span>Education</span></a></Link>
            </li>
            <li className={props.page === 'others' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/others"><a><i className="icon"><FontAwesomeIcon icon={faCog} /></i> <span>Others</span></a></Link>
            </li>
            <li className={props.page === 'photo' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/photograph"><a><i className="icon"><FontAwesomeIcon icon={faImage} /></i> <span>Photography</span></a></Link>
            </li>
        </ul>
    )
}
export default EditResumeMenu;