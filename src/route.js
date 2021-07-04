import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import OurProducts from './pages/OurProducts/OurProducts';
import NotFound from './pages/NotFound/NotFound';
import ProductView from './pages/ProductView/ProductView';
import Cart from './pages/Cart/Cart';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => { return <HomePage /> }
    },
    {
        path: '/collections/:ourproduct',
        exact: false,
        main: ({ match }) => { return <OurProducts match={match} /> }
    },
    {
        path: '/products/:product',
        exact: false,
        main: () => { return <ProductView /> }
    },
    {
        path: '/cart',
        exact: false,
        main: () => { return <Cart /> }
    },
    {
        path: '*',
        exact: false,
        main: () => { return <NotFound /> }
    }
];

export default routes;