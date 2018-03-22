import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Counter from "../components/Counter";

import * as actions from "../actions";


// called by container
// on every subscribe
// state = store.getState()
// {counter: 1000}
// pure function
// returns props, thaht will be passed to component
function mapStateToProps(state){
    console.log("counter mapStateToProps",state);

    return{
        counter: state.counter
    }

}

// dispatch
// container calla this method
// when, on evry object creation,not subscription
// returns props that contains methods

function mapDispatchToProps(dispatch){
    console.log("Counter container mapDispatchToProps");
    return {
        //bindActionCreators returns a new function
        //that bind actions.increment and dispatch
        //together
        increment : bindActionCreators(actions.increment , dispatch),

        // increment: function(){
        //     let action = actions.increment(1);
        //     dispatch(action);
        // },

        decrement: function(){
            let action = actions.decrement(1);
            dispatch(action);
        }
    }
}

// let connectFn = connect (mapStateToProps,mapDispatchToProps);
// // store is exposed as context variable from Provider
// // Provider is main.js
// let CounterContainerComponent = connectFn(Counter);

// export default CounterContainerComponent;

export default connect(mapStateToProps,mapDispatchToProps) (Counter);