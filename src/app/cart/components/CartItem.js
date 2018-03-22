
import React, {Component} from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty : props.item.qty
        }
    }
    //ES next
    static contextTypes = {
        discount : PropTypes.string
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            qty : nextProps.item.qty
        })
    }

    componentWillUnmount(){
        console.log("CartItem will Unmount");
    }
    onChangeText = (e) => {
        // target is the input element, real dom element
        let target = e.target;
        this.setState({
            qty: target.value
        })
    } 

    componentDidMount(){
        // all refs are resolved
        this.inputElem.focus();
        this.refs.discount.textContent = this.context.discount;
    }
    render() {
        console.log("CartItem render", this.props.item.id);
        console.log("Context", this.context.discount);
        
        let {item} = this.props;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}
                    <p ref ="discount"/>
                </td>
                <td>
                    <input value = {this.state.qty}
                        type = "number"
                        onChange ={this.onChangeText}
                        onBlur = {()=> this.props.onUpdate(item.id,this.state.qty)}
                        ref ={ (elem) => this.inputElem = elem}
                    />
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                    <button onClick={ ()=> this.props.onRemove(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}