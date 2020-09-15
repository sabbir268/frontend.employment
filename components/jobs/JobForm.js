import React from 'react';
import ReactDOM from 'react-dom';
import RichText from '../RichText';

import DatePicker from "react-datepicker";
import { WithContext as ReactTags } from 'react-tag-input';
import Geosuggest from 'react-geosuggest';
import Select from 'react-select';

import { functionalJobCategories, industryCategories } from '../../utils/common-variables';
import countries from '../../utils/country-list';

const style = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#33333" : "#e4e4e4",
        backgroundColor: '#fcfcfc',
        padding: '4px',
        boxShadow: 'none',
        "&:hover": {
            borderColor: state.isFocused ? "#33333" : "#e4e4e4"
        }
    })
};


class JobForm extends React.Component {
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
            salaryFrom: '',
            salaryTo: '',
            employmentBenefit: '',
            trainingCertification: '',
            requiredSkills: [],
            additionalRequirements: '',
            specialties: '',
            preferredArmy: false,
            hideCompanyName: false,
            hideCompanyAddress: false,
            hideCompanyBusiness: false,
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
            ],
            errors: {}
        };
    }

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        const errors = this.state.errors;
        errors[name] = '';

        this.setState({
            [name]: value,
            errors
        })
    }

    handleSelectChange = (name, selectedOption) => {
        const errors = this.state.errors;
        errors[name] = '';
        this.setState({
            [name]: selectedOption,
            errors
        })
    }

    getJobDescription(data) {
        if (data !== this.state.description) {
            const errors = this.state.errors;
            errors.description = '';
            this.setState({
                description: JSON.stringify(data),
                errors
            })
        }
    }

    getAddRequirements(data) {
        if (data !== this.state.additionalRequirements) {
            const errors = this.state.errors;
            errors.additionalRequirements = '';
            this.setState({
                additionalRequirements: JSON.stringify(data),
                errors
            })
        }
    }

    getEmploymentBenefit(data) {
        if (data !== this.state.employmentBenefit) {
            const errors = this.state.errors;
            errors.employmentBenefit = '';
            this.setState({
                employmentBenefit: JSON.stringify(data),
                errors
            })
        }
    }

    onLocationSelect(fieldName, location) {
        if (location) {
            const errors = this.state.errors;
            errors[fieldName] = '';
            this.setState({
                [fieldName]: location.label,
                errors
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

    writeError = (error) => {
        console.log(error)
        this.setState({
            errors: {
                ...this.state.errors,
                error
            }
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!this.state.title) {
            errors = { ...errors, title: 'Please write a job title.' }
        }
        if (!this.state.role) {
            errors = { ...errors, role: 'Please write a job role.' }
        }
        if (!this.state.jobCategory) {
            errors = { ...errors, jobCategory: 'Please select job category.' }
        }
        if (!this.state.jobCategory) {
            errors = { ...errors, jobCategory: 'Please select job category.' }
        }
        if ((this.props.jobType === 'general') && !this.state.industryCategory) {
            errors = { ...errors, industryCategory: 'Please select industry category.' }
        }
        if (!this.state.vacancy) {
            errors = { ...errors, vacancy: 'Please add vacancy.' }
        }
        if (!this.state.employmentLocation) {
            errors = { ...errors, employmentLocation: 'Please select location.' }
        }
        if (!this.state.deadline) {
            errors = { ...errors, deadline: 'Please select application deadline.' }
        }
        if (!this.state.employmentStatus) {
            errors = { ...errors, employmentStatus: 'Please select employment status.' }
        }
        if (!this.state.description) {
            errors = { ...errors, description: 'Please write job desciption.' }
        }
        if (!this.state.experience) {
            errors = { ...errors, experience: 'Please select experience' }
        }
        if (!this.state.education) {
            errors = { ...errors, education: 'Please select education' }
        }
        if (!this.state.nationality) {
            errors = { ...errors, nationality: 'Please select nationality' }
        }
        if (!this.state.salaryFrom) {
            errors = { ...errors, salaryFrom: 'Please select salary from' }
        }
        if (!this.state.salaryTo) {
            errors = { ...errors, salaryTo: 'Please select salary to' }
        }

        this.setState({ errors });
    }

    render() {

        const { title, role, jobCategory, industryCategory, vacancy, employmentStatus, deadline, employmentLocation, description, employmentSkills, photograph, videoUrl, experience, employmentLevel, education, majorSubject, location, nationality, gender, age, salaryFrom, salaryTo, otherBenefit, trainingCertification, requiredSkills, additionalRequirements, specialties, preferredArmy, hideCompanyName, hideCompanyAddress, hideCompanyBusiness, errors } = this.state;

        const jobDescriptionProps = {
            parentCallback: this.getJobDescription.bind(this),
            data: this.isJson(this.state.description) ? this.state.description : null,
            height: 310
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
            <form onSubmit={this.handelSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Job Information</h4>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Title</label>
                                    <input name="title" type="text" className={`form-control ${errors.title ? 'error' : ''}`} value={title} onChange={this.handleChange} />
                                    {errors.title && <div className="error-message">{errors.title}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Role</label>
                                    <input name="role" type="text" className={`form-control ${errors.role ? 'error' : ''}`} value={role} onChange={this.handleChange} />
                                    {errors.role && <div className="error-message">{errors.role}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Category</label>
                                    <Select
                                        instanceId="job_category"
                                        className={`react-select ${errors.jobCategory ? 'error' : ''}`}
                                        styles={style}
                                        name="job-category"
                                        isClearable
                                        options={functionalJobCategories}
                                        placeholder=""
                                        value={jobCategory}
                                        onChange={this.handleSelectChange.bind(this, 'jobCategory')} />
                                    {errors.jobCategory && <div className="error-message">{errors.jobCategory}</div>}
                                </div>
                            </div>
                            {(this.props.jobType === 'general') &&
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Company Industry Category</label>
                                        <Select
                                            instanceId="industry_category"
                                            className={`react-select ${errors.industryCategory ? 'error' : ''}`}
                                            styles={style}
                                            name="industry-category"
                                            isClearable
                                            options={industryCategories}
                                            placeholder=""
                                            value={industryCategory}
                                            onChange={this.handleSelectChange.bind(this, 'industryCategory')} />
                                        {errors.industryCategory && <div className="error-message">{errors.role}</div>}
                                    </div>
                                </div>
                            }
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>No of Vacancy</label>
                                    <input name="vacancy" type="text" className={`form-control ${errors.vacancy ? 'error' : ''}`} value={vacancy} onChange={this.handleChange} />
                                    {errors.vacancy && <div className="error-message">{errors.vacancy}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Employment Status</label>
                                    <select name="employmentStatus" className={`form-control ${errors.employmentStatus ? 'error' : ''}`} value={employmentStatus} onChange={this.handleChange}>
                                        <option>Full time</option>
                                        <option>Part time</option>
                                    </select>
                                    {errors.employmentStatus && <div className="error-message">{errors.employmentStatus}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Employment Location</label>
                                    <Geosuggest
                                        id="employer_location"
                                        placeholder=""
                                        inputClassName={`form-control ${errors.employmentLocation ? 'error' : ''}`}
                                        onSuggestSelect={this.onLocationSelect.bind(this, 'employmentLocation')} />
                                    {errors.employmentLocation && <div className="error-message">{errors.employmentLocation}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Application Deadline</label>
                                    <DatePicker
                                        className={`form-control ${errors.deadline ? 'error' : ''}`}
                                        selected={deadline}
                                        onChange={this.handleSelectChange.bind(this, 'deadline')} />
                                    {errors.deadline && <div className="error-message">{errors.deadline}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <div className={`rich-text ${errors.description ? 'error' : ''}`}>
                                        <RichText {...jobDescriptionProps} />
                                    </div>
                                    {errors.description && <div className="error-message">{errors.description}</div>}
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
                                            tagInputField: `form-control ${errors.employmentSkills ? 'error' : ''}`
                                        }} />
                                    {errors.employmentSkills && <div className="error-message">{errors.employmentSkills}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Enclose Photograph</label>
                                    <input type="file" className={`form-control ${errors.photograph ? 'error' : ''}`} />
                                    {errors.photograph && <div className="error-message">{errors.photograph}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Video URL</label>
                                    <input name="videoUrl" type="text" className={`form-control ${errors.videoUrl ? 'error' : ''}`} value={videoUrl} onChange={this.handleChange} />
                                    {errors.videoUrl && <div className="error-message">{errors.videoUrl}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h4>Candidate Requirement</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Year of Experience</label>
                                    <input type="number" name="experience" className={`form-control ${errors.experience ? 'error' : ''}`} value={experience} onChange={this.handleChange} />
                                    {errors.experience && <div className="error-message">{errors.experience}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Employment Level</label>
                                    <select name="employmentLevel" className={`form-control ${errors.employmentLevel ? 'error' : ''}`} value={employmentLevel} onChange={this.handleChange}>
                                        <option></option>
                                        <option>Entry Level</option>
                                        <option>Mid Level</option>
                                        <option>Top Level</option>
                                    </select>
                                    {errors.employmentLevel && <div className="error-message">{errors.employmentLevel}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Education (Last Degree)</label>
                                    <select name="education" className={`form-control ${errors.education ? 'error' : ''}`} value={education} onChange={this.handleChange}>
                                        <option></option>
                                        <option>SSC</option>
                                        <option>HSC</option>
                                        <option>Diploma</option>
                                        <option>Honours</option>
                                        <option>Masters</option>
                                    </select>
                                    {errors.education && <div className="error-message">{errors.education}</div>}
                                </div>
                            </div>
                            {(this.props.jobType === 'general') &&
                                <div className="col-sm-6">
                                    <div className="form-group select label">
                                        <label>Major subject</label>
                                        <select name="majorSubject" className={`form-control ${errors.majorSubject ? 'error' : ''}`} value={majorSubject} onChange={this.handleChange}>
                                            <option></option>
                                            <option>Accountings</option>
                                            <option>Finance</option>
                                            <option>Marketing</option>
                                        </select>
                                        {errors.majorSubject && <div className="error-message">{errors.majorSubject}</div>}
                                    </div>
                                </div>
                            }
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Location</label>
                                    <Geosuggest
                                        id="location"
                                        placeholder=""
                                        inputClassName={`form-control ${errors.location ? 'error' : ''}`}
                                        onSuggestSelect={this.onLocationSelect.bind(this, 'location')} />
                                    {errors.location && <div className="error-message">{errors.location}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Nationality</label>
                                    <select name="nationality" className={`form-control ${errors.nationality ? 'error' : ''}`} value={nationality} onChange={this.handleChange}>
                                        <option></option>
                                        {countries.map(country =>
                                            <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                                        )}
                                    </select>
                                    {errors.nationality && <div className="error-message">{errors.nationality}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group select label">
                                    <label>Gender</label>
                                    <select name="gender" className={`form-control ${errors.gender ? 'error' : ''}`} value={gender} onChange={this.handleChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    {errors.gender && <div className="error-message">{errors.gender}</div>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input name="age" type="text" className={`form-control ${errors.age ? 'error' : ''}`} value={age} onChange={this.handleChange} />
                                    {errors.age && <div className="error-message">{errors.age}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Salary Range</label>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input name="salaryFrom" type="text" className={`form-control ${errors.salaryFrom ? 'error' : ''}`} placeholder="From" value={salaryFrom} onChange={this.handleChange} />
                                            {errors.salaryFrom && <div className="error-message">{errors.salaryFrom}</div>}
                                        </div>
                                        <div className="col-sm-6">
                                            <input name="salaryTo" type="text" className={`form-control ${errors.salaryTo ? 'error' : ''}`} placeholder="To" value={salaryTo} onChange={this.handleChange} />
                                            {errors.salaryTo && <div className="error-message">{errors.salaryTo}</div>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {(this.props.jobType === 'general') &&
                                <>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Employment Compensation and other benefit</label>
                                            <div className={`rich-text ${errors.employmentBenefit ? 'error' : ''}`}>
                                                <RichText {...employmentBenefitProps} />
                                            </div>
                                            {errors.employmentBenefit && <div className="error-message">{errors.employmentBenefit}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Training and Certification</label>
                                            <input name="trainingCertification" type="text" className={`form-control ${errors.trainingCertification ? 'error' : ''}`} value={trainingCertification} onChange={this.handleChange} />
                                            {errors.trainingCertification && <div className="error-message">{errors.trainingCertification}</div>}
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
                                                    tagInputField: `form-control ${errors.requiredSkills ? 'error' : ''}`
                                                }} />
                                            {errors.requiredSkills && <div className="error-message">{errors.requiredSkills}</div>}
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Additional Requirement of employment</label>
                                    <div className={`rich-text ${errors.additionalRequirements ? 'error' : ''}`}>
                                        <RichText {...addRequirementProps} />
                                    </div>
                                    {errors.additionalRequirements && <div className="error-message">{errors.additionalRequirements}</div>}
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Specialties</label>
                                    <input name="specialties" type="text" className={`form-control ${errors.specialties ? 'error' : ''}`} value={specialties} onChange={this.handleChange} />
                                    {errors.specialties && <div className="error-message">{errors.specialties}</div>}
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
                    <div className="col-sm-12">
                        <h4>Company Information</h4>
                        <div className="form-group">
                            <input name="hideCompanyName" type="checkbox" id="hideCompanyName" className="mr-2" checked={hideCompanyName} onChange={this.handleChange} />
                            <label htmlFor="hideCompanyName">Hide Company Name</label>
                        </div>
                        <div className="form-group">
                            <input name="hideCompanyAddress" type="checkbox" id="hideCompanyAddress" className="mr-2" checked={hideCompanyAddress} onChange={this.handleChange} />
                            <label htmlFor="hideCompanyAddress">Hide Company Address</label>
                        </div>
                        <div className="form-group">
                            <input name="hideCompanyBusiness" type="checkbox" id="hideCompanyBusiness" className="mr-2" checked={hideCompanyBusiness} onChange={this.handleChange} />
                            <label htmlFor="hideCompanyBusiness">Hide Company Business</label>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <button className="btn btn-black mr-2">Save as Draft</button>
                    <button className="btn btn-default" type="submit">Publish</button>
                </div>
            </form>
        )
    }
}
export default JobForm;