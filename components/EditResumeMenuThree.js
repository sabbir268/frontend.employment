import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGraduationCap, faImage, faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const EditResumeMenuThree = (props) => {
    return (
        <ul className="resume-top-menu-three">
            <li className={`${(props.page === 'personal' || props.page === 'employment' || props.page === 'education' || props.page === 'others' || props.page === 'photo') ? 'active' : ''} ${props.page === 'personal' ? 'animation' : ''}`}>
                <Link href="/jobseeker-dashboard/edit-resume"><a>1. Personal</a></Link>
            </li>
            <li className={`${(props.page === 'employment' || props.page === 'education' || props.page === 'others' || props.page === 'photo') ? 'active' : ''} ${props.page === 'employment' ? 'animation' : ''}`}>
                <Link href="/jobseeker-dashboard/edit-resume/employment"><a>2. Employment</a></Link>
            </li>
            <li className={`${(props.page === 'education' || props.page === 'others' || props.page === 'photo') ? 'active' : ''} ${props.page === 'education' ? 'animation' : ''}`}>
                <Link href="/jobseeker-dashboard/edit-resume/education"><a>3. Education</a></Link>
            </li>
            <li className={`${(props.page === 'others' || props.page === 'photo') ? 'active' : ''} ${props.page === 'others' ? 'animation' : ''}`}>
                <Link href="/jobseeker-dashboard/edit-resume/others"><a>4. Others</a></Link>
            </li>
            <li className={`${(props.page === 'photo') ? 'active' : ''} ${props.page === 'photo' ? 'animation' : ''}`}>
                <Link href="/jobseeker-dashboard/edit-resume/photograph"><a>5. Photography</a></Link>
            </li>
        </ul>
    )
}
export default EditResumeMenuThree;