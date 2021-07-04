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

let listCompareProduct = (state = [], action) => {
    let index = null;
    let newState = null;
    switch (action.type) {
        case types.ADD_COMPARE_PRODUCT: {
            index = FindIndex(state, action.value.id);
            newState = [...state];
            if (index === -1) {
                
                if (newState.length === 5) {
                    newState.splice(0, 1);

                    newState.push(action.value)
                }
                else {
                    newState.push(action.value)
                }

            }
            return [...newState]
        }
        case types.DELETE_COMPARE_PRODUCT: {
            index = FindIndex(state, action.id);
            newState = [...state];
            newState.splice(index, 1);
            return [...newState]
        }
        default:
            return [...state];

    }
}

export default listCompareProduct;