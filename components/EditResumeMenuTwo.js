import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const EditResumeMenuTwo = (props) => {
    return (
        <ul className="resume-top-menu">
            <li className={props.page === 'personal' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume"><a><FontAwesomeIcon icon={faAddressCard} /> <span>Personal</span></a></Link>
            </li>
            <li className={props.page === 'employment' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/employment"><a><FontAwesomeIcon icon={faBriefcase} /> <span>Employment</span></a></Link>
            </li>
            <li className={props.page === 'education' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/education"><a><FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span></a></Link>
            </li>
            <li className={props.page === 'others' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/others"><a><FontAwesomeIcon icon={faCog} /> <span>Others</span></a></Link>
            </li>
            <li className={props.page === 'photo' ? 'active' : ''}>
                <Link href="/jobseeker-dashboard/edit-resume/photograph"><a><FontAwesomeIcon icon={faImage} /> <span>Photo</span></a></Link>
            </li>
        </ul>
    )
}
export default EditResumeMenuTwo;