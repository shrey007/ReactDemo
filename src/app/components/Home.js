import React from 'react';

//state

export default class Home extends React.Component{
    constructor(props){
        super(props);

        // state is keyword for react
        // mutable
        this.state = {
            counter: 0
        }
        
    }
    
    increment() {
        //Bad, mutating state directly
        this.state.counter++;
        console.log("Counter", this.state.counter);
        this.forceUpdate();
    }
    
    decrement() {
        console.log("before", this.state.counter);
        this.setState({
            counter: this.state.counter - 1
        })
        console.log("after", this.state.counter);
    }
    render(){
        console.log("Home render", this.state.counter);

        return (
            <div>
                <h2>Home</h2>
                <p> Counter: {this.state.counter} </p>
                <button onClick ={() => this.increment()}>+1 </button>
                <div onClick ={() => this.decrement()}><br/>
                    <div onClick ={() => this.decrement()}>
                        <button onClick ={() => this.decrement()}>-1 </button>
                    </div>
                </div>            
            </div>
        )
    }
}