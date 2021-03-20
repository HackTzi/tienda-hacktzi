import React from 'react'
import './sass/BuyKitComplete.scss'
import Kit1 from '../assets/kit1.png'
import Kit2 from '../assets/kit2.png'

function BuyKitComplete({fistKitLink, secondKitLink, secondKitImg}) {
    return (
        <div className="kits">
            <header className="title">Compra Kits Completos</header>
            {/*Rombos de colores*/}
            <div className="rombo1"></div>
            <div className="rombo2"></div>
            <div className="rombo3"></div>
            <div className="rombo4"></div>
            <div className="rombo5"></div>
            <div className="rombo6"></div>
            <div className="rombo7"></div>
            <div className="rombo8"></div>
            {/*---------------------------*/}

            <div className="kit-item one">
                <img src={Kit1} alt="" />
                <a href={fistKitLink} className="kit-item__btn-first">Comprar ahora</a>
            </div>
            <div className="kit-item two">
                <img src={Kit2} alt="" />
                <img src={secondKitImg} alt="" className='kit-item__exibicion'/>
                <a href={secondKitLink} className="kit-item__btn-second">Comprar ahora</a>
            </div>
        </div>
    )
}

export default BuyKitComplete
