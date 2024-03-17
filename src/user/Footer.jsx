import React from 'react';
import style from '../styles/Style.module.css';

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
                        <i className='fa fa-clock'></i><br />
                        - 24/7 active
                    </p>
                </div>
                <div className='col-lg-3'>
                    <p>
                        <i className='fa fa-location-dot'></i><br />
                        103 North Loundon Street, <br />
                        Winchider, VA
                    </p>
                </div>
                <div className='col-lg-3'>
                    <h6 className="text-medium text-uppercase text-white"><i className='fa fa-envelope'></i></h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleEmailClick('admin@victorycenter.org.uk')}>admin@victorycenter.org.uk</li>
                        <li className='text-white text-decoration-none' onClick={() => handleEmailClick('pastordoherty@victorycenter.org.uk')}>pastordoherty@victorycenter.org.uk</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h6 className="text-medium text-uppercase text-white"><i className='fa fa-phone'></i></h6>
                    <ul className="list-unstyled">
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2349070684164')}>+2349070684164</li>
                        <li className='text-white text-decoration-none' onClick={() => handleMobileClick('+2349070684164')}>+2349070684164</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
