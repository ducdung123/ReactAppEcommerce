import React, { useEffect, useState } from 'react';
import './ProductView.scss';
import {
    Link,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/index';

function ProductView(props) {
    
        
    let value = useSelector(state => state.productView);
    // let wishList = useSelector(state => state.wishList);
    let dispatch = useDispatch();
    const [numberProduct, setnumberProduct] = useState(1);

    let onProductImgHover = () => {
        let img = document.querySelector('.productview__content__img__tohover')
        // img.style.backgroundSize = '700px';
        img.style.borderColor = 'transparent';
        if(window.innerWidth < 768){
            img.style.backgroundSize = '550px';
        }
        else{
            img.style.backgroundSize = '700px';
        }
    }
    let onProductImgUnHover = () => {
        let img = document.querySelector('.productview__content__img__tohover')
        // img.style.backgroundSize = '580px';
        img.style.backgroundPosition = 'center';
        img.style.borderColor = '#707070';
        if(window.innerWidth < 768){
            img.style.backgroundSize = '460px';
        }
        else{
            img.style.backgroundSize = '580px';
        }
    }
    let onProductImgMove = (e) => {
        let img = document.querySelector('.productview__content__img__tohover')
        img.style.backgroundPositionX = -e.clientX / 10 + "px";
        if(window.innerWidth < 768){
            img.style.backgroundPositionY =- e.clientY / 3 + "px";
        }
        else{
            img.style.backgroundPositionY =- e.clientY / 10 + "px";
        }
        
    }
    useEffect(() => {
        let cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        })
        window.scrollTo(0,0)
        return () => {
            document.removeEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            })
        };
    }, []);

    let onAddWishList = () => {
        //console.log(!value.wishlist)
        if (!value.wishlist) {
            document.querySelector('.navbar--icon__wishlist__product').style.display = 'block';
            document.body.style.overflow = 'hidden';
            if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
                document.querySelector('.navbar--config').classList.remove("onscroll")
            }
            setTimeout(() => {
                document.querySelector('.navbar--icon__wishlist__product__content').style.transform = 'translateX(0)';

            }, 100);
        }
        dispatch(actions.deleteWishListRequest(value.id, !value.wishlist, value))
    }

    let onChangeValueInCart = (param) => {
        if (param > 0) {
            setnumberProduct(param);
        }
    }
    let onAddToCart = () => {
        document.querySelector('.navbar--icon__cart__product').style.display = 'block';
        document.body.style.overflow = 'hidden';
        if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
            document.querySelector('.navbar--config').classList.remove("onscroll")
        }
        setTimeout(() => {
            document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(0)';

        }, 100);
        dispatch(actions.addItemCartRequest(value.id, numberProduct, value))
    }
    let RenderStar = (star) => {
        let result = [];
        let numberStar = Number(star);
        for (let i = 0; i < numberStar; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for (let i = numberStar; i < 5; i++) {
            result.push(<i className="fa fa-star-half-alt"></i>)
        }
        return result;
    }

    return (
        <div className="productview">
            <div className="productview__content">
                <div className="row">
                    <div className="col-xl-7 col-12">
                        <div className="productview__content__img">
                            <img src={`../${value.img}`} />
                            <div className="productview__content__img__tohover" onMouseMove={onProductImgMove}
                                onMouseOver={onProductImgHover}
                                onMouseOut={onProductImgUnHover}

                                style={{ backgroundImage: `url(../${value.img})` }}
                            >
                            </div>
                            <div className="cursor"></div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-12">
                        <div className="productview__content__infor">
                            <h1>{value.name}</h1>
                            <div className="productview__content__infor__star">
                                {RenderStar(value.star)}
                            </div>
                            <h3>${value.price}</h3>
                            <div className="productview__content__infor__add">
                                <div className="productview__content__infor__add__number">
                                    <i className="fa fa-minus" onClick={() => { onChangeValueInCart(numberProduct - 1) }}></i>
                                    <input type='text' value={numberProduct} />
                                    <i className="fa fa-plus" onClick={() => { onChangeValueInCart(numberProduct + 1) }}></i>
                                </div>
                                <button onClick={onAddToCart}>Add to Cart</button>
                                <i className={`fa fa-heart ${value ? (value.wishlist ? 'active' : '') : ""}`}
                                    onClick={onAddWishList}
                                ></i>
                            </div>
                            <Link to='/cart' exact='true'>
                                <button className="productview__content__infor__cart">
                                    View Cart
                                </button>
                            </Link>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="productview__relate"></div>
        </div>
    );
}

export default ProductView;