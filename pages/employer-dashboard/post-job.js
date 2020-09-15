import React, { useState } from 'react';
import EmployerLayout from '../../components/EmployerLayout';
import JobForm from '../../components/jobs/JobForm';

const PostJob = (props) => {
    const [jobType, setJobType] = useState('general');

    return (
        <EmployerLayout>
            <div className="job-post">
                <div className="border-bottom mb-5">
                    <h2 className="text-center mb-4">Post a Job</h2>
                    <ul className="job-type mb-4">
                        <li className={(jobType === 'general') ? 'active' : ''}>
                            <a onClick={() => { setJobType('general') }}>General</a>
                        </li>
                        <li className={(jobType === 'special') ? 'active' : ''}>
                            <a onClick={() => { setJobType('special') }}>Special Skilled</a>
                        </li>
                    </ul>
                </div>
                <JobForm jobType={jobType} />
            </div>
        </EmployerLayout>
    )
}
export default PostJob;