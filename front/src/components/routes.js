import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Products from './pages/products/products';
import AddProducts from './pages/products/add';
import Catalog from './pages/client/catalog';

const Routes = () => (
    <BrowserRouter basename="/front">
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/add" component={AddProducts} />
            <Route exact path="/client" component={Catalog} />
        </Switch>
    </BrowserRouter>
);

export default Routes;