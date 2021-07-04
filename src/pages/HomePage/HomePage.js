import React from 'react';
import ProductContent from '../../components/ProductContent/ProductContent';
import ListProducts from '../../components/ListProducts/ListProducts';
import LiqueurAndSpirit from '../../components/LiqueurAndSpirit/LiqueurAndSpirit';
import Blog from '../../components/Blog/Blog';


function HomePage() {
    return (
        <div>
            <ProductContent />
            <ListProducts />
            <LiqueurAndSpirit />
            <Blog />
        </div>
    );
}

export default HomePage;