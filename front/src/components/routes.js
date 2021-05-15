import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Products from './pages/products/products';
import AddProducts from './pages/products/add';
import Catalog from './pages/client/catalog';

const Routes = () => (
    <BrowserRouter basename="/front">
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/main/products" component={Products} />
            <Route exact path="/products/main/products/add" component={AddProducts} />
            <Route exact path="/client/catalog" component={Catalog} />
        </Switch>
    </BrowserRouter>
);

export default Routes;