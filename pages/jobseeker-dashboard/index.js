import React from 'react';
import JobseekerLayout from '../../components/JobseekerLayout';

import CountUp from 'react-countup';

import Done from '@material-ui/icons/DoneAll';
import ListAlt from '@material-ui/icons/ListAlt';
import Flag from '@material-ui/icons/FlagOutlined';
import Timer from '@material-ui/icons/TimerOutlined';
import Map from '@material-ui/icons/MapOutlined';
import Visibility from '@material-ui/icons/Visibility';
import FaceOutlined from '@material-ui/icons/FaceOutlined';
import RateReviewOutlined from '@material-ui/icons/RateReviewOutlined';
import HowToRegOutlined from '@material-ui/icons/HowToRegOutlined';

const JobseekerDashboard = (props) => {
    return (
        <JobseekerLayout>
            <div className="row">
                <div className="col-sm-8">
                    <div className="content-item">
                        <h2 className="title">Applied Jobs</h2>
                        <div className="table-responsive">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th>Job Title</th>
                                        <th>Job Type</th>
                                        <th>Status</th>
                                        <th>Applied on</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-warning p-2">Part Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-warning p-2">Part Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content-item profile-summary">
                        <div className="chart"><span><CountUp end={80} />%</span></div>
                        <div className="chart-text">Resume Completeness</div>
                        <ul>
                            <li>Resume Created On <span>23-03-2020</span></li>
                            <li>Resume Updated On <span>23-03-2020</span></li>
                        </ul>
                    </div>
                    <div className="content-item">
                        <h2 className="title">Resume Summary</h2>
                        <div className="table-responsive">
                            <table className="table border text-center">
                                <thead>
                                    <tr>
                                        <th><span className="text-info">Viewed</span></th>
                                        <th><span className="text-warning">Shorlisted</span></th>
                                        <th><span className="text-secondary">Interviewed</span></th>
                                        <th><span className="text-success">Hired</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>8</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Recommended Jobs</h2>
                        <div className="table-responsive">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th>Job Title</th>
                                        <th>Job Type</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25-09-2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Referred Jobs</h2>
                        <div className="table-responsive">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th>Job Title</th>
                                        <th>Job Type</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                            <p>ABC Company</p>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Transection History</h2>
                        <div className="table-responsive">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Resume Template</strong></td>
                                        <td>$200</td>
                                        <td>25 Sep 2020</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Career Course</strong></td>
                                        <td>$300</td>
                                        <td>05 May 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-item start-job">
                <h3>When would you like to start a new job?</h3>
                <ul>
                    <li>As soon as possible</li>
                    <li>1 - 4 Months</li>
                    <li>4 - 12 Months</li>
                    <li className="active">I will willingly wait for the right job</li>
                </ul>
                <p>Your answer helps determine when we contact you about jobs. Your career interests are confidential</p>
            </div>
        </JobseekerLayout>
    )
}
export default JobseekerDashboard;