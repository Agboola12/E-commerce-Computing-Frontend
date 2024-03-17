import React from 'react'
import NavBar from './NavBar'
import style from '../styles/Style.module.css'
import aa from '../assets/bb.jpg'
import team from '../assets/aa.jpg'
import Footer from './Footer'

const AboutUs = () => {
    return (
        <div>
            <NavBar />

            <header id={style.head}>
                <p className='fw-bold fs-1 text-white text-center' style={{ marginTop: '2em' }}>About Us</p>
            </header>
            <div className='container bg-white p-5'>
                <div className='row mx-auto'>
                    <div className='col-lg-4 '>
                        <img src={aa} alt='jjgj' className='w-50 ' id={style.profile} />
                    </div>
                    <div className='col-8 '>
                        <h2>Founder</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum veritatis obcaecati libero laudantium ea, et voluptatibus
                            unde? Laboriosam rem velit, at mollitia neque quod culpa animi consequuntur amet maiores? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Corporis, labore asperiores! A molestiae magni quidem eos error impedit repellat ea! Dolorem aperiam ratione exercitationem quasi reprehenderit persp
                            iciatis fugiat impedit maiores consectetur. Voluptatem autem, et maxime magnam consectetur consequatur id, perferendis, laudantium minus expedita vit
                            ae minima earum eius ut atque quod rerum adipisci eveniet voluptas recusandae labore? Aliquid quos dolor quisquam repellendus ullam optio culpa plac
                            eat. Tempora eum sapiente inventore ipsum molestiae facilis, eligendi quam, quos, temporibus voluptatum dolor sint quia totam voluptas rem. Natu
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center mx-auto p-5' id={style.team}>
                <p className='fw-bold fs-3'>Our Team</p>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum veritatis obcaecati libero laudantium ea, et voluptatibus unde? La
                    boriosam rem velit, at mollitia neque quod culpa animi consequuntur amet maiores? Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Corporis, labore asperiores! A molestiae magni quidem eos error imp
                </p>
                <div className='row text-center mx-auto'>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25 ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25 ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                    <div className='col-lg-4'>
                        <img src={team} alt='jjgj' className='w-25  ' id={style.profile} /><br/>
                        <small className='fw-bold'>John Doe</small><br/>
                        <small>Team Member</small>
                    </div>
                </div>
            </div>

<Footer/>

        </div>
    )
}

export default AboutUs