import React from 'react';
import { useSelector } from 'react-redux';
import './Compare.scss';
import CompareProductItem from './CompareProductItem';
import {
    useLocation,
} from "react-router-dom";
// import PropTypes from 'prop-types';

// Compare.propTypes = {

// };

function Compare(props) {

    let listCompareProduct = useSelector(state => state.listCompareProduct)
    let param = useLocation();
    let pathUrl = param.pathname.split('/');
    if (listCompareProduct) {
        listCompareProduct.map((value) => {
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
        })
    }
    let onHideCompareProduct = (param) => {
        if (param) {
            document.querySelector('.compare__content').style.transform = 'translate(-50%, -50%) scale(1.1)';
            document.querySelector('.compare__content').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.compare').style.display = 'none';
            }, 400);
        }
    }

    listCompareProduct = listCompareProduct ? listCompareProduct.map((value) => {
        return (
            <CompareProductItem key={value.id} value={value} />
        )
    }) : null;

    return (
        <div className="compare">
            <div className="compare__content">
                <h1>Compare Products</h1>
                <div className="compare__content__product">

                    {listCompareProduct}

                </div>
                <i className="fa fa-times compare__content__close" onClick={() => { onHideCompareProduct(true) }}></i>
            </div>
            <div className="compare__overlay" onClick={() => { onHideCompareProduct(true) }}></div>
        </div>
    );
}

export default React.memo(Compare);

