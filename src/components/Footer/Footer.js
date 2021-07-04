import React, { useState,useEffect } from 'react';
import './Footer.scss';
function Footer() {
    const [hidecontent1, sethidecontent1] = useState(false);
    const [hidecontent2, sethidecontent2] = useState(false);
    useEffect(() => {
        window.onresize = ()=>{
            if(window.innerWidth > 992 ){
                sethidecontent1(false);
                sethidecontent2(false);
            }
        }
        
    }, []);
    let onHideContent1 = () => {
        
        if(window.innerWidth < 992 ){
            sethidecontent1(!hidecontent1)
        }
        else{
            sethidecontent1(false)
        }
    }
    let onHideContent2 = () => {
        
        if(window.innerWidth < 992 ){
            sethidecontent2(!hidecontent2)
        }
        else{
            sethidecontent2(false)
        }
    }
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="footer__top__col">
                            <h3>Contact Us</h3>
                            <div className="footer__top__col__content">
                                <div className="d-flex">
                                    <p>Phone:</p>
                                    <span>058474***</span>
                                </div>
                                <div className="d-flex">
                                    <p>Email:</p>
                                    <span>ducdung171201@gmail.com</span>
                                </div>
                                <div className="d-flex">
                                    <p>Address:</p>
                                    <span>Phu Dien, BTL, Ha Noi </span>
                                </div>
                                <div className="d-flex">
                                    <p>Social:</p>
                                    <div className="footer__top__col__icon">
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-pinterest"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="footer__top__col">
                            <h3 className={`${hidecontent1 ? "hide" : ""} `}
                                onClick={onHideContent1}
                            >
                                Support
                                <span className="d-lg-none d-inline"><i class="fa fa-angle-right"></i></span>
                            </h3>
                            <div className="footer__top__col__content footer__top__col__content__hide">
                                <div>
                                    <p className="footer__top__col__about">Help</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Contact Us</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Feedback</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Unsubscribe</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Reservations</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="footer__top__col">
                        <h3 className={`${hidecontent2 ? "hide" : ""} `}
                                onClick={onHideContent2}
                            >
                                Policies
                                <span className="d-lg-none d-inline"><i class="fa fa-angle-right"></i></span>
                            </h3>
                            <div className="footer__top__col__content footer__top__col__content__hide">
                                <div>
                                    <p className="footer__top__col__about">Privacy Policy</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Terms Of Use</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Gift Card Conditions</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Shipping</p>
                                </div>
                                <div>
                                    <p className="footer__top__col__about">Return</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="footer__top__col">
                            <h3>Join Our Newsletter</h3>
                            <div className="footer__top__col__content">
                                <div>
                                    <p className="footer__top__col__about">Subscribe to our newsletter and get 10% off your first purchase</p>
                                </div>
                                <div className="footer__top__col__input">
                                    <input placeholder="Your email address" type="email" />
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom"></div>
        </div>
    );
}

export default Footer;