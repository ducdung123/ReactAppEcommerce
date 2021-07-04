import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/index';
import {
    Link,
} from "react-router-dom";
WishListItem.propTypes = {
    value: PropTypes.object,
};
WishListItem.defaultProps = {
    value: null,
};

function WishListItem(props) {
    let { value, pathUrl } = props;
    // let pathvalueImg = value.img.split('/');

    // if ((pathvalueImg.length - pathUrl.length) != 1) {
    //     for (let i = 2; i < pathUrl.length; i++) {
    //         value.img = '../' + value.img;
    //     }
    // }

    let pathvalueImg = value.img.split('/');
    while ((pathvalueImg.length - pathUrl.length) != 1) {
        //2Th
        //1 =
        //2 img > 
        if (pathvalueImg.length === pathUrl.length) {
            value.img = '../' + value.img;
            pathvalueImg = value.img.split('/');

        }
        else if (pathvalueImg.length > pathUrl.length) {
            value.img = value.img.slice(3);
            pathvalueImg = value.img.split('/');

        }
    }

    let dispatch = useDispatch();
    let onDeleteWishListItem = () => {
        let { id, wishlist } = value;
        dispatch(actions.deleteWishListRequest(id, !wishlist, null))
    }
    let AddToCart = () => {
        dispatch(actions.changeNumberItemCartRequest(value.id, value.inCart + 1, value))
        // console.log(value.inCart)
    }

    let onAddProductView = () => {
        dispatch(actions.addProductView(value));
        document.querySelector('.navbar--icon__wishlist__product__content').style.transform = 'translateX(100%)';
        document.body.style.overflow = 'visible';
        setTimeout(() => {
            document.querySelector('.navbar--icon__wishlist__product').style.display = 'none';
            // sethideWishList(hideWishList)
        }, 400);
    }
    // let productName = value.name;
    // productName = productName.replaceAll(" ", "-")
    return (
        <div className="row">
            <div className="col-md-4 col-5" onClick={() => { onAddProductView(value) }}>
                <Link to={`/products/${value.id}`} exact='true'>
                    <img src={value.img} />
                </Link>

            </div>
            <div className="col-md-8 col-7 wishlist__product__content__list__infor">
                <h5>{value.name}</h5>
                <h3>${value.price}</h3>
                <button onClick={AddToCart}>Add to Cart</button>
            </div>
            <i className="fa fa-times" onClick={onDeleteWishListItem}></i>
        </div>

    );
}

export default React.memo(WishListItem);