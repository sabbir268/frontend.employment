import React, { useState } from 'react';
import EmployerLayout from '../../components/EmployerLayout';
import GeneralJobForm from '../../components/jobs/GeneralJobForm';

const PostJob = (props) => {

    const [formType, setFormType] = useState('general');

    return (
        <EmployerLayout>
            <div className="job-post">
                <div className="border-bottom mb-5">
                    <h2 className="text-center mb-4">Post a Job</h2>
                    <ul className="job-type mb-4">
                        <li className={(formType === 'general') ? 'active' : ''}>
                            <a onClick={() => { setFormType('general') }}>General</a>
                        </li>
                        <li className={(formType === 'special') ? 'active' : ''}>
                            <a onClick={() => { setFormType('special') }}>Special Skilled</a>
                        </li>
                    </ul>
                </div>
                {formType === 'general' && <GeneralJobForm />}
                {/* {formType === 'special' && <SpecialRegistrationForm />} */}

            </div>
        </EmployerLayout>
    )
}
export default PostJob;