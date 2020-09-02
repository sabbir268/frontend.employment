import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';



class EmployerRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <div className="section-padding section-bg register-page employer">
                    <div className="container">
                        <div className="registration-form">
                            <h1>Create Employer Account</h1>
                            
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default EmployerRegistration;