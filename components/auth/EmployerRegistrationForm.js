import React from 'react';

class EmployerRegistrationForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            company_name: "",
        }
    }

    render() {
        return (
            <form>
                <h4>Company Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="company_name" placeholder="Company Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="company_location" placeholder="Company Location" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group select">
                            <select name="type" className="form-control">
                                <option>Company Type</option>
                                <option>Industry</option>
                                <option>Education</option>
                                <option>Real State/Developers</option>
                                <option>Information Technology</option>
                                <option>Garments/Textile</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea name="description" rows="6" placeholder="Company Description" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="trade_license" placeholder="Business/ Trade License No" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="tin_no" placeholder="Business BIN/ TIN No" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="rl_no" placeholder="RL No (Only for Recruiting Agency)" className="form-control" />
                        </div>
                    </div>
                </div>
                
                <h4 className="mt-3">Contact Person's Information</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Contact person’s Name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="designation" placeholder="Contact person’s Designation" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="text" name="numbar" placeholder="Contact Number" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email Address" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input type="password" name="retype_password" placeholder="Retype Password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <input type="text" name="how" placeholder="How did you know about Employment" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div><input type="checkbox" id="terms" /> <label htmlFor="terms">I agree to employment.com.bd Terms of use. <a href="#">Terms & Conditions</a></label></div>
                    <div><input type="checkbox" id="subscribe" /> <label htmlFor="subscribe">Pricing policy of Employment Recruitment service.</label></div>
                </div>
                <div className="captcha">captcha here</div>
                <div className="text-right">
                    <button className="btn btn-default">Register</button>
                </div>
            </form>
        )
    }
}
export default EmployerRegistrationForm;