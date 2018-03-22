import React from "react";

import PropTypes from "prop-types";
//default export
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./cart/components/Cart";
import About from "./components/About";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router,
        Route,
        Switch,
        Redirect} from 'react-router-dom'; 
export class App extends React.Component {
    constructor() {
        super();
        console.log("App Created");
    }
    //ES NEXT static values inside class
    static childContextTypes ={
        discount : PropTypes.string,
        theme : PropTypes.string
    }
    //keyword method
    getChildContext(){
        return {
            discount : "25%",
            theme : 'red'
        }
    }
    render(){
        console.log("App render");
        return(
            <Router>
            <div>
                <h1> React App </h1>
                <Header appTitle ="React Application"/>
                <Switch>
                <Route path ="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route path ="*" component={NotFound} />
                </Switch>
                <Footer appTitle ="React" year ={2018} />
            </div>
            </Router>
        )
    }

}