import ActionTypes from "../actionType"

const initalState = [];

const ProductsReducer =(state= initalState, action) =>{
    switch (action.type) {
        case ActionTypes.getProducts.PRODUCTS:
          return state = action.payload;
          default:
            return state;
    }

}

export default ProductsReducer;