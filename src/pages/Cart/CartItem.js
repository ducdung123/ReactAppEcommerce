import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/index';

function CartItem(props) {
    let { value } = props;
    //const [numberProduct, setnumberProduct] = useState(value.inCart);
    let dispatch = useDispatch();

    let onChangeValueInCart = (param) => {
        
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
        <tr id={`cart__content__item--${value.id}`}>
            <td>
                <img src={value.img} />
                <div>
                    <p>{value.name}</p>
                    <div className="cart__content__star">
                        {RenderStar(value.star)}
                    </div>
                </div>
            </td>
            <td>${value.price}</td>
            <td>
                <div className="cart__content__number">
                    <i className="fa fa-minus" onClick={() => { onChangeValueInCart(value.inCart - 1) }}></i>
                    <input type='text' value={value.inCart} />
                    <i className="fa fa-plus" onClick={() => { onChangeValueInCart(value.inCart + 1) }}></i>
                </div>

            </td>
            <td>${Number(value.price) * value.inCart}</td>
            <td>
                <i class="fa fa-times" onClick={() => { onChangeValueInCart(0) }}></i>
            </td>
            <div className="cart__content__item__loading">
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </tr>
    );
}

export default CartItem;