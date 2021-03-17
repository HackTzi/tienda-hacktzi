import React, {useEffect, useRef,useState} from 'react'
//Sección Hero
import Hero from './components/Hero'
import './sass/Home.scss'
//Sección Categorias Destacadas
import CategoriaItem from './components/CategoriaItem'
import MugIcon from './assets/mug-icon.png'
import CamisaIcon from './assets/camisa-icon.png'
import MaskIcon from './assets/mask-icon.png'
import PlusIcon from './assets/plus-icon.png'

//Sección Ofertas del día
import OfertaItem from './components/OfertaItem'
import Camiseta from './assets/camiseta.png'
import Mug from './assets/mug.png'
/*Temporizador*/

/*------Carrusel-----*/
import Carousel from 'react-elastic-carousel'

//Sección Hashtag
import imgHashtagPrincipal from './assets/imgHashtagPrincipal.png'
import arrow from './assets/arrow.svg'
import HashtagItem from './components/HashtagItem'
import imgHashtag1 from './assets/imgHashtag1.png'
import imgHashtag2 from './assets/imgHashtag2.png'

//Social media
import SocialMediaItem from './components/socialMediaItem'
import iconYou from './assets/social-media/youtube.svg'
import iconFace from './assets/social-media/facebook.svg'
import iconInsta from './assets/social-media/insta.svg'
import iconTiktok from './assets/social-media/tiktok.svg'
import iconTwitter from './assets/social-media/twitter.svg'
import iconLinkedin from './assets/social-media/linkedin.svg'
import iconSpotify from './assets/social-media/spotify.svg'



//Sección Footer
import Footer from './components/Footer'

