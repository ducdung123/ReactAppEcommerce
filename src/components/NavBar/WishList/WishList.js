import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './WishList.scss';
import * as actions from '../../../actions/index';
import WishListItem from './WishListItem';

{/* //tao 1 state trong redux
            lay du lieu tu state
            tao item trong WishList
            moi item co du lieu 1 product truyen qua props cos function delete
            goi delete dung middleware dispatch thay doi trang thai wishlist cua product qua api
            trong state thog qua id splice product trong danh sach wishlist */}

function WishList(props) {
    let wishList = useSelector(state => state.wishList)
    //let dispatch = useDispatch();
    const [hideWishList, sethideWishList] = useState(true);
    let {pathUrl} = props;
    // useEffect(() => {
    //     dispatch(actions.getListProductsRequest())
    // }, []);
    // console.log(wishList)
    let onHideWishList = (hideWishList) => {
        if (hideWishList) {
            document.querySelector('.navbar--icon__wishlist__product__content').style.transform = 'translateX(100%)';
            document.body.style.overflow = 'visible';
            setTimeout(() => {
                document.querySelector('.navbar--icon__wishlist__product').style.display = 'none';
                sethideWishList(hideWishList)
            }, 400);
        }
        else {
            document.querySelector('.navbar--icon__wishlist__product').style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.querySelector('.navbar--icon__wishlist__product__content').style.transform = 'translateX(0)';

            }, 100);
            sethideWishList(hideWishList)
        }
    }
    let renderWishList = wishList.map((value, index) => {
        return (
            <WishListItem key={value.id} value={value} pathUrl={pathUrl}/>
        )
    })
    return (
        <div className="navbar--icon__wishlist" >
            <i className="fa fa-heart d-lg-block d-none" onClick={() => { onHideWishList(false) }}></i>

            <div className="navbar--icon__wishlist__product" >
                <div className="navbar--icon__wishlist__product__content" >
                    <h4>Wishlist Products</h4>
                    <div className="wishlist__product__content__list">
                        {renderWishList}
                    </div>
                </div>
                <div className="navbar--icon__wishlist__product__overlay" onClick={() => { onHideWishList(true) }}></div>
            </div>
            <div className="navbar--icon__wishlist__note d-lg-block d-none">{wishList.length}</div>
        </div>
    );
}

export default WishList;