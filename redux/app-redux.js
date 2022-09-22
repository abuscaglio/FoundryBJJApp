import { createStore, applyMiddleware } from "redux";
import  ThunkMiddleware from "redux-thunk";

const initialState = {
    userData: {},
};

const reducer = (state = initialState, action ) => {
    return state;
};

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
export { store };