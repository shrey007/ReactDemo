
import React from "react";
import PropTypes from "prop-types";

// functional
// presentational component
export default function Counter(props) { 
        return (
            <div> 
            <h2>Counter</h2>
            <p> Counter {props.counter} </p>

            <button onClick={() => props.increment(1)}>
             +1
            </button>

            <button onClick={props.decrement}>
             -1
            </button>

            </div>
        )
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}