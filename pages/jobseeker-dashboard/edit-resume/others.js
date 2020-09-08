import React from 'react';
import Link from 'next/link';
import JobseekerLayout from '../../../components/JobseekerLayout';

import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2';

import Countries from '../../../components/data/countries.json';
import Languages from '../../../components/data/languages.json';


const Others = (props) => {
    return (
        <JobseekerLayout>
            <div className="edit-resume">
                <ul className="resume-top-menu">
                    <li><Link href="/jobseeker-dashboard/edit-resume"><a>Personal</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/employment"><a>Employment</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/education"><a>Education</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/others"><a>Others</a></Link></li>
                    <li><Link href="/jobseeker-dashboard/edit-resume/photograph"><a>Photo</a></Link></li>
                </ul>
                <h3>Languages</h3>
                <div className="languages">
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Language</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        {
                                            Languages.map(language =>
                                                <option key={language.code}>{language.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Reading</label>
                                    <select className="form-control">
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Writing</label>
                                    <select className="form-control">
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Speaking</label>
                                    <select className="form-control">
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button className="btn btn-black mr-2">Cancel</button>
                            <button className="btn btn-default">Save</button>
                        </div>
                    </form>
                    <div>
                        <button className="btn btn-green">+ Add Language</button>
                    </div>
                </div>
            </div>
        </JobseekerLayout>
    )
}
export default Others;