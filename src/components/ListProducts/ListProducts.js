import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import axios from 'axios';
import QuichView from './QuichView/QuichView';
import Compare from './Compare/Compare';

//owl-carousel
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// import PropTypes from 'prop-types';

// ListProducts.propTypes = {

// };
import './ListProducts.scss';
import '../../customLibary.scss';
function ListProducts(props) {
    // console.log('render listproduct')
    let listProducts = useSelector(state => state.listProducts);
    // const [listProducts, setlistProducts] = useState(null);
    const [productType, setproductType] = useState('liquor');
    const [valueQuickView, setvalueQuickView] = useState(null);

    // useEffect(() => {
    //     let getListProducts = async () => {
    //         const response = await axios.get(`https://60af5fb25b8c300017dec864.mockapi.io/qlsv/listProducts`)
    //         console.log(productType)
    //         setlistProducts(response.data);
    //     }
    //     getListProducts()
    // }, [productType]);

    let onchangeProductType = (param) => {
        setproductType(param)
    }

    let onHideQuickView = (param) => {
        document.querySelector('.quickview').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.quickview__content').style.transform = 'translate(-50%, -50%) scale(1)';
            document.querySelector('.quickview__content').style.opacity = '1';
        }, 100);
        setvalueQuickView(param)
    }

    let RenderListProducts = listProducts ? listProducts.map((value, index) => {
        return (
            <ProductItem key={value.id} value={value} hideQuickView={onHideQuickView} />
        )
    }) : null;

    const options = {
        nav: false,
        dots: false,
        smartSpeed: 1000,
        loop: true,
        items: 2,
        responsive: {
            0: {
                items: 2,
               
            },
            768: {
                items: 3,
               
            },
        }

    };

    return (
        <div className="listproducts">
            <h1>You want it? We got it</h1>
            <ul>
                <li
                    onClick={() => { onchangeProductType('liquor') }}
                    className={`${productType === "liquor" ? "active" : ""}`}
                >
                    LIQUOR
                </li>
                <li
                    onClick={() => { onchangeProductType('beer') }}
                    className={`${productType === "beer" ? "active" : ""}`}
                >
                    BEER
                </li>
                <li
                    onClick={() => { onchangeProductType('wine') }}
                    className={`${productType === "wine" ? "active" : ""}`}
                >
                    WINE
                </li>
                <li
                    onClick={() => { onchangeProductType('extra') }}
                    className={`${productType === "extra" ? "active" : ""}`}
                >
                    EXTRAS
                </li>
            </ul>
            <div className="listproducts__content d-lg-flex d-none">
                {RenderListProducts}
            </div>
           
            <OwlCarousel options={options} className="listproducts__content d-lg-none d-flex">
                {RenderListProducts}
            </OwlCarousel>
            <QuichView value={valueQuickView} />
            <Compare />
        </div>
    );
}

export default React.memo(ListProducts);