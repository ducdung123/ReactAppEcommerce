import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/index';
function CompareProductItem(props) {
    let dispatch = useDispatch();
    let {value} = props;

    let ondeleteCompareProduct = ()=>{
       
        dispatch(actions.deleteCompareProduct(value.id))
    }

    return (
        <div className="compare__content__product__item">
            <div className="compare__content__product__item__img">
                <img src={value.img} />
            </div>
            <h5>{value.name}</h5>
            <h6>${value.price}</h6>
            <i className="fa fa-times" onClick={ondeleteCompareProduct}></i>
        </div>
    );
}

export default CompareProductItem;