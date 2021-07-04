import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/index';
import {
    Link,
} from "react-router-dom";
NavCartItem.propTypes = {
    value: PropTypes.object,
};
NavCartItem.defaultProps = {
    value: null,
};
function NavCartItem(props) {
    //console.log('render cart item')
    let { value, pathUrl } = props;
    const [numberProduct, setnumberProduct] = useState(value.inCart);

    let dispatch = useDispatch();

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

    let onChangeValueInCart = (param) => {
        if (param > 0) {
            setnumberProduct(param);
            dispatch(actions.changeNumberItemCartRequest(value.id, param, value))
        }
        else {

            dispatch(actions.changeNumberItemCartRequest(value.id, param, value))
        }
    }

    let onAddProductView = () => {
        dispatch(actions.addProductView(value));
        document.querySelector('.navbar--icon__cart__product__content').style.transform = 'translateX(100%)';
        document.body.style.overflow = 'visible';
        setTimeout(() => {
            document.querySelector('.navbar--icon__cart__product').style.display = 'none';


        }, 400);
    }

    let productName = value.name;
    productName = productName.replaceAll(" ", "-")
    return (
        <div className="row">
            <div className="col-3" onClick={onAddProductView}>
                <Link to={`/products/${value.id}`} exact='true'>
                    <img src={value.img} />
                </Link>

            </div>
            <div className="col-9 cart__product__content__list__infor">
                <h5>{value.name}</h5>
                <div className="cart__product__content__list__infor__price">
                    <div>
                        <i className="fa fa-minus" onClick={() => { onChangeValueInCart(numberProduct - 1) }}></i>
                        <input type='text' value={value.inCart} />
                        <i className="fa fa-plus" onClick={() => { onChangeValueInCart(numberProduct + 1) }}></i>
                    </div>
                    <h5>${value.price}</h5>
                </div>
            </div>
            <i className="fa fa-times close" onClick={() => { onChangeValueInCart(0) }}></i>
        </div>
    );
}

export default NavCartItem;