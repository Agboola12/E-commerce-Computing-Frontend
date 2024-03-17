import React from 'react'
import style from '../styles/Style.module.css'


const Footer = () => {
  return (
    
                    <div className='container-fluid mx-auto text-center p-5' id={style.footer}>
                <div className='row '>
                    <div className='col-lg-4'>
                        <p>
                            <i className='fa fa-time'></i><br />
                            -24/7 active

                        </p>
                    </div>
                    <div className='col-lg-4'>
                        <p>
                            <i className='fa fa-location-dot'></i><br />
                            103 North Loundon Street, <br />
                            Winchider, VA
                        </p>
                    </div>
                    <div className='col-lg-4'>
                        <p>
                            Help<br/>
                            103 North Loundon Street, <br />
                            Winchider, VA
                        </p>
                    </div>

                </div>
            </div>
    
  )
}

export default Footer