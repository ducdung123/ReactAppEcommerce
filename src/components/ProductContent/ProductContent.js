import React from 'react';
import {

    Link,
} from "react-router-dom";
import './ProductContent.scss'
//import PropTypes from 'prop-types';

// ProductContent.propTypes = {

// };

function ProductContent(props) {
    return (
        <div className="product-content">
            <div className="row">
                <div className="col-md-3 col-6 product-content__item">
                    <Link to='/collections/Liqueurs'>
                        <div className="product-content__item__img">
                            {/* <img src='../img/liquid.jpg' /> */}
                        </div>
                        <div className="product-content__item__infor">
                            <h3>Liqueurs</h3>
                        </div>
                        
                    </Link>
                </div>
                <div className="col-md-3 col-6 product-content__item">
                    <Link to='/collections/Wine'>
                        <div className="product-content__item__img">
                            {/* <img src='../img/liquid.jpg' /> */}
                        </div>
                        <div className="product-content__item__infor">
                            <h3>Wines</h3>
                        </div>
                        
                    </Link>
                </div>
                <div className="col-md-3 col-6 product-content__item">
                    <Link to='/collections/Beer'>
                        <div className="product-content__item__img">
                            {/* <img src='../img/liquid.jpg' /> */}
                        </div>
                        <div className="product-content__item__infor">
                            <h3>Beer</h3>
                        </div>
                        
                    </Link>
                </div>
                <div className="col-md-3 col-6 product-content__item">
                    <Link to='/collections/Beer'>
                        <div className="product-content__item__img">
                            {/* <img src='../img/liquid.jpg' /> */}
                        </div>
                        <div className="product-content__item__infor">
                            <h3>Accessories</h3>
                        </div>
                        
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductContent;