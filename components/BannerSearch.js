import React, { useState } from 'react';
import Link from 'next/link';
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
                <div className={this.state.advanceSearch ? 'banner-content advance' : 'banner-content'}>
                    <div className="container">
                        <div className="row">
                            <div className={this.state.advanceSearch ? 'col-sm-12' : 'col-sm-12'}>
                                <h1>Employer?</h1>
                                <h2>Find Your Next <span>Talent</span></h2>
                                <form className="banner-form">
                                    {this.state.advanceSearch &&
                                        <button type="button" className="close-advance" onClick={() => { this.setState({ advanceSearch: false }) }}><i className="flaticon-remove"></i></button>
                                    }
                                    <div className="row sm-gutters">
                                        <div className={this.state.advanceSearch ? 'col-sm-4' : 'col-sm-7'} style={{ transition: .5 + 's' }}>
                                            <div className="form-group">
                                                <input type="text" name="search" placeholder="Keywords, Profession or Name" className="form-control" />
                                                {!this.state.advanceSearch && <button type="submit"><i className="flaticon-magnifying-glass"></i></button>}
                                                {!this.state.advanceSearch && <p onClick={this.showAdavanceSearch} className="advance-button">Advance Search</p>}
                                            </div>
                                            <p className="are-you"><Link href="/employer/register"><a>Are you Hiring? Post a Job Now.</a></Link></p>
                                        </div>
                                        {this.state.advanceSearch &&
                                            <>
                                                <div className="col-sm-4 slide-up">
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
                                                <div className="col-sm-4 slide-up">
                                                    <div className="form-group select">
                                                        <select name="experience" placeholder="Experience" className="form-control">
                                                            <option>Experience</option>
                                                            <option>Less than one year</option>
                                                            <option>One to Two years</option>
                                                            <option>Three to Four years</option>
                                                            <option>Five to Six years</option>
                                                            <option>More then Six years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-green main-button"><span>Search</span></button>
                                            </>
                                        }

                                        <div className="banner-box fade-in">
                                            <Link href="/jobseeker/register"><a className="btn btn-default">Drop Your CV</a></Link>
                                            <ul>
                                                <li><Link href="/jobseeker/register"><a><i className="flaticon-account"></i> Sign Up</a></Link></li>
                                                <li><Link href="/jobseeker/login"><a><i className="flaticon-login"></i> Sign In</a></Link></li>
                                            </ul>
                                        </div>

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