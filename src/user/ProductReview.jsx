import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'
import Footer from './Footer'


const ProductReview = () => {
    return (
        <div>
            <NavBar />

            <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center' style={{ marginTop: '2em' }}>Product Review</p>
            </header>

            <div className='container mt-5'>
                <div className='p-3 border border-primary mt-4'>
                    <div>
                        <small>John Doe</small><br />
                        <small>18 Aug 2023</small>
                    </div>
                    <div className='mt-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisiwcing elit. Asperiores commodi delectus voluptatibus laborum
                            nisi odio perspiciatis earum a adipisci minima aut minus eum architecto possimus culpa, perferendis ad quae rerum.
                        </p>
                    </div>
                </div>
                <div className='p-3 border border-primary mt-4'>
                    <div>
                        <small>John Doe</small><br />
                        <small>18 Aug 2023</small>
                    </div>
                    <div className='mt-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisiwcing elit. Asperiores commodi delectus voluptatibus laborum
                            nisi odio perspiciatis earum a adipisci minima aut minus eum architecto possimus culpa, perferendis ad quae rerum.
                        </p>
                    </div>
                </div>
                <div className='p-3 border border-primary mt-4 mb-5'>
                    <div>
                        <small>John Doe</small><br />
                        <small>18 Aug 2023</small>
                    </div>
                    <div className='mt-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisiwcing elit. Asperiores commodi delectus voluptatibus laborum
                            nisi odio perspiciatis earum a adipisci minima aut minus eum architecto possimus culpa, perferendis ad quae rerum.
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ProductReview