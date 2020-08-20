import React, { useState } from 'react';
import { set } from 'js-cookie';

class BannerSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advanceSearch: false
        }
    }

    showAdavanceSearch = () => {
        this.setState({
            advanceSearch: true
        })
    }

    render() {
        return (
            <section className="home-banner">
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <h1>Employer?</h1>
                                <h2>Find Your <span>Talent</span></h2>
                                <form className="regular-form">
                                    <div className="form-group">
                                        <input type="text" name="search" placeholder="Categroy, Name, Skills" className="form-control" />
                                        <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
                                        <p onClick={this.showAdavanceSearch} className="advance-button">Advance Search</p>
                                    </div>
                                    <p className="are-you"><a href="#">Are you Hiring? Post a Job Now.</a></p>
                                </form>
                            </div>
                            <div className="col-sm-5">
                                <div className="banner-box">
                                    <a href="#" className="btn btn-default">Drop Your CV</a>
                                    <ul>
                                        <li><a href="#"><i className="flaticon-account"></i> Sign Up</a></li>
                                        <li><a href="#"><i className="flaticon-login"></i> Sign In</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <form className={this.state.advanceSearch ? 'advance' : ''}>
                                    <div className="row sm-gutters">
                                        <div className="col-sm-4">
                                            <div className="form-group select">
                                                <select name="category" placeholder="Category" className="form-control">
                                                    <option>Category</option>
                                                    <option>Account/Finance</option>
                                                    <option>Commercial/Supply Chain</option>
                                                    <option>Education/Training</option>
                                                    <option>Garments/Textile</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group select">
                                                <select name="industry" placeholder="Industry" className="form-control">
                                                    <option>Industry</option>
                                                    <option>Education</option>
                                                    <option>Real State/Developers</option>
                                                    <option>Information Technology</option>
                                                    <option>Garments/Textile</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group select">
                                                <select name="experience" placeholder="Experience" className="form-control">
                                                    <option>Experience</option>
                                                    <option>Less than one year</option>
                                                    <option>One to Two years</option>
                                                    <option>Three to Four years</option>
                                                    <option>Five to Six years</option>
                                                    <option>More then Six years</option>
                                                </select>
                                                <p onClick={this.showAdavanceSearch} className="advance-button">Advance Search</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advance-search">
                                        <div className="row sm-gutters">
                                            <div className="col-sm-4">
                                                <div className="form-group select">
                                                    <select name="age" placeholder="Age" className="form-control">
                                                        <option>Age</option>
                                                        <option>18 - 22 Years</option>
                                                        <option>23 - 27 Years</option>
                                                        <option>28 - 32 Years</option>
                                                        <option>33 - 37 Years</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group select">
                                                    <select name="education-level" placeholder="Industry" className="form-control">
                                                        <option>Education Level</option>
                                                        <option>Graduate</option>
                                                        <option>Post Graduate</option>
                                                        <option>Diploma</option>
                                                        <option>Doctorate Degree</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group select">
                                                    <select name="activity" placeholder="Activity" className="form-control">
                                                        <option>Activity</option>
                                                        <option>Active</option>
                                                        <option>Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="are-you"><a href="#">Are you Hiring? Post a Job Now.</a></p>
                                    </div>
                                    <div className="search-button">
                                        <button className="btn btn-default">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        )
    }
}
export default BannerSearch;