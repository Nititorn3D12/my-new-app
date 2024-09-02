import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีคับ</h3>
                <p className="title text-justify mt-4 mb-4">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
                <h4 className="text-success">จาก KU คาเฟ่</h4>
                </div>
                <Footer company ="KU" email ="sakawrat.w@ku.th" />
        </div>
    );
};

export default About;