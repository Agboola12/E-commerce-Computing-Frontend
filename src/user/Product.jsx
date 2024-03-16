import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'


const Product = () => {
  return (
    <div>
        <NavBar/>

        <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center'>About Us</p>
            </header>
    </div>
  )
}

export default Product