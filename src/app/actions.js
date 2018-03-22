// healper methods to create action objects

//al actions creaters defined in actions.js

export function increment(value) {
    console.log("Increment value action ", value);
    return {
        type: 'INCREMENT',
        payload: {
            value
        }
    }
}

export function decrement(value) {
    console.log("Decrement value action ", value);
    return {
        type: 'DECREMENT',
        payload: {
            value
        }
    }
}