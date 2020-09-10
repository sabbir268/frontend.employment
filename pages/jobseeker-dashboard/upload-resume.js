import React, { useState } from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../components/JobseekerLayout';

const UploadResume = (props) => {

    const [file, setFile] = useState(null);
    const [name, setName] = useState('Only PDF or MS Word files')

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setName(e.target.files[0] ? e.target.files[0].name : 'Only PDF or MS Word files');
    }

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <JobseekerLayout>
            <h4 className="mb-5">Upload Resume</h4>
            <form onSubmit={handleSubmit} className="file-upload">
                <div className="file-upload-button">
                    <h2>Drag and Drop a file or Click here to select</h2>
                    <input type="file" className="form-control" accept=".docx, .doc, .pdf" onChange={handleChange} />
                </div>
                <p>{name}</p>
                <div >
                    <button className="btn btn-default">Upload</button>
                </div>
            </form>
        </JobseekerLayout>
    )
}
export default UploadResume;