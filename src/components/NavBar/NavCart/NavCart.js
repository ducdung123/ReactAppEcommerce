import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NavCart.scss';
import * as actions from '../../../actions/index';
import NavCartItem from './NavCartItem'
import {
    Link,
} from "react-router-dom";
function NavCart(props) {
    let cartList = useSelector(state => state.cartList);
    const [hideNavCart, sethideNavCart] = useState(true);
    let { pathUrl } = props;
    //console.log(cartList);

    let onHideNavCart = (hideNavCart) => {

        if (hideNavCart) {
            document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(100%)';
            document.body.style.overflow = 'visible';
            setTimeout(() => {
                document.querySelector('.navbar--icon__cart__product').style.display = 'none';
                sethideNavCart(hideNavCart)

            }, 400);
        }
        else {

            document.querySelector('.navbar--icon__cart__product').style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(0)';
                // console.log(1)
                // document.querySelector('.navbar--icon__cart__product').classList.add("asd");

            }, 100);
            sethideNavCart(hideNavCart)
        }
    }

    let totalPrice = 0;
    let totalNumberCart = 0;
    let renderCartList = cartList.map((value, index) => {
        totalNumberCart += value.inCart;
        totalPrice += (Number(value.price) * value.inCart)
        return (
            <NavCartItem key={value.id} value={value} pathUrl={pathUrl} />
        )
    })

    return (

        <div className="navbar--icon__cart">
            <i className="fa fa-shopping-basket d-lg-block d-none" onClick={() => { onHideNavCart(false) }}></i>
            <div className="navbar--icon__cart__product" >
                <div className="navbar--icon__cart__product__content" >
                    <h4>Shopping Cart</h4>
                    <div className="cart__product__content">
                        <div className="cart__product__content__list">
                            {renderCartList}

                        </div>
                        <div className="cart__product__content__price">
                            <p>Subtotal</p>
                            <h3>${totalPrice}</h3>
                        </div>
                        <Link to='/cart' exact='true'>
                            <button className="cart__product__content__button-cart" onClick={() => { onHideNavCart(true) }}>
                                View Cart
                            </button>
                        </Link>

                    </div>
                    <div className="cart__product__loading">
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div className="navbar--icon__cart__product__overlay" onClick={() => { onHideNavCart(true) }}></div>
            </div>
            <div className="navbar--icon__cart__note d-lg-block d-none">{totalNumberCart}</div>
        </div>

    );
}

export default NavCart;