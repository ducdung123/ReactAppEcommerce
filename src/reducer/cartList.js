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
    let newState = null;
    let index = null;
    switch (action.type) {
        case types.GET_CARTLIST:
            state = action.products;
            return [...state];
        case types.CHANGE_NUMBER_ITEM_CART:
            //console.log(action.id, action.number);
            index = FindIndex(state, action.id);
            newState = [...state]
            if (index === -1) {
                action.value.inCart = 1;
                newState.push(action.value)
            }
            else {
                newState[index].inCart = action.number;
            }

            return [...newState];
        case types.DELETE_ITEM_CART:
            newState = [...state];
            index = FindIndex(state, action.id);
            newState.splice(index, 1);
            return [...newState];
        case types.ADD_ITEM_CART:
            newState = [...state];
            index = FindIndex(state, action.id);
            if (index === -1) {
                action.value.inCart = action.number;
                newState.push(action.value)
            }
            else {
                newState[index].inCart += action.number;
            }
            return [...newState];
        default:
            return [...state];

    }
}

export default myReducer;