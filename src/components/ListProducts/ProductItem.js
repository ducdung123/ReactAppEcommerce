import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from '../../actions/index';
import {
    Link,
} from "react-router-dom";
// import PropTypes from 'prop-types';

// ProductItem.propTypes = {

// };

function ProductItem(props) {
    let { value } = props;
    let { img, price, star, name, wishlist } = value;
    let param = useLocation();
    let pathUrl = param.pathname.split('/')
    for (let i = 2; i < pathUrl.length; i++) {
        img = '../' + img;
    }

    let dispatch = useDispatch();

    let AddToCart = () => {
        document.querySelector('.navbar--icon__cart__product').style.display = 'block';
        document.body.style.overflow = 'hidden';
        if (document.querySelector('.navbar--config').classList.contains("onscroll")) {
            document.querySelector('.navbar--config').classList.remove("onscroll")
        }
        setTimeout(() => {
            document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(0)';

        }, 100);
        dispatch(actions.changeNumberItemCartRequest(value.id, value.inCart + 1, value))
        // console.log(value.inCart)
    }

    let onHideQuickView = () => {

        props.hideQuickView(value)
    }

    let onHideCompareProduct = () => {
        dispatch(actions.addCompareProduct(value))
        document.querySelector('.compare').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.compare__content').style.transform = 'translate(-50%, -50%) scale(1)';
            document.querySelector('.compare__content').style.opacity = '1';
        }, 100);

    }

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

    let onAddProductView = () => {
        dispatch(actions.addProductView(value))
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

        <div className="listproducts__content__item">
            <Link to={`/products/${value.id}`} exact='true'>
                <div className="listproducts__content__item__img" onClick={onAddProductView}>
                    <img src={img} />
                </div>
            </Link>

            <div className="listproducts__content__item__name d-flex d-lg-block">
                <p>{name}</p>
                <i className="fa fa-shopping-basket d-block d-lg-none" onClick={AddToCart}></i>
            </div>
            <div className="listproducts__content__item_content">
                <div className="listproducts__content__item__star">
                    {/* <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> */}
                    {RenderStar(star)}
                </div>
                <div className="listproducts__content__item__price">
                    <p>${price}</p>
                </div>
            </div>
            <div className="listproducts__content__item__function">
                <div>
                    <i className="fa fa-shopping-basket" onClick={AddToCart}></i>
                    <div className="listproducts__content__item__function__title">
                        <p>Add to Cart</p>
                    </div>
                </div>
                <div>
                    <i className="fa fa-search-plus" onClick={onHideQuickView}></i>
                    <div className="listproducts__content__item__function__title">
                        <p>Quick View</p>
                    </div>
                </div>
                <div>
                    <i className={`fa fa-heart ${wishlist ? 'active' : ''}`} onClick={onAddWishList}></i>
                    <div className="listproducts__content__item__function__title">
                        <p>{wishlist ? 'Added to WishList' : 'Add to WishList'}</p>
                    </div>
                </div>
                <div>
                    <i className="fa fa-random" onClick={onHideCompareProduct}></i>
                    <div className="listproducts__content__item__function__title">
                        <p>Compare</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductItem;