import { createStore } from "redux"

const initialState = {
    authenticated: false, 
    questionSelected: null
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SELECT_QUESTION') {
      return {
        ...state, 
        questionSelected: action.selection
      };
    }
  
    return state;
  }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;