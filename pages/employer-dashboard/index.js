import React from 'react';
import EmployerLayout from '../../components/EmployerLayout';

import Done from '@material-ui/icons/DoneAll';
import ListAlt from '@material-ui/icons/ListAlt';
import Flag from '@material-ui/icons/FlagOutlined';
import Timer from '@material-ui/icons/TimerOutlined';
import Map from '@material-ui/icons/MapOutlined';
import Visibility from '@material-ui/icons/Visibility';
import FaceOutlined from '@material-ui/icons/FaceOutlined';
import RateReviewOutlined from '@material-ui/icons/RateReviewOutlined';
import HowToRegOutlined from '@material-ui/icons/HowToRegOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';


const EmployerDashboard = (props) => {
    return (
        <EmployerLayout>
            <div className="row">
                <div className="col">
                    <div className="content-item summery-item active">
                        <div className="icon">
                            <Done />
                        </div>
                        <div className="content">
                            <h2>15</h2>
                            <p>Active Jobs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-item summery-item warning">
                        <div className="icon">
                            <Flag />
                        </div>
                        <div className="content">
                            <h2>05</h2>
                            <p>Pending Jobs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-item summery-item danger">
                        <div className="icon">
                            <Timer />
                        </div>
                        <div className="content">
                            <h2>50</h2>
                            <p>Expired Jobs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-item summery-item drafted">
                        <div className="icon">
                            <ListAlt />
                        </div>
                        <div className="content">
                            <h2>10</h2>
                            <p>Drafted Jobs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="content-item summery-item">
                        <div className="icon">
                            <Map />
                        </div>
                        <div className="content">
                            <h2>105</h2>
                            <p>Total Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-7">
                    <div className="content-item">
                        <h2 className="title">Latest Jobs</h2>
                        <div className="table-responsive">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th>Job Title</th>
                                        <th>Job Type</th>
                                        <th>Applications</th>
                                        <th>Status</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                        </td>
                                        <td><span className="badge badge-warning p-2">Part Time</span></td>
                                        <td>25 <a href="#">(Manage)</a></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 <a href="#">(Manage)</a></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 <a href="#">(Manage)</a></td>
                                        <td className="drafted">Drafted</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                        </td>
                                        <td><span className="badge badge-warning p-2">Part Time</span></td>
                                        <td>25 <a href="#">(Manage)</a></td>
                                        <td className="active">Active</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Computer Operator</h4>
                                        </td>
                                        <td><span className="badge badge-info p-2">Full Time</span></td>
                                        <td>25 <a href="#">(Manage)</a></td>
                                        <td className="pending">Pending</td>
                                        <td>25-09-2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="content-item">
                        <h2 className="title">Activity Logs</h2>
                        <div className="activity-logs">
                            <div className="log-item">
                                <div className="icon"><FaceOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Logged in</strong> from a computer using google chrome.</div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><RateReviewOutlined /></div>
                                <div className="date">14 Jun 2020 at 15:18:43</div>
                                <div className="detail">Posted a new <strong>Job</strong></div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><HowToRegOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Changed Password</strong> from dhaka using google chrome.</div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><RateReviewOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Drafted</strong> a job.</div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><FaceOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Logged in</strong> from a computer using google chrome.</div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><RateReviewOutlined /></div>
                                <div className="date">14 Jun 2020 at 15:18:43</div>
                                <div className="detail">Posted a new <strong>Job</strong></div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><HowToRegOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Changed Password</strong> from dhaka using google chrome.</div>
                            </div>
                            <div className="log-item">
                                <div className="icon"><RateReviewOutlined /></div>
                                <div className="date">14 May 2020 at 15:18:43</div>
                                <div className="detail"><strong>Drafted</strong> a job.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Candidates With Experience</h2>
                        <ul className="list-graphs">
                            <li>
                                <div className="name"><span>20</span>10 to 15 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '90%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>15</span>8 to 10 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '70%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>10</span>5 to 8 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '60%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>8</span>3 to 5 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '40%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>5</span> 2 to 3 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '30%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>2</span> 1 to 2 years of experience</div>
                                <div className="bar"><div className="bar-inner" style={{width: '10%'}}></div></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Candidates Appeared In</h2>
                        <ul className="list-graphs green">
                            <li>
                                <div className="name"><span>20</span>Bangladesh University of Engineering and Technology</div>
                                <div className="bar"><div className="bar-inner" style={{width: '90%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>10</span>University of Dhaka</div>
                                <div className="bar"><div className="bar-inner" style={{width: '80%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>8</span>Jahangirnagar University</div>
                                <div className="bar"><div className="bar-inner" style={{width: '50%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>5</span>Brack University</div>
                                <div className="bar"><div className="bar-inner" style={{width: '30%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>3</span>North South University</div>
                                <div className="bar"><div className="bar-inner" style={{width: '20%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>1</span>National University</div>
                                <div className="bar"><div className="bar-inner" style={{width: '10%'}}></div></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content-item">
                        <h2 className="title">Candidates Have Degree On</h2>
                        <ul className="list-graphs pink">
                            <li>
                                <div className="name"><span>20</span> Computer Engineering</div>
                                <div className="bar"><div className="bar-inner" style={{width: '90%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>16</span> Physical Science</div>
                                <div className="bar"><div className="bar-inner" style={{width: '80%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>10</span> Computer Science</div>
                                <div className="bar"><div className="bar-inner" style={{width: '50%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>5</span> Finance, General</div>
                                <div className="bar"><div className="bar-inner" style={{width: '30%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>2</span> Mathematics</div>
                                <div className="bar"><div className="bar-inner" style={{width: '20%'}}></div></div>
                            </li>
                            <li>
                                <div className="name"><span>1</span> Business Studies</div>
                                <div className="bar"><div className="bar-inner" style={{width: '10%'}}></div></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </EmployerLayout>
    )
}
export default EmployerDashboard;