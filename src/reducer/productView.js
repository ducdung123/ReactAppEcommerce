import * as types from '../contants/types';

// let FindIndex = (array, id) => {
//     let result = -1;
//     for (let i in array) {
//         if (array[i].id === id) {
//             return i;
//         }
//     }
//     return result;
// }

let myReducer = (state = {}, action) => {
    let newState = null;
    switch (action.type) {
        case types.ADD_PRODUCT_VIEW:{
            newState = {...state};
            newState = action.value;
            return {...newState};
        }
        case types.ADD_WISHLIST:{
            newState = {...state};
            newState.wishlist = true;
            return {...newState};
        }
        case types.DELETE_WISHLIST:{
            newState = {...state};
            newState.wishlist = false;
            return {...newState};
        }
        default:
            return {...state};

    }
}

export default myReducer;