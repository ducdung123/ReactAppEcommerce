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
    switch (action.type) {
        case types.GET_WISHLIST:
            state = action.products;
            return [...state];
        case types.DELETE_WISHLIST:{
            let index = FindIndex(state, action.id);
            
            newState = [...state];
            //như này là tham chiếu sẽ thay đổi tất cả các reducer kahcs
            newState[index].wishlist = !newState[index].wishlist;
            // console.log(state)
            newState.splice(index, 1);
            
            return [...newState];
        }
        case types.ADD_WISHLIST:
            action.productItem.wishlist = !action.productItem.wishlist;
            newState = [...state];
            newState.push(action.productItem)
            
            return [...newState];
            
        default:
            return [...state];

    }
}

export default myReducer;