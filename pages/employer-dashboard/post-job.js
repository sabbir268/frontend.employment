import React from 'react';
import ReactDOM from 'react-dom';
import EmployerLayout from '../../components/EmployerLayout';

import DatePicker from "react-datepicker";
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class PostJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
                { id: "Thailand", text: "Thailand" },
                { id: "India", text: "India" }
            ],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
            ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

    render() {
        return (
            <EmployerLayout>
                <div className="job-post-form">
                    <h3>Post a Job</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Job Information</h4>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Job Title</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Job Role</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Job Category</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>No of Vacancy</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Employment Status</label>
                                        <select className="form-control">
                                            <option>Full time</option>
                                            <option>Part time</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Employment Location</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Application Deadline</label>
                                        <DatePicker
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Job Description</label>
                                        <textarea rows="8" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Employment Skilled</label>
                                        <ReactTags tags={this.state.tags}
                                            suggestions={this.state.suggestions}
                                            handleDelete={this.handleDelete}
                                            handleAddition={this.handleAddition}
                                            allowDragDrop={false}
                                            delimiters={delimiters} 
                                            classNames={{
                                                tag: 'badge badge-info mr-1',
                                                tagInputField: 'form-control'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Enclose Photograph</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Video URL</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h4>Candidate Requirement</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Year of Experience</label>
                                        <select className="form-control">
                                            <option>Less then one year</option>
                                            <option>Tow years</option>
                                            <option>Three years</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Employment Level</label>
                                        <select className="form-control">
                                            <option>Entry Level</option>
                                            <option>Mid Level</option>
                                            <option>Top Level</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Education</label>
                                        <select className="form-control">
                                            <option>Master's</option>
                                            <option>Honors</option>
                                            <option>Diploma</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Major subject</label>
                                        <select className="form-control">
                                            <option>Accountings</option>
                                            <option>Finance</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Nationality</label>
                                        <select className="form-control">
                                            <option>Accountings</option>
                                            <option>Finance</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Gender</label>
                                        <select className="form-control">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Salary Range</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Employment benefit</label>
                                        <textarea rows="4" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Training and Certification</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Skilled Required</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Additional Requirement of employment</label>
                                        <textarea rows="6" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Specialties</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input type="checkbox" id="army" />
                                        <label htmlFor="army">Preferred Retired Army officer</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-default">Submit</button>
                    </div>
                </div>
            </EmployerLayout>
        )
    }
}
export default PostJob;