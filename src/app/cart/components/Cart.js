import React, {Component} from "react";
import PropTypes from "prop-types";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ {id: 1, name: 'Product 1', price: 100, qty: 1}],
            amount: 0,
            count: 0,

            flag: true
        }
        // ES5 way    
       // this.removeItem = this.removeItem.bind(this);
    }

    recalculate(items) {
        let amount =0;
        let count = 0;
        for(let item of items){
            amount += item.qty*item.price;
            count += item.qty;
        }
        this.setState({
            amount,
            count
        })
    }
    addItem() {
        let id = Math.ceil(Math.random() * 100000)
        let item = {
            id, // syntatic sugar id: id
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        
        //immutability for array
        let newItems =[...this.state.items,item];
        this.setState({
            items: newItems
        })
        this.recalculate(newItems);
    }
    //ES next way
    removeItem = (id)=> {
        console.log("removeItem",id);
        let newItms =this.state.items.filter(item => item.id != id);
        this.setState({
            items: newItms
        })
        this.recalculate(newItms);
    }
    // ES next
    updateItem = (id, qty) => {
        console.log("updateItem",id,qty);
        qty = parseInt(qty);
        //this.state.items.find(item => item.id == id).qty = qty;
        let newItems =this.state.items.map(item => {
                if(item.id != id){
                    return item;
                }
            //     let newitem = Object.assign({}, item,{qty})
            //     return newitem;
            //    es Next
                 return {...item, qty:qty}
        });
        this.setState({
            items: newItems
        });   
        this.recalculate(newItems);
    }

    empty() {

        this.setState({
            items : []
        })

    }

    //dummy
    refresh() {
        this.setState({
            flag: this.state.flag
        })
    }
    
    componentWillMount(){
        console.log("Count will mount");
        this.recalculate(this.state.items);
    }

    render() {
        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={ ()=> this.addItem()}>
              Add
            </button>

            <button onClick={ ()=> this.empty()}>
              Empty
            </button>

            <button onClick={ ()=> this.refresh()}>
              Refresh
            </button>
            <CartList items={this.state.items}
                onRemove ={this.removeItem}
                onUpdate = {this.updateItem}
            />
            <CartSummary amount ={this.state.amount} count ={this.state.count}/>
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}