import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from './services/auth';

import Products from './pages/products/products';
import ProductsDetails from './pages/products/products-details';
import Catalog from './pages/client/catalog';

const PrivateRoute = ({ component: Component, ...rest }) => (        
    <Route {...rest} render={
        props => (            
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )            
        )
    } />    
)

const Routes = () => (

    <BrowserRouter basename="/front">
        <Switch>
            <Route exact path="/client" component={Catalog} />

            <PrivateRoute exact path="/adm" component={Products} />
            <PrivateRoute exact path="/adm/products/:id" component={ProductsDetails} />
            <PrivateRoute exact path="/client" component={Catalog} />
        </Switch>
    </BrowserRouter>
);

export default Routes;