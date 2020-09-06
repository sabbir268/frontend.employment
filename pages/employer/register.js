import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmployerRegistrationForm from '../../components/auth/EmployerRegistrationForm';



const EmployerRegistration = (props) => {
    return (
        <Layout>
            <div className="section-padding section-bg register-page employer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="registration-form">
                                <h1>Create Employer Account</h1>
                                <EmployerRegistrationForm />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="sidebar">
                                <h3>Why Post a Job in employment</h3>
                                <ul>
                                    <li>Distribution to Employment and hundreds of local news sites</li>
                                    <li>Job alert emails delivered to candidates</li>
                                    <li>Flexible job postings within 1 minute</li>
                                    <li>AI Match maker can easily Match candidate with your job descriptions</li>
                                    <li>Reusable job postings - easily edit and adapt for a new opening</li>
                                    <li>Access to 500+ pre-written job descriptions - use ours or write your own</li>
                                    <li>Mobile-optimized job view to reach candidates easily</li>
                                    <li>Access to Employment's database so you can find and view candidates proactively (Premium plan only)</li>
                                    <li>Precision filtering to narrow or widen your search results (Premium plan only)</li>
                                    <li>Built-in text and email capability to contact candidates directly (Premium plan only)</li>
                                    <li>Email alerts when new resumes are submitted that match your criteria (Premium plan only)</li>
                                    <li>Tools for team collaboration with multi-user access</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default EmployerRegistration;