import { createStore } from "redux"

const initialState = {
    authenticated: false, 
    questionSelected: null
};

const reducer = (state = initialState, action) => {
    return state
};

const store = createStore(reducer);


export default store;