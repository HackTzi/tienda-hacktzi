import React from 'react'
import './sass/OfertaItem.scss'
import loveIt from '../assets/LoveIt.svg'


function OfertaItem({imgItem, titleText, descripText, price, descuento}) {
    
    const lastPrice = (p, d) => {
        return (p.price * (1 - (d.descuento / 100)))
    }

    return (
        <div className="oferta">
            <div className="oferta__box-img">
            <img src={imgItem} alt=''/>
            </div>
            <div className="oferta__description">
                <p className="oferta__description__title-text">{titleText}</p>
                <p className="oferta__description__descrip-text">{descripText}</p>
                <p className="oferta__description__price">&#36;{lastPrice({price},{descuento})}</p>
                <p className="oferta__description__last-price">&#36;{price}</p>
                <p className="oferta__description__descuento">-{descuento}&#37;</p>
                <img src={loveIt} href='' className='oferta__description__like'></img>
            </div>
        </div>
    )
}

export default OfertaItem
