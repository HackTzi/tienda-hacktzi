import React from 'react'
import './sass/socialMediaItem.scss'

function SocialMediaItem({socialMediaIcon, socialMediaLink, text}) {
    return (
        <div className='box'>
            <a href={socialMediaLink} className='box__item'>
                <img src={socialMediaIcon} alt="" className='box__item__icon'/>
                <p>{text}</p>
            </a>
        </div>
    )
}

export default SocialMediaItem
