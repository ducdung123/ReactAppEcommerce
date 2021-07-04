import React, { useState, useEffect } from 'react';
import './OurProducts.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ListProducts/ProductItem';
import QuichView from '../../components/ListProducts/QuichView/QuichView';
import Compare from '../../components/ListProducts/Compare/Compare';


function OurProducts(props) {

    let { match } = props;
    let listProducts = useSelector(state => state.listProducts);
    const [valueQuickView, setvalueQuickView] = useState(null);
    const [filter, setFilter] = useState('A-Z');
    useEffect(() => {
        window.scrollTo(0, 0)

    }, []);

    let onSelectFilter = (e) => {

        setFilter(e.target.value)
    }

    let onHideQuickView = (param) => {
        document.querySelector('.quickview').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.quickview__content').style.transform = 'translate(-50%, -50%) scale(1)';
            document.querySelector('.quickview__content').style.opacity = '1';
        }, 100);
        setvalueQuickView(param)
    }

    listProducts.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        let priceA = Number(a.price);
        let priceB = Number(b.price);
        if (filter === 'A-Z') {
            if (nameA < nameB) {
                return -1;
            }
            else if (nameA > nameB) {
                return 1;
            }
            return 0;
        }

        else if (filter === 'Z-A') {
            if (nameA > nameB) {
                return -1;
            }
            else if (nameA < nameB) {
                return 1;
            }
            return 0;
        }
        else if (filter === 'l-h') {
            if (priceA < priceB) {
                return -1;
            }
            else if (priceA > priceB) {
                return 1;
            }
            return 0;
        }
        else if (filter === 'h-l') {
            if (priceA > priceB) {
                return -1;
            }
            else if (priceA < priceB) {
                return 1;
            }
            return 0;
        }
    })


    let RenderListProducts = listProducts ? listProducts.map((value, index) => {
        return (
            <ProductItem key={value.id} value={value} hideQuickView={onHideQuickView} />
        )
    }) : null;
    return (
        <div className="ourproduct">
            <h1>{match.params.ourproduct}</h1>
            <div className="ourproduct__content">
                <div className="ourproduct__content__title">
                    <div>
                        <label for="filter">Filter by:</label>
                        <select onChange={onSelectFilter} id="filter">
                            <option value='A-Z'>Alphabetically, A-Z</option>
                            <option value='Z-A'>Alphabetically, Z-A</option>
                            <option value='l-h'>Price, low to high</option>
                            <option value='h-l'>Price, high to low</option>
                        </select>
                    </div>
                    <p className="d-md-block d-none">We found <span>{RenderListProducts.length} products</span> available for you</p>
                </div>
                <div className="ourproduct__content__products">
                    {RenderListProducts}
                </div>
            </div>


            <QuichView value={valueQuickView} />
            <Compare />
        </div>
    );
}

export default OurProducts;