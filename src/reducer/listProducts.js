import * as types from '../contants/types';

let FindIndex = (array, id) => {
    let result = -1;
    for (let i in array) {
        if (array[i].id === id) {
            return i;
        }
    }
    return result;
}

let myReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_LIST_PRODUCTS:

            let newState = action.products;
            return [...newState];
        
        default:
            return [...state];

    }
}

export default myReducer;