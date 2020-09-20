import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../components/JobseekerLayout';

const CoverLetter = (props) => {
    return (
        <JobseekerLayout>
            <div className="content-item">
                <h4>Cover Letter</h4>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Details</label>
                        <textarea className="form-control" rows="8"></textarea>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-default">Save</button>
                    </div>
                </form>
            </div>
        </JobseekerLayout>
    )
}
export default CoverLetter;