import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import GeneralRegistrationForm from '../../components/auth/GeneralRegistrationForm';
import SpecialRegistrationForm from '../../components/auth/SpecialRegistrationForm';



class CandidateRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: 'general'
        }
    }

    render() {
        return (
            <Layout>
                <div className="section-padding section-bg register-page candidate">
                    <div className="container">
                        <div className="registration-form">
                            <h1>Create Jobseeker Account</h1>
                            <ul className="user-type">
                                <li className={(this.state.userType === 'general') ? 'active' : ''}>
                                    <a onClick={() => { this.setState({ userType: 'general' }) }}>General Account</a>
                                </li>
                                <li className={(this.state.userType === 'special') ? 'active' : ''}>
                                    <a onClick={() => { this.setState({ userType: 'special' }) }}>স্পেশিয়াল স্কিল</a>
                                </li>
                            </ul>
                            
                            { this.state.userType === 'general' && <GeneralRegistrationForm /> }
                            { this.state.userType === 'special' && <SpecialRegistrationForm /> }

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default CandidateRegistration;