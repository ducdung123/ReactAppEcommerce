import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link,
} from "react-router-dom";
import * as actions from '../../../actions/index';
// import * as actions from '../../../actions/index';
// import data from '../../../data';
// Search.propTypes = {

// };



let findSearch = (listProducts, valueSearch) => {
    let listSearch = [];
    if (valueSearch === '') {
        return listSearch;
    }
    listSearch = listProducts.filter((value, index) => {
        if (value.name.trim().toLowerCase().search(valueSearch.trim()) !== -1) {
            return value
        }
    })
    return listSearch;
}


function Search(props) {

    //const [hideSearch, sethideSearch] = useState(true);
    const [valueInput, setvalueInput] = useState('');
    const [listSearch, setlistSearch] = useState([]);
    const [hideLoadding, sethideLoadding] = useState(true);
    let listProducts = useSelector(state => state.listProducts);
    let typingTimeoutRef = useRef(null);
    let { pathUrl } = props;
    let dispatch = useDispatch();

    let onHideSearch = (ishide) => {
        if (ishide) {
            document.querySelector(".navbar--icon__search__input").style.transform = 'translateY(-100%)';
            setvalueInput('');
            setlistSearch([])
            document.body.style.overflow = 'visible';

        }
        else {
            document.querySelector(".navbar--icon__search__input").style.transform = 'translateY(0)';

            document.body.style.overflow = 'hidden';
        }
        //sethideSearch(!hideSearch)
    }
    let onValueChange = (e) => {
        let value = e.target.value;
        setvalueInput(value);
        sethideLoadding(false);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            sethideLoadding(true);
            setlistSearch(findSearch(listProducts, value));
        }, 500)
    }

    let onAddProductView = (value) => {
        dispatch(actions.addProductView(value));
        document.querySelector(".navbar--icon__search__input").style.transform = 'translateY(-100%)';
        setvalueInput('');
        setlistSearch([])
        document.body.style.overflow = 'visible';
    }

    listSearch.map((value) => {
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
    let list = listSearch.map((value, index) => {

        return (

            <div className="col-lg-3 col-6 col-sm-4" key={value.id}>

                <div onClick={() => { onAddProductView(value) }}>
                    <Link to={`/products/${value.id}`} exact='true'>
                        <img src={value.img} alt="anh" />
                    </Link>

                </div>


                {/* <div><img src={value.img} alt="anh" /></div> */}
                <h4>{value.name}</h4>
                <h5>${value.price}</h5>

            </div>
        )

    });

    return (
        <div className="navbar--icon__search">
            <i className="fa fa-search d-lg-block d-none" onClick={() => { onHideSearch(false) }}></i>
            <div className={`navbar--icon__search__input`} >
                <input placeholder="Search beer, wine, extra..."
                    value={valueInput}
                    onChange={onValueChange}
                />
                <i className="fa fa-search"></i>
                <i className="fa fa-times" onClick={() => { onHideSearch(true) }}></i>

                {list.length > 0 ? (<div className="navbar--icon__search__list row">

                    {list}
                </div>) : null}

                {hideLoadding ? null : (<div className="navbar--icon__search__load">
                    <div className="spinner-border text-secondary" >

                    </div>
                </div>)}


            </div>
        </div>
    );
}

export default Search;