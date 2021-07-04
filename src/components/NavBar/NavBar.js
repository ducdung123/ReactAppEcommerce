import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import './NavBar.scss';
import Search from './Search/Search';
import Login from './Login/Login';
import WishList from './WishList/WishList';
import NavCart from './NavCart/NavCart';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index';
import data from '../../data';
import axios from 'axios'
NavBar.propTypes = {

};

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'Liqueurs',
        to: '/collections/Liqueurs',
        exact: false,
    },
    {
        name: 'Wine',
        to: '/collections/Wine',
        exact: false,
    },
    {
        name: 'Beer',
        to: '/collections/Beer',
        exact: false,
    },
    {
        name: 'Accessories',
        to: '/collections/Accessories',
        exact: false,
    },
    {
        name: 'Blog',
        to: '/a',
        exact: false,
    },
    {
        name: 'Contact Us',
        to: '/a',
        exact: false,
    },
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            // console.log(match)
            let active = match ? 'active' : '';
            return (
                <li className={`nav-item ${active}`} >
                    <Link to={to} className="nav-link" exact={activeOnlyWhenExact.toString()}>{label}</Link>
                </li>
            );
        }} >

        </Route>
    );
}





function NavBar() {
    // console.log('render navbar')
    let param = useLocation();
    const [hideMenuRes, sethideMenuRes] = useState(true);
    let logoImg = './img/logoNav.png';
    let dispatch = useDispatch();
    //scroll
    const [y, setY] = useState(window.scrollY);

    let pathUrl = param.pathname.split('/')
    for (let i = 2; i < pathUrl.length; i++) {
        logoImg = '../' + logoImg;
    }
    // console.log(param)
    // console.log(logoImg)
    const handleNavigation = (e) => {
        e.preventDefault();
        const window = e.currentTarget;


        setTimeout(() => {

            if (y > window.scrollY) {

                document.querySelector('.navbar--config').classList.remove("onscroll");
            } else if (y < window.scrollY) {

                //document.querySelector('.navbar--config').style.transform = 'translateY(-100%)';
                document.querySelector('.navbar--config').classList.add("onscroll")
            }


        }, 300)


        setY(window.scrollY);


    };
    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));

        return () => {
            window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
    }, [y]);


    useEffect(() => {
        dispatch(actions.getListProductsRequest());

        //tao du lieu
        // let postapi = async () => {
        //     try {

        //         for(let value of data){
        //             await axios({
        //                 method: 'post',
        //                 url: 'https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts',
        //                 data: value
        //             });
        //         }


        //     }
        //     catch (err) {
        //         console.log('error')
        //     }

        // }
        // postapi()
    }, []);

    let onChangeMenuRes = (ishideMenuRes) => {

        if (ishideMenuRes) {
            document.querySelector('.navbar__content').style.transform = 'translateX(-100%)';
            document.querySelector('.navbar__content').style.opacity = '0';
            document.body.style.overflow = 'visible';
        }
        else {
            document.querySelector('.navbar__content').style.transform = 'translateX(0)';
            document.querySelector('.navbar__content').style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }
        sethideMenuRes(ishideMenuRes)
    }
    let onHideSearch = () => {
        document.querySelector(".navbar--icon__search__input").style.transform = 'translateY(0)';
        document.body.style.overflow = 'hidden';
        if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
            document.querySelector('.navbar--config').classList.remove("onscroll")
        }
    }
    let onHideWishList = () => {
        document.querySelector('.navbar--icon__wishlist__product').style.display = 'block';
        document.body.style.overflow = 'hidden';
        if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
            document.querySelector('.navbar--config').classList.remove("onscroll")
        }
        setTimeout(() => {
            document.querySelector('.navbar--icon__wishlist__product__content').style.transform = 'translateX(0)';

        }, 100);
    }
    let onHideNavCart = () => {
        document.querySelector('.navbar--icon__cart__product').style.display = 'block';
        document.body.style.overflow = 'hidden';
        if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
            document.querySelector('.navbar--config').classList.remove("onscroll")
        }
        setTimeout(() => {
            document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(0)';

        }, 100);
    }
    let ShowMenu = (menu) => {
        let result = null;
        if (menu.length > 0) {
            result = menu.map((value, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={value.name}
                        to={value.to}
                        activeOnlyWhenExact={value.exact}
                    />
                );
            })
        }
        return result;
    }
    return (

        <nav>
            <div className="navbar--config">

                <div className={`navbar-menu-icon-res d-block d-lg-none ${hideMenuRes ? 'hide' : ''}`}
                    onClick={() => { onChangeMenuRes(!hideMenuRes) }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link to="/" className="navbar-brand" exact='true'>
                    <img src={logoImg} />
                </Link>
                <ul className="navbar__content">
                    {ShowMenu(menus)}
                </ul>

                <div className="navbar__icon">
                    <Search pathUrl={pathUrl} />
                    <Login />
                    <WishList pathUrl={pathUrl} />
                    <NavCart pathUrl={pathUrl} />
                </div>

                {/* <div className="navbar__icon__res d-flex d-lg-none">
                    <Link to="/" exact='true'>
                        <i class="fa fa-home">
                        </i>
                    </Link>
                    <i className="fa fa-search" onClick={onHideSearch}></i>
                    <i className="fa fa-heart" onClick={onHideWishList}></i>
                    <i className="fa fa-shopping-basket" onClick={onHideNavCart}></i>
                </div> */}
            </div >
            <div className="navbar__icon__res d-flex d-lg-none">
                <Link to="/" exact='true'>
                    <i class="fa fa-home">
                    </i>
                </Link>
                <i className="fa fa-search" onClick={onHideSearch}></i>
                <i className="fa fa-heart" onClick={onHideWishList}></i>
                <i className="fa fa-shopping-basket" onClick={onHideNavCart}></i>
            </div>
        </nav>

    );
}

export default NavBar;

// window.onscroll = ()=>{
//     // if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){

//     // }
//     // else{

//     // }
//     console.log(window.scrollY)
//     // console.log(document.documentElement.sc)
// }
