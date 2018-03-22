
import React, {Component} from "react";
import PropTypes from "prop-types";


//demonstration to use redux directly
import store from "../store";
import * as actions from "../actions";
export default class About extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    componentDidMount() {
        this.unsubscribeFn = store.subscribe( () => {
            console.log("About subscribe");
            this.forceUpdate();
        })

        this.handle = setInterval(() => {
            console.log("Timer", Math.random());
        },2000)
    }

    componentWillUnmount(){
        this.unsubscribeFn();
        clearInterval(this.handle);
    }
    increment = () => {
        let action = actions.increment(1);
        store.dispatch(action);
    }

    decrement = () => {
        store.dispatch(actions.decrement(1));
    }
    
    render() {
        console.log("About render")
        let state = store.getState();
        let counter = state.counter;
        return (
            <div> 
            <h2>About</h2>
            <p> Counter {counter}</p>
            <button onClick ={this.increment}>+1</button>
            
            <button onClick ={this.decrement}>-1</button>
            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}