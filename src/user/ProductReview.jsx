import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'


const ProductReview = () => {
  return (
    <div>
        <NavBar/>

        <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center' style={{ marginTop: '2em' }}>Product Review</p>
            </header>
    </div>
  )
}

export default ProductReview