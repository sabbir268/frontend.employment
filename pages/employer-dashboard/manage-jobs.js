import React from 'react';
import EmployerLayout from '../../components/EmployerLayout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const EmployerJobList = (props) => {
    return (
        <EmployerLayout>
            <div className="employer-job-list">
                <h3>Manage Jobs</h3>
                <div className="table-responsive">
                    <table className="table border">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Job Type</th>
                                <th>Applications</th>
                                <th>Status</th>
                                <th>Deadline</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Computer Operator</h4>
                                    <p className="mb-0">IT and Telecommunication</p>
                                </td>
                                <td><span className="badge badge-warning p-2">Part Time</span></td>
                                <td>25 <a href="#">(Manage)</a></td>
                                <td>Active</td>
                                <td>25-09-2020</td>
                                <td>
                                    <button className="btn"><FontAwesomeIcon icon={faEye} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Computer Operator</h4>
                                    <p className="mb-0">IT and Telecommunication</p>
                                </td>
                                <td><span className="badge badge-info p-2">Full Time</span></td>
                                <td>25 <a href="#">(Manage)</a></td>
                                <td>Active</td>
                                <td>25-09-2020</td>
                                <td>
                                    <button className="btn"><FontAwesomeIcon icon={faEye} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Computer Operator</h4>
                                    <p className="mb-0">IT and Telecommunication</p>
                                </td>
                                <td><span className="badge badge-info p-2">Full Time</span></td>
                                <td>25 <a href="#">(Manage)</a></td>
                                <td>Active</td>
                                <td>25-09-2020</td>
                                <td>
                                    <button className="btn"><FontAwesomeIcon icon={faEye} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Computer Operator</h4>
                                    <p className="mb-0">IT and Telecommunication</p>
                                </td>
                                <td><span className="badge badge-info p-2">Full Time</span></td>
                                <td>25 <a href="#">(Manage)</a></td>
                                <td>Active</td>
                                <td>25-09-2020</td>
                                <td>
                                    <button className="btn"><FontAwesomeIcon icon={faEye} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>Computer Operator</h4>
                                    <p className="mb-0">IT and Telecommunication</p>
                                </td>
                                <td><span className="badge badge-info p-2">Full Time</span></td>
                                <td>25 <a href="#">(Manage)</a></td>
                                <td>Active</td>
                                <td>25-09-2020</td>
                                <td>
                                    <button className="btn"><FontAwesomeIcon icon={faEye} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                    <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <ul>
                        <li><a href="#">Prev</a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </EmployerLayout>
    )
}
export default EmployerJobList;