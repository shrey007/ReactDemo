import React from "react";

import PropTypes from "prop-types";
//default export
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./cart/components/Cart";
import Counter from "./containers/CounterContainer";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ProductList from "./product/containers/ProductList";
import ReduxCart from "./redux-cart/containers/Cart";
import {BrowserRouter as Router,
        Route,
        Switch,
        Redirect} from 'react-router-dom'; 

import {App} from "./App";

export default function Routes(props){
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/about" component={About} />
                    <Route path="/counter" component={Counter}/>
                    <Route path="/redux-cart" component={ReduxCart}/>
                    <Route path="/product" component ={ProductList}/>
                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>

    )
}