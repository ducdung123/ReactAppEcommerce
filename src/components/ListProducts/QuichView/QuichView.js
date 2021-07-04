import React from 'react';
import './QuichView.scss';
import { useDispatch } from 'react-redux';
import {
    useLocation,
} from "react-router-dom";
import * as actions from '../../../actions/index';

function QuichView(props) {
    let { value } = props;
    let dispatch = useDispatch();
    let param = useLocation();
    let pathUrl = param.pathname.split('/');
    if(value){
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
    }
    

    let onHideQuickView = (param) => {
        if (param) {
            document.querySelector('.quickview__content').style.transform = 'translate(-50%, -50%) scale(1.2)';
            document.querySelector('.quickview__content').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.quickview').style.display = 'none';
            }, 400);
        }
    }

    let onAddWishList = () => {
        //console.log(!value.wishlist)

        dispatch(actions.deleteWishListRequest(value.id, !value.wishlist, value))
    }

    let AddToCart = () => {

        dispatch(actions.changeNumberItemCartRequest(value.id, value.inCart + 1, value))
        // console.log(value.inCart)
    }
    return (
        <div className="quickview">
            <div className="quickview__content">
                <div className="row">
                    <div className="col-5">
                        <img src={value ? value.img : "https://kenh14cdn.com/2018/8/24/h4-15350509085042136517485.jpg"} alt="anh" />
                    </div>
                    <div className="col-7 quickview__content__infor">
                        <h3>{value ? value.name : ""}</h3>
                        <h6>${value ? value.price : ""}</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                        <button onClick={AddToCart}>Add to Cart</button>
                        <i className={`fa fa-heart ${value ? (value.wishlist ? 'active' : '') : ""}`}
                            onClick={onAddWishList}
                        ></i>
                    </div>
                </div>
                <i className="fa fa-times quickview__content__close" onClick={() => { onHideQuickView(true) }}></i>
            </div>
            <div className="quickview__overlay" onClick={() => { onHideQuickView(true) }}></div>
        </div>
    );
}

export default QuichView;