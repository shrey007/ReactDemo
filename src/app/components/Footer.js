import React from "react";
import PropTypes from "prop-types";
export default function Footer(props){
    console.log("Footer render called");

    return (
    
        <div>
            <hr />
            <p>Copyrights @{props.appTitle}, {props.year}</p>
            {props.children}
        </div>
    )
}

Footer.propTypes = {
    appTitle : PropTypes.string,
    year : PropTypes.number.isRequired
}

Footer.defaultProps ={
    appTitle : 'Product App'
}