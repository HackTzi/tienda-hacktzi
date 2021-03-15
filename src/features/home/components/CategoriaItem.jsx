import React from 'react'
import './sass/CategoriaItem.scss'

function Item({icon, name}) {
    return (
        <a className="item" href='#'>
            <div className="item__circle" style={{
            backgroundImage: `url(${icon})`
        }}>
            </div>      
            <p className='item__name'>{name}</p>
        </a>
    )
}

export default Item
