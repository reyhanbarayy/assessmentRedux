import ActionTypes from "../actionType";

const initialState=0;

const ProductReducer =(state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.getProduct.PRODUCT:
            return state= action.payload;
    
        default:
            return state
    }
}

export default ProductReducer;