import React from 'react'
import './sass/Hero.scss'
import womanImg from '../assets/Woman.svg'

function Hero({link}) {
    return (
        <section className="hero">
            <div className="hero__box-title">
                <h1>Compra tus productos favoritos de platzi</h1>
                <p>Comparte tu outfit con el #swagplatzi</p>
            </div>
            <a href={link} className="hero__button">VER OFERTAS</a>
            <ul className='hero__lista'>
                <li>Accesorios</li>
                <li>Hoddles</li>
                <li>Camisetas </li>
                <li>Y más</li>
            </ul>
            <div className="hero__rectangule"></div>
            <img src={womanImg} alt="" className='hero__woman-img'/>
        </section>
    )
}

export default Hero
