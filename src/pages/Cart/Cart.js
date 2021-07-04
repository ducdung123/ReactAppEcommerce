import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';
import CartItem from './CartItem';
import CartItemRes from './CartItemRes';

function Cart() {
    
    let cartList = useSelector(state => state.cartList);
    let [hideCarRes, sethideCarRes] = useState(null);
    let totalPrice = 0;
    let RenderCartList = cartList ? cartList.map((value) => {
        totalPrice += (Number(value.price) * value.inCart)
        return (
            <CartItem key={value.id} value={value} />
        )
    }) : null;

    let RenderCartListRes = cartList ? cartList.map((value) => {
        totalPrice += (Number(value.price) * value.inCart)
        return (
            <CartItemRes key={value.id} value={value} />
        )
    }) : null;
    useEffect(() => {
        if (window.innerWidth > 992) {
            sethideCarRes(true)
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                sethideCarRes(true)
            }
            else {
                sethideCarRes(false)
            }
        })

        window.scrollTo(0, 0);
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth > 992) {
                    sethideCarRes(true)
                }
                else {
                    sethideCarRes(false)
                }
            })
        };
    }, []);
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart__content">
                <table>
                    {/* <tr>
                        <th>PRODUCT DETAILS</th>
                        <th>UNIT PRICE</th>
                        <th>QUANTITY</th>
                        <th>AMOUNT</th>
                        <th></th>
                    </tr> */}
                    {hideCarRes ? RenderCartList : null}
                    {/* {RenderCartList} */}
                    {hideCarRes ? (<tr>
                        <td></td>
                        <td></td>
                        <td>Subtotal</td>
                        <td>${totalPrice}
                            <button>CHECK OUT</button>
                        </td>
                        <td></td>
                    </tr>) : null}

                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button>CHECK OUT</button>
                        </td>
                        <td></td>
                    </tr> */}

                </table>
            </div>
            {hideCarRes ? null : RenderCartListRes}
            {hideCarRes ? null : (<div className="cart__subtotal">
                <div>
                    <h3>Subtotal</h3>
                    <h3>${totalPrice}</h3>
                </div>
                <button>CHECK OUT</button>
            </div>)}

        </div>
    );
}

export default Cart;