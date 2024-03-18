import React from 'react';
import style from '../styles/Style.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleMobileClick = (mobile) => {
        window.location.href = `tel:${mobile}`;
    };

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className='container-fluid mx-auto text-center p-5' id={style.footer}>
            <div className='row '>
                <div className='col-lg-3'>
                    <p>
                <h6 className="text-medium text-uppercase text-white">Available</h6>
                        - 24/7 active
                    </p>
                </div>
                <div className='col-lg-3'>
                    <p>
                <h6 className="text-medium text-uppercase text-white">Find Us</h6>
                        103 North Loundon Street, <br />
                        Winchider, VA
                    </p>
                </div>
                <div className='col-lg-3'>
                <h6 className="text-medium text-uppercase text-white">Email Us</h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleEmailClick('amosunelijah01@gmail.com')}>amosunelijah01@gmail.com</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                <h6 className="text-medium text-uppercase text-white">Call Us</h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2347043985883')}>+2347043985883 </li>
                <h6 className="text-medium text-uppercase text-white mt-4">Whatsapp</h6>
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2348138739589')}>+2348138739589</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>© 2024 RCCG Victory Center Luton. All Rights Reserved</div>

                        <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
                            <li><Link to="#" className="text-white"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#" className="text-white"><i className="fa fa-instagram"></i></Link></li>
                            <li><Link to="#" className="text-white"><i className="fa fa-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
