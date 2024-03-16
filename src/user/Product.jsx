import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'
import product from '../assets/product.png'


const Product = () => {
    return (
        <div>
            <NavBar />

            <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center'>About Us</p>
            </header>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='shadow-sm bg-white'>
                            <img src={product} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Product