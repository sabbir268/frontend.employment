import React from 'react';
import ReactDOM from 'react-dom';
import RichText from '../RichText';

import DatePicker from "react-datepicker";
import { WithContext as ReactTags } from 'react-tag-input';
import Geosuggest from 'react-geosuggest';
import Select from 'react-select'

import { functionalJobCategories, industryCategories } from '../../utils/common-variables';
import countries from '../../utils/country-list';
import { TimerSharp } from '@material-ui/icons';


class GeneralJobForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: '',
            role: '',
            jobCategory: '',
            industryCategory: '',
            vacancy: '',
            employmentStatus: '',
            deadline: '',
            employmentLocation: '',
            description: '',
            employmentSkills: [],
            photograph: null,
            videoUrl: '',
            experience: '',
            employmentLevel: '',
            education: '',
            majorSubject: '',
            location: '',
            nationality: '',
            gender: '',
            age: '',
            salaryRange: '',
            employmentBenefit: '',
            trainingCertification: '',
            requiredSkills: [],
            additionalRequirements: '',
            specialties: '',
            preferredArmy: false,
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
            ]
        };
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSelectChange = (name, selectedOption) => {
        this.setState({
            [name]: selectedOption
        })
    }

    getJobDescription(data) {
        if (data !== this.state.description) {
            this.setState({
                description: JSON.stringify(data),
            })
        }
    }

    getAddRequirements(data) {
        if (data !== this.state.additionalRequirements) {
            this.setState({
                additionalRequirements: JSON.stringify(data),
            })
        }
    }

    getEmploymentBenefit(data) {
        if (data !== this.state.employmentBenefit) {
            this.setState({
                employmentBenefit: JSON.stringify(data),
            })
        }
    }

    onLocationSelect(fieldName, location) {
        if (location) {
            this.setState({
                [fieldName]: location.label
            })
        }
    }

    deleteSkill = (i) => {
        const { employmentSkills } = this.state;
        this.setState({
            employmentSkills: employmentSkills.filter((skill, index) => index !== i),
        });
    }

    addSkill = (skill) => {
        this.setState(state => ({ employmentSkills: [...state.employmentSkills, skill] }));
    }

    deleteRequiredSkill = (i) => {
        const { requiredSkills } = this.state;
        this.setState({
            requiredSkills: requiredSkills.filter((skill, index) => index !== i),
        });
    }

    addRequiredSkill = (skill) => {
        this.setState(state => ({ requiredSkills: [...state.requiredSkills, skill] }));
    }

    isJson = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    render() {

        const { title, role, jobCategory, industryCategory, vacancy, employmentStatus, deadline, employmentLocation, description, employmentSkills, photograph, videoUrl, experience, employmentLevel, education, majorSubject, location, nationality, gender, age, salaryRange, otherBenefit, trainingCertification, requiredSkills, additionalRequirements, specialties, preferredArmy } = this.state;

        const jobDescriptionProps = {
            parentCallback: this.getJobDescription.bind(this),
            data: this.isJson(this.state.description) ? this.state.description : null
        }

        const addRequirementProps = {
            parentCallback: this.getAddRequirements.bind(this),
            data: this.isJson(this.state.additionalRequirements) ? this.state.additionalRequirements : null
        }

        const employmentBenefitProps = {
            parentCallback: this.getEmploymentBenefit.bind(this),
            data: this.isJson(this.state.employmentBenefit) ? this.state.employmentBenefit : null
        }

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Job Information</h4>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Title</label>
                                    <input name="title" type="text" className="form-control" value={title} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Role</label>
                                    <input name="role" type="text" className="form-control" value={role} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Category</label>
                                    <Select
                                        instanceId="job_category"
                                        name="job-category"
                                        isClearable
                                        options={functionalJobCategories}
                                        placeholder="" 
                                        value={jobCategory}
                                        onChange={this.handleSelectChange.bind(this, 'jobCategory')} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Company Industry Category</label>
                                    <Select
                                        instanceId="industry_category"
                                        name="industry-category"
                                        isClearable
                                        options={industryCategories}
                                        placeholder=""
                                        value={industryCategory}
                                        onChange={this.handleSelectChange.bind(this, 'industryCategory')} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>No of Vacancy</label>
                                    <input name="vacancy" type="text" className="form-control" value={vacancy} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Employment Status</label>
                                    <select name="employmentStatus" className="form-control" value={employmentStatus} onChange={this.handleChange}>
                                        <option>Full time</option>
                                        <option>Part time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Employment Location</label>
                                    <Geosuggest
                                        id="employer_location"
                                        placeholder=""
                                        inputClassName="form-control"
                                        onSuggestSelect={this.onLocationSelect.bind(this, 'employmentLocation')} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Application Deadline</label>
                                    <DatePicker
                                        className="form-control"
                                        selected={deadline}
                                        onChange={this.handleSelectChange.bind(this, 'deadline')} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <div className="rich-text">
                                        <RichText {...jobDescriptionProps} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Employment Skilled</label>
                                    <ReactTags tags={this.state.employmentSkills}
                                        suggestions={this.state.skillSuggestions}
                                        handleDelete={this.deleteSkill}
                                        handleAddition={this.addSkill}
                                        allowDragDrop={false}
                                        autofocus={false}
                                        placeholder="Write skill name and press Enter"
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
                                    <input name="videoUrl" type="text" className="form-control" value={videoUrl} onChange={this.handleChange} />
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
                                    <select name="experience" className="form-control" value={experience} onChange={this.handleChange}>
                                        <option>Less then one year</option>
                                        <option>Tow years</option>
                                        <option>Three years</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Employment Level</label>
                                    <select name="employmentLevel" className="form-control" value={employmentLevel} onChange={this.handleChange}>
                                        <option>Entry Level</option>
                                        <option>Mid Level</option>
                                        <option>Top Level</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Education</label>
                                    <select name="education" className="form-control" value={education} onChange={this.handleChange}>
                                        <option>Master's</option>
                                        <option>Honors</option>
                                        <option>Diploma</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Major subject</label>
                                    <select name="majorSubject" className="form-control" value={majorSubject} onChange={this.handleChange}>
                                        <option>Accountings</option>
                                        <option>Finance</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Location</label>
                                    <Geosuggest
                                        id="location"
                                        placeholder=""
                                        inputClassName="form-control"
                                        onSuggestSelect={this.onLocationSelect.bind(this, 'location')} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Nationality</label>
                                    <select name="nationality" className="form-control" value={nationality} onChange={this.handleChange}>
                                        <option></option>
                                        {countries.map(country =>
                                            <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Gender</label>
                                    <select name="gender" className="form-control" value={gender} onChange={this.handleChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input name="age" type="text" className="form-control" value={age} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Salary Range</label>
                                    <input name="salaryRange" type="text" className="form-control" value={salaryRange} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Employment Compensation and other benefit</label>
                                    <div className="rich-text">
                                        <RichText {...employmentBenefitProps} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Training and Certification</label>
                                    <input name="trainingCertification" type="text" className="form-control" value={trainingCertification} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Employment Skilled Required</label>
                                    <ReactTags tags={this.state.requiredSkills}
                                        suggestions={this.state.skillSuggestions}
                                        handleDelete={this.deleteRequiredSkill}
                                        handleAddition={this.addRequiredSkill}
                                        allowDragDrop={false}
                                        autofocus={false}
                                        placeholder="Write skill name and press Enter"
                                        classNames={{
                                            tag: 'badge badge-info mr-1',
                                            tagInputField: 'form-control'
                                        }} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Additional Requirement of employment</label>
                                    <div className="rich-text">
                                        <RichText {...addRequirementProps} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Specialties</label>
                                    <input name="specialties" type="text" className="form-control" value={specialties} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input name="preferredArmy" type="checkbox" id="army" className="mr-2" checked={preferredArmy} onChange={this.handleChange} />
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
        )
    }
}
export default GeneralJobForm;