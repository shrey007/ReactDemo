import React, {Component} from 'react';

//React.component== Component
import{NavLink} from "react-router-dom";

export default class Header extends Component{
    constructor(props){
        super(props);
        console.log("Header props ",props);
    }
    render() {

        let {appTitle} = this.props;

        return (
            <div>
                {/* <h2>{appTitle}</h2> */}
                {this.props.children}
                <NavLink to ="/" exact className ="button" activeClassName="success">Home</NavLink>
                <NavLink to ="/product" className ="button" activeClassName="success">Products</NavLink>
                <NavLink to ="/cart" className ="button" activeClassName="success">Cart</NavLink>
                <NavLink to ="/counter" className ="button" activeClassName="success">Counter</NavLink>
                <NavLink to ="/redux-cart" className ="button" activeClassName="success">ReduxCart</NavLink>
                <NavLink to ="/about" className ="button" activeClassName="success">About</NavLink>
                <hr/>
            </div>
        )
    }
}