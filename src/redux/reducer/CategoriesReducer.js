import ActionTypes from "../actionType"

const initalState = [];

const categoriesReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.get.CATEGORİES:
            return state= action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;