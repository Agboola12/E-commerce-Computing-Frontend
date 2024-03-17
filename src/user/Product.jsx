import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'
import product from '../assets/product.png'
import Footer from './Footer'


const Product = () => {
    return (
        <div>
            <NavBar />

            <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center' style={{marginTop: '2em'}}>About Us</p>
            </header>

            <div className='container mt-5'>
                <div className='row text-center mb-5 '>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4" style={{backgroundColor:'#1C7C68'}}>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{backgroundColor:'#1C7C68'}}>View Button</button>

                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{backgroundColor:'#1C7C68'}}>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className="btn btn-main-1 w-100 text-medium text-white fw-bold fs-6 rounded-0 py-3 px-4 mb-4 rounded-lg" style={{backgroundColor:'#1C7C68'}}>View Button</button>

                        </div>
                    </div>

                </div>
                <div className='row text-center mb-5 '>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className='btn btn-success text-white mb-3'>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className='btn btn-success text-white mb-3'>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className='btn btn-success text-white mb-3'>View Button</button>
                        </div>
                    </div>
                    <div className='col-lg-3 shadow bg-white rounded-sm  '>
                        <div className=''>
                            <img src={product} className='w-100' />
                            <p className='text-primary fw-bold mt-2'>Dell</p>
                            <p className='fw-bold'>$45.00</p>
                            <button className='btn btn-success text-white mb-3'>View Button</button>
                        </div>
                    </div>

                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Product