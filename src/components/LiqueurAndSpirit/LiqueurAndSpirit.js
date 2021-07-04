import React, { useState, useEffect } from 'react';
import './LiqueurAndSpirit.scss'

function LiqueurAndSpirit() {
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [second, setSecond] = useState(0);
    useEffect(() => {
        let setCountDown = setInterval(() => {
            let dest = new Date(2021, 11, 17, 0, 0, 0).getTime();
            let now = new Date().getTime();
            let diff = dest - now;

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let second = Math.floor((diff % (1000 * 60)) / (1000));
            setDay(days);
            setHours(hours);
            setMinutes(minutes);
            setSecond(second)

        }, 1000)

        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            if (window.innerWidth > 992) {
                if (window.scrollY >= 2000) {
                    document.querySelector('.liqueur-and-spirit__img__left--overlay').style.transform = 'translateY(-100%)';
                    document.querySelector('.liqueur-and-spirit__img__right--overlay').style.transform = 'translateX(-100%)'
                }
            }
            else {
                if (window.scrollY >= 2000) {
                    document.querySelector('.liqueur-and-spirit__img__left--overlay').style.transform = 'translateY(-100%)';

                }
                if (window.scrollY >= 2700) {
                    document.querySelector('.liqueur-and-spirit__img__right--overlay').style.transform = 'translateX(-100%)'
                }
            }
            
        })

        return () => {
            clearInterval(setCountDown);
            window.removeEventListener('scroll', () => {
                console.log("remove",window.scrollY)
                if (window.innerWidth > 992) {
                    if (window.scrollY >= 2000) {
                        document.querySelector('.liqueur-and-spirit__img__left--overlay').style.transform = 'translateY(-100%)';
                        document.querySelector('.liqueur-and-spirit__img__right--overlay').style.transform = 'translateX(-100%)'
                    }
                }
                else {
                    if (window.scrollY >= 2000) {
                        document.querySelector('.liqueur-and-spirit__img__left--overlay').style.transform = 'translateY(-100%)';

                    }
                    if (window.scrollY >= 2700) {
                        document.querySelector('.liqueur-and-spirit__img__right--overlay').style.transform = 'translateX(-100%)'
                    }
                }
                
            });
        };
    }, []);
    return (
        <div className="liqueur-and-spirit">
            <h1>Liqueur & Spirits</h1>
            <p>In addition to the 2 large categories of Wine and Whiskey, you will quickly discover the
                world of other drinks in this category with just one click.</p>
            <div className="liqueur-and-spirit__content">
                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/volka.png" />
                            <p>Vodka</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/cognac.png" />
                            <p>Cognac</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/grappa.png" />
                            <p>Grappa</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/scotch.png" />
                            <p>Scotch</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/tequila.png" />
                            <p>Tequila</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                        <div className="liqueur-and-spirit__content__item">
                            <img src="./img/rum.png" />
                            <p>Rum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="liqueur-and-spirit__img">
                <div className="row m-0 ">
                    <div className="col-lg-4 col-12" >
                        <div className="liqueur-and-spirit__img__left" style={{ backgroundImage: 'url(./img/Liqueur&Spirits-1.jpg)' }}>
                            <div>
                                <p>DEALS OF THE MONTH</p>
                                <h1>Savvy Savings</h1>
                                <div className="liqueur-and-spirit__img__count">
                                    <div className="liqueur-and-spirit__img__count__item">
                                        <h3>{day}</h3>
                                        <p>days</p>
                                    </div>
                                    <div className="liqueur-and-spirit__img__count__item">
                                        <h3>{hours}</h3>
                                        <p>hours</p>
                                    </div>
                                    <div className="liqueur-and-spirit__img__count__item">
                                        <h3>{minutes}</h3>
                                        <p>mins</p>
                                    </div>
                                    <div className="liqueur-and-spirit__img__count__item">
                                        <h3>{second}</h3>
                                        <p>secs</p>
                                    </div>
                                </div>
                                <button>Shop now</button>
                            </div>

                        </div>
                        <div className="liqueur-and-spirit__img__left--overlay"></div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="liqueur-and-spirit__img__right" >
                            <div className="liqueur-and-spirit__img__right__top" style={{ backgroundImage: 'url(./img/Liqueur&Spirits-2.jpg)' }}>
                                <div>
                                    <h3>15 Whisky Cocktails You'll Fall For</h3>
                                    <h6>We partnered with talented Ontario bartenders to create this autumn-inspired whisky cocktail collection.</h6>
                                    <button>Get the recipes</button>
                                </div>
                            </div>
                            <div className="liqueur-and-spirit__img__right__bottom">
                                <div className="row m-0">
                                    <div className="col-md-6 col-12" >
                                        <div className="liqueur-and-spirit__img__right__bottom__item" style={{ backgroundImage: 'url(./img/Liqueur&Spirits-3.jpg)' }}>
                                            <div>
                                                <p>LOCALLY MADE</p>
                                                <h1>Sale Now</h1>
                                                <button>Shop now</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-12" >
                                        <div className="liqueur-and-spirit__img__right__bottom__item" style={{ backgroundImage: 'url(./img/Liqueur&Spirits-4.jpg)' }}>
                                            <div>
                                                <p>NEW ARRIVALS</p>
                                                <h1>Vintages</h1>
                                                <button>Shop now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="liqueur-and-spirit__img__right--overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiqueurAndSpirit;


