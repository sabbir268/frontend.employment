import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EmployerRegistrationForm from '../../components/auth/EmployerRegistrationForm';



const EmployerRegistration = (props) => {
    return (
        <Layout>
            <div className="section-padding section-bg register-page employer">
                <div className="container">
                    <div className="registration-form">
                        <h1>Create Employer Account</h1>
                        <EmployerRegistrationForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default EmployerRegistration;