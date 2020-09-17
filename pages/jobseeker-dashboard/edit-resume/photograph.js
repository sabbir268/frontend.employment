import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';
import EditResumeMenu from '../../../components/EditResumeMenuThree';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

class JobseekerDashboard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            file: null,
            preview: null
        }


    }

    handleChange = (e) => {
        this.setState({
            file: e.target.files[0],
            preview: URL.createObjectURL(e.target.files[0])
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();


    }

    render() {
        return (
            <JobseekerLayout>
                <div className="edit-resume">
                    <EditResumeMenu page="photo" />
                    <h3>Photograph</h3>
                    <div className="photograph">
                        <div className="image">
                            <img src={this.state.preview ? this.state.preview : '/images/resume.jpg'} alt="photo" />
                        </div>
                        <p className="mt-2">File must be of .png/.jpg/.jpeg/.gif format. <br /> File size must not exceed 200 KB.</p>
                        <div className="mt-3">
                            <button className="btn btn-green mr-2">Change <input type="file" name="profile" onChange={this.handleChange} /></button>
                            {this.state.file && <button className="btn btn-default">Upload</button>}
                            {/* <button className="btn btn-red"><FontAwesomeIcon icon={faTrash} /> Delete</button> */}
                        </div>
                    </div>
                </div>
            </JobseekerLayout>
        )
    }
}
export default JobseekerDashboard;