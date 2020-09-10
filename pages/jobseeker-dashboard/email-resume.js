import React, { useState } from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../components/JobseekerLayout';

class EmailResume extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <JobseekerLayout>
                <h4>Email Resume</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>My Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Company Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group radio-input">
                        <input type="radio" name="cv_type" id="default" value="Default" /> <label htmlFor="default">Employment Resume</label>
                        <input type="radio" name="cv_type" id="custom" value="Custom" /> <label htmlFor="custom">Your Custom Resume</label>
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="detail" rows="8" className="form-control"></textarea>
                    </div>
                </form>
            </JobseekerLayout>
        )
    }
}
export default EmailResume;