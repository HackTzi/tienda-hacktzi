import React from 'react'
import './sass/Cards.scss'

function Cards({onboardinImg, title, desc}) {
    return (
        <div className='contenedor'>
            <div className="contenedor__principal-img">
                <img src={onboardinImg}/>
            </div>
            <h2 className='contenedor__title'>{title}</h2>
            <p className='contenedor__desc'>{desc}</p>
        </div>
    )
}

export default Cards
