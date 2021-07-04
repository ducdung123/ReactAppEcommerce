import * as types from '../contants/types';
import axios from 'axios'
export const getListProducts = (products) => {
    return {
        type: types.GET_LIST_PRODUCTS,
        products,
    }
}

export const getListProductsRequest = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts`)
            let wishList = response.data.filter((value, index) => {
                if (value.wishlist) {
                    return value
                }
            })

            let cartList = response.data.filter((value, index) => {
                if (Number(value.inCart) > 0) {
                    return value
                }
            })
            dispatch(getListProducts(response.data))
            dispatch(getWishList(wishList))
            dispatch(getCartList(cartList))

        }
        catch (err) {
            console.log('error')
        }
    }
}

export const getWishList = (products) => {
    return {
        type: types.GET_WISHLIST,
        products,
    }
}


export const deleteWishListRequest = (id, wishlist, productItem) => {
    return async (dispatch) => {
        try {
            await axios({
                method: 'put',
                url: `https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts/${id}`,
                data: {
                    wishlist,
                }
            });
            if (wishlist) {
                dispatch(addWishList(productItem))
            }
            else {
                dispatch(deleteWishList(id, productItem))
            }


        }
        catch (err) {
            console.log('error')
        }
    }
}

export const deleteWishList = (id) => {
    return {
        type: types.DELETE_WISHLIST,
        id,

    }
}

export const addWishList = (productItem) => {
    return {
        type: types.ADD_WISHLIST,
        productItem,
    }
}

export const getCartList = (products) => {
    return {
        type: types.GET_CARTLIST,
        products,
    }
}

export const changeNumberItemCart = (id, number, value) => {
    return {
        type: types.CHANGE_NUMBER_ITEM_CART,
        id,
        number,
        value,
    }
}


export const deleteItemCart = (id) => {
    return {
        type: types.DELETE_ITEM_CART,
        id,
    }
}

export const addItemCart = (id, number, value) => {
    return {
        type: types.ADD_ITEM_CART,
        id,
        number,
        value,
    }
}

export const addItemCartRequest = (id, number, value) => {
    return async (dispatch) => {
        try {
            document.querySelector('.cart__product__loading').style.display = 'flex';
            let product = await axios({
                method: 'get',
                url: `https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts/${id}`,
            });
            let numberIncart = product.data.inCart;
            await axios({
                method: 'put',
                url: `https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts/${id}`,
                data: {
                    inCart: numberIncart + number,
                }
            });
            document.querySelector('.cart__product__loading').style.display = 'none';
            dispatch(addItemCart(id, number, value));

        }
        catch (err) {
            console.log('error')
        }
    }
}

export const changeNumberItemCartRequest = (id, number, value) => {
    return async (dispatch) => {
        try {
            document.querySelector('.cart__product__loading').style.display = 'flex';
            if (document.getElementById(`cart__content__item--${id}`)) {
                document.querySelector(`#cart__content__item--${id} .cart__content__item__loading`).style.display = 'flex';
            }
            await axios({
                method: 'put',
                url: `https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts/${id}`,
                data: {
                    inCart: number,
                }
            });
            document.querySelector('.cart__product__loading').style.display = 'none';
            if (document.getElementById(`cart__content__item--${id}`)) {
                document.querySelector(`#cart__content__item--${id} .cart__content__item__loading`).style.display = 'none';
            }
            if (number > 0) {
                dispatch(changeNumberItemCart(id, number, value))
            }
            else {
                dispatch(deleteItemCart(id))
            }

        }
        catch (err) {
            console.log('error')
        }
    }
}


export const addCompareProduct = (value) => {
    return {
        type: types.ADD_COMPARE_PRODUCT,
        value,
    }
}

export const deleteCompareProduct = (id) => {
    return {
        type: types.DELETE_COMPARE_PRODUCT,
        id,
    }
}

export const addProductView = (value) => {
    return {
        type: types.ADD_PRODUCT_VIEW,
        value,
    }
}