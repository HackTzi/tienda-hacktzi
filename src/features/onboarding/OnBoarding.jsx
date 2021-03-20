import React from 'react'
import Cards from './components/Cards'
import './OnBoarding.scss'
import logo from './assets/logo-platzi.svg'
import obImg1 from './assets/onboardingImg1.png';
import obImg2 from './assets/onboardingImg2.png'
import obImg3 from './assets/onboardingImg3.png'
import Carousel from 'react-elastic-carousel'

function OnBoarding() {
    return (
        <div className='onboarding'>
            <img src={logo} alt="" className='onboarding__logo'/>
            <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={5000} transitionMs={1000}>
                <Cards
                    onboardinImg={obImg1}
                    title = 'PlatziStore ha llegado'
                    desc = 'Compra tus productos favoritos de platzi desde la comodida de tu casa'
                />
                <Cards
                    onboardinImg={obImg2}
                    title = 'Más que una tienda'
                    desc = 'Pódras interactuar con otros compradores, ganar insignias y compartir tus outfits'
                />
                <Cards
                    onboardinImg={obImg3}
                    title = 'Gana premios'
                    desc = 'Participando en la comunidad ganaras premios y descuentos especiales en la tienda.'
                />
            </Carousel>
            <div className='onboarding__btn'>Comienza ahora</div>

        </div>
    )
}

export default OnBoarding