function Home() {

    //variable para hacer responsive el carrusel
    let breakPoint = [
        { width: 200, itemsToShow: 1 },
        { width: 300, itemsToShow: 2},
        { width: 350, itemsToShow: 2.5},
        { width: 500, itemsToShow: 3.5},
        { width: 560, itemsToShow: 4}
    ]

    //Temporizador
    const [timerDay, setIntervalDay] = useState(0);
    const [timerHour, setIntervalHour] = useState(0);
    const [timerMinute, setIntervalMinute] = useState(0);
    const [timerSecond, setIntervalSecond] = useState(0);

    let interval = useRef();
    //function temporizador
    function temporizador(){
        const destino = new Date('mar 31, 2021 00:00:00').getTime();
        interval = setInterval(() => {
            let now = new Date().getTime();
            let gap = destino - now; 

            let second = 1000; 
            let minute = second * 60;
            let hour = minute * 60;
            let day = hour * 24;

            const d = Math.floor(gap / day);
            const h = Math.floor(gap % day/ hour)
            const m = Math.floor(gap % hour/ minute)
            const s = Math.floor(gap % minute/ second)

            if(gap < 0){
                //Stop
                clearInterval(interval)
            }else{
                //Continue
                setIntervalDay(d)
                setIntervalHour(h)
                setIntervalMinute(m)
                setIntervalSecond(s)
            }
        }, 1000);
    }


    //Variable para establecer el hashtag
    const hashtag = '#PlATZISWAG';

    useEffect(() => {
        temporizador();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <div className="home">

            {/*------------------Section Hero--------------*/}
            <Hero link='/'/>

            {/*Seccion -----------Categorias destacadas------------*/}
        
            <section className="home__categorias">
                <hr/>
                <header className="title">Categorias Destacadas</header>
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
            </section>

            

            {/*Section ----------Ofertas del día------------*/}

            <section className="home__ofertas">
                {/*Separete Line*/}
                <hr/>
                <header className="title">Ofertas del día</header>

                <div className="home__ofertas__relampago">
                    <p className='home__ofertas__relampago__text'>Ofertas relámpago</p>

                    <div className='home__ofertas__relampago__temporizador'>
                        <p>Termina en:</p> 
                        <span className="hours">{timerHour}</span>
                        <span className="minutes">{timerMinute}</span>
                        <span className="seconds">{timerSecond}</span>
                    </div>
                </div>

                <div className="home__ofertas__items">  
                    <Carousel breakPoints={breakPoint}>
                        <OfertaItem 
                            link={''}
                            imgItem={Camiseta}
                            titleText='Camisetas Platzi Conft'
                            descripText='Camiseta'
                            price='39.900'
                            descuento='20'
                        />

                        <OfertaItem 
                            link={''}
                            imgItem={Mug}
                            titleText='Mug Platzi - Nunca pares de aprender'
                            descripText='Mug'
                            price='29.900'
                            descuento='20'
                        />

                        <OfertaItem 
                            link={''} 
                            imgItem={Camiseta}
                            titleText='Camisetas Platzi Conft'
                            descripText='Camiseta'
                            price='39.900'
                            descuento='20'
                        />

                        <OfertaItem 
                            link={''}
                            imgItem={Mug}
                            titleText='Mug Platzi - Nunca pares de aprender'
                            descripText='Mug'
                            price='29.900'
                            descuento='20'
                        />

                        <OfertaItem 
                            link={''}
                            imgItem={Camiseta}
                            titleText='Camisetas Platzi Conft'
                            descripText='Camiseta'
                            price='39.900'
                            descuento='20'
                        />

                        <OfertaItem 
                            link={''}
                            imgItem={Mug}
                            titleText='Mug Platzi - Nunca pares de aprender'
                            descripText='Mug'
                            price='29.900'
                            descuento='20'
                        />
                    </Carousel>
                </div>
            </section>

            <hr/>

            {/*Section ----------Compra kits Completos----*/}
            <section className="buy-kits">
                <header className="title">Compra Kits Completos</header>
                
            </section>


            {/*Section ----------#Hashtag-----------*/}
            <section className="home__hashtag">
                  {/*Separete Line*/}
                  <hr/>
                <header className='title'>#PlatziSwag</header>
                <div className="home__hashtag__items">
                    <div className="home__hashtag__items__principal">
                        <div className="home__hashtag__items__principal__box-img">
                            <img src={imgHashtagPrincipal} alt=""/>
                        </div>
                        <div className="home__hashtag__items__principal__box-text">
                            <h3>{hashtag}</h3>
                            <p>Comparte tu estilo con la comunidad</p>
                        </div>
                    </div>
                    <div className="home__hashtag__items__secundarios">
                        <Carousel breakPoints={breakPoint}>
                            <HashtagItem 
                                link='/'
                                imgHashtag={imgHashtag1}
                            />
                            <HashtagItem 
                                link='/'
                                imgHashtag={imgHashtag2}
                            />
                            <HashtagItem 
                                link='/'
                                imgHashtag={imgHashtag1}
                            />
                            <HashtagItem 
                                link='/'
                                imgHashtag={imgHashtag2}
                            />
                        </Carousel>
                    </div>
                    <a href='/' className="home__hashtag__items__button">VER MÁS <img src={arrow} className='arrow'/></a>
                </div>
            </section>

            {/*Sección -------Siguenos en redes sociales----------*/}
            <section className='home__social-media'>
                {/*Separete Line*/}
                <hr/>

                <header className="title">Síguenos en redes</header>
                <div className="home__social-media__items">
                    <SocialMediaItem
                        socialMediaIcon={iconYou}
                        socialMediaLink='/'
                        text='youtube.com/platzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconFace}
                        socialMediaLink='/'
                        text='facebook.com/platzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconInsta}
                        socialMediaLink='/'
                        text='instagram.com/platzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconTiktok}
                        socialMediaLink='/'
                        text='tiktok.com/@aprendeconplatzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconTwitter}
                        socialMediaLink='/'
                        text='twitter.com/platzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconLinkedin}
                        socialMediaLink='/'
                        text='linkedin.com/platzi'
                    />
                    <SocialMediaItem
                        socialMediaIcon={iconSpotify}
                        socialMediaLink='/'
                        text='spotify.com/platzi'
                    />
                </div>
            </section>


            {/*---------------Footer-------------*/}
            <Footer/>

        </div>
    )
}

export default Home


