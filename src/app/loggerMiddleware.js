
export default function loggerMiddleware(store) {
    console.log("Outter logger function");

    //next is a function
    return function (next) {
        console.log("inner next function ");

        // called for every dispatch
        return function (action) {
            console.log("LOGGER ", action, typeof action);

            let result;

            // next: forward action to next middleware or
            // reducers
            result = next(action);

            return result;
        }
    }
}