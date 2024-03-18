import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'
import product from '../assets/product.png'
import aa from '../assets/bb.jpg'
import Footer from './Footer'


const ProductDetail = () => {
    return (
        <div>
            <NavBar />

            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src={product} className='w-100' />
                    </div>
                    <div className='col-lg-6'>
                        <p className='fs-3 fw-bold'> Iphone 15 ProMax</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, animi? Quibusdam dicta
                            saepe dolore qui enim, eaque temporibus necessitatibus eveniet suscipit, corporis asperiores natus voluptatem
                            Dignissimos, sint placeat!
                        </p>
                        
                    </div>
                </div>
                    <p className='fw-bold fs-2 mt-5'>Product Review</p>
                <div className='p-3 border border-primary mt-3 rounded-lg'>
                    <div className='d-flex'>
                        <img src={aa} alt='jjgj' width={100} id={style.profile} />
                        <div className='ml-3 mt-4'>
                            <small>John Doe</small><br />
                            <small>18 Aug 2023</small>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisiwcing elit. Asperiores commodi delectus voluptatibus laborum
                            nisi odio perspiciatis earum a adipisci minima aut minus eum architecto possimus culpa, perferendis ad quae rerum.
                        </p>
                    </div>
                </div>
                <div className='p-3 border border-primary mt-4 rounded-lg'>
                    <div className='d-flex'>
                        <img src={aa} alt='jjgj' width={100} id={style.profile} />
                        <div className='ml-3 mt-4'>
                            <small>John Doe</small><br />
                            <small>18 Aug 2023</small>
                        </div>
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

export default ProductDetail