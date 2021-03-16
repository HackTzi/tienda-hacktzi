import React from 'react'
import './sass/OfertaItem.scss'
import loveIt from '../assets/LoveIt.svg'


function OfertaItem({imgItem, titleText, descripText, price, descuento, link}) {
    
    const lastPrice = (p, d) => {
        return (p.price * (1 - (d.descuento / 100)))
    }

    return (
        <section href="/" className="oferta">
            <a href={link} className="oferta__box-img">
            <img src={imgItem} alt=''/>
            </a>
            <div className="oferta__description">
                <a href={link} className="oferta__description__title-text">{titleText}</a>
                <p className="oferta__description__descrip-text">{descripText}</p>
                <p className="oferta__description__price">&#36;{lastPrice({price},{descuento})}</p>
                <p className="oferta__description__last-price">&#36;{price}</p>
                <p className="oferta__description__descuento">-{descuento}&#37;</p>
                <img src={loveIt} href='' className='oferta__description__like'></img>
            </div>
        </section>
    )
}

export default OfertaItem
