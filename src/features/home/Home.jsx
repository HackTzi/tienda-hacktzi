import React from 'react'
import Hero from './components/Hero'
import './sass/Home.scss'
import CategoriaItem from './components/CategoriaItem'
import MugIcon from './assets/mug-icon.png'
import CamisaIcon from './assets/camisa-icon.png'
import MaskIcon from './assets/mask-icon.png'
import PlusIcon from './assets/plus-icon.png'
import OfertaItem from './components/OfertaItem'
import Camiseta from './assets/camiseta.png'
import Mug from './assets/mug.png'
import Footer from './components/Footer'

function Home() {
    return (
        <div className="home">
            {/*Section Hero*/}
            <Hero/>

            {/*Separete Line*/}
            <hr/>

            {/*Section featured category*/}
        
            <div className="home__categorias">
                <p className="title">Categorias Destacadas</p>
                <div className="home__categorias__items">
                    <CategoriaItem 
                        icon={MugIcon} 
                        name='Mugs'
                    />
                    <CategoriaItem 
                        icon={CamisaIcon} 
                        name='Camisa'
                    />
                    <CategoriaItem 
                        icon={MaskIcon} 
                        name='Masks'
                    />
                    <CategoriaItem 
                        icon={PlusIcon} 
                        name='Ver más'
                    />
                
                </div>
            </div>

            {/*Separete Line*/}
            <hr/>

            {/*Section featured category*/}
            <div className="home__ofertas">

                <p className="title">Ofertas del día</p>

                <div className="home__ofertas__relampago">
                    <p className="text">Ofertas relámpago</p>
                    <p className="text">Termina en: </p>
                </div>

                <div className="home__ofertas__items">        
                    <OfertaItem 
                        imgItem={Camiseta}
                        titleText='Camisetas Platzi Conft'
                        descripText='Camiseta'
                        price='39.900'
                        descuento='20'
                    />

                    <OfertaItem 
                        imgItem={Mug}
                        titleText='Mug Platzi - Nunca pares de aprender'
                        descripText='Mug'
                        price='29.900'
                        descuento='20'
                    />

                    <OfertaItem 
                        imgItem={Camiseta}
                        titleText='Camisetas Platzi Conft'
                        descripText='Camiseta'
                        price='39.900'
                        descuento='20'
                    />

                    <OfertaItem 
                        imgItem={Mug}
                        titleText='Mug Platzi - Nunca pares de aprender'
                        descripText='Mug'
                        price='29.900'
                        descuento='20'
                    />

                    <OfertaItem 
                        imgItem={Camiseta}
                        titleText='Camisetas Platzi Conft'
                        descripText='Camiseta'
                        price='39.900'
                        descuento='20'
                    />

                    <OfertaItem 
                        imgItem={Mug}
                        titleText='Mug Platzi - Nunca pares de aprender'
                        descripText='Mug'
                        price='29.900'
                        descuento='20'
                    />
                </div>

            </div>

            {/*Footer*/}
            <Footer/>

        </div>
    )
}

export default Home
