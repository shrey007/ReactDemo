
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


//PureComponent already implements shouldComponentUpdate method
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){
        console.log("Summary will receive props");
        console.log("Next props",nextProps);
        console.log("current Props",this.props);
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("Summary should update");
    //     return this.props.count!=nextProps.count || this.props.amount != nextProps.amount;
    //     //return true -> calls render method
    // }
    render() {
        console.log("CartSummary render");

        let {
            count,
            amount
        } = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}