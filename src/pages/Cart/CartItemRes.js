import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/index';

function CartItemRes(props) {
    let { value } = props;
    let dispatch = useDispatch();

    let onChangeValueInCart = (param) => {
        console.log(param)
        if (param > 0) {
            dispatch(actions.changeNumberItemCartRequest(value.id, param, value))
        }
        else {

            dispatch(actions.changeNumberItemCartRequest(value.id, param, value))
        }
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
        <div className="cart__content__res">
            <div>
                <div className="cart__content__res__title">PRODUCT DETAILS</div>
                <div>
                    <img src={value.img} />
                    <div>
                        <p>{value.name}</p>
                        <div className="cart__content__star">
                            {RenderStar(value.star)}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cart__content__res__title">UNIT PRICE</div>
                <div className="cart__content__res__text">
                    ${value.price}
                </div>
            </div>
            <div>
                <div className="cart__content__res__title">QUANTITY</div>
                <div>
                    <div className="cart__content__number">
                        <i className="fa fa-minus" onClick={() => { onChangeValueInCart(value.inCart - 1) }}></i>
                        <input type='text' value={value.inCart} />
                        <i className="fa fa-plus" onClick={() => { onChangeValueInCart(value.inCart + 1) }}></i>
                    </div>
                </div>
            </div>
            <div>
                <div className="cart__content__res__title">AMOUNT</div>
                <div className="cart__content__res__text">
                    ${Number(value.price) * value.inCart}
                </div>
            </div>
            <div>
                <div className="cart__content__res__title"></div>
                <div>
                    <i class="fa fa-times cart__content__res__text" onClick={() => { onChangeValueInCart(0) }}></i>
                </div>
            </div>
            
        </div>
    );
}

export default CartItemRes;