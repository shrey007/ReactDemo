import React from "react";

import PropTypes from "prop-types";

//default export
import Header from "./components/Header";
import Footer from "./components/Footer";
  
export class App extends React.Component {
    constructor() {
        super();
        console.log("App comp created");
    }

    //ES NEXT static values inside class
    static childContextTypes = {
        discount: PropTypes.string,
        theme: PropTypes.string
    }

    // keyword method
    getChildContext() {
        return {
            discount: "25%",
            theme: 'red'
        }
    }

    // creates and returns virtual dom
    // immutable
    render() {
        console.log("App render");
        // JSX
        return (
            <div>
               
                <Header appTitle="React App" > 
                   <h1>React App 2</h1>
                </Header>
                
                {this.props.children}
                <Footer  
                        year={2018} >
                    <p>contact time: 8:00 - 5:00 pm</p>
                    <p> US Time 9:00 - 4:00 pm </p>
                </Footer>
            </div> 
        )
    }
}

