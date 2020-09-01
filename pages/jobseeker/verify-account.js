import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';



class CandidateRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                <div className="section-padding section-bg register-page candidate">
                    <div className="container">
                        <div className="registration-form verify-account">
                            <h1>স্পেশিয়াল স্কিল অ্যাকাউন্ট</h1>
                            <p>1786859944 নম্বরে একটি কোড পাঠানো হয়েছে, অনুগ্রহ করে কোডটি টাইপ করুন।</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="code" placeholder="কোড" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default">যাচাই করুন</button>
                                </div>
                            </form>
                            <p className="mt-4">কোডটি পুনরায় পাঠাতে <a href="#">ক্লিক</a> করুন।</p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default CandidateRegistration;