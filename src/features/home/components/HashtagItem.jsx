import React from 'react'
import './sass/HashtagItem.scss'

function HashtagItem({link, imgHashtag}) {
    return (
        <a href={link} className='box-img'>
            <img src={imgHashtag} alt=""/>
        </a>
    )
}

export default HashtagItem
