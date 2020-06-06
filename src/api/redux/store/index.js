import { createStore } from "redux"

const initialState = {
    authenticated: false, 
    questions: [],
    questionSelected: null
};

const reducer = (state = initialState, action) => {
    if (action.type === "LOAD_QUESTIONS") {
      return {
        ...state, 
        questions: action.allQuestions
      };
    } else if (action.type === 'SELECT_QUESTION') {
      return {
        ...state, 
        questionSelected: {
          rowNum: action.rowNum,
          ...action.selection
        }
      };
    } else if (action.type === 'SAVE_EDIT') {
      const updatedQuestion =  {
          ...state.questions, 
        [action.rowNum]: action.updatedQuestion
      };
      return {
          ...state, 
          questions: {
            ...updatedQuestion
          }
        }
    }
  
    return state;
  }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;