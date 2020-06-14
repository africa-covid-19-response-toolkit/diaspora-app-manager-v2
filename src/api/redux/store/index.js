import { createStore } from "redux"

const initialState = {
    authenticated: false, 
    questions: [],
    loading: false, 
    questionSelected: null, 
    showSuccessToastMessage: false, 
    editActionDrawerVisible: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_QUESTIONS") {
    return {
      ...state, 
      loading: action.loading
    }
  } else if (action.type === "DONE_LOADING_QUESTIONS") {
      return {
        ...state, 
        questions: action.allQuestions, 
        loading: action.loading
      };
    } else if (action.type === 'SELECT_QUESTION') {
      return {
        ...state, 
        questionSelected: {
          rowNum: action.rowNum,
          ...action.selection
        }
      };
    } else if (action.type === 'EDIT_QUESTION_ACTION') {
      return {
          ...state, 
          editActionDrawerVisible: action.editActionDrawerVisible
        }
    } else if (action.type === 'DISMISS_EDIT_ACTION_DRAWER') {
      return {
          ...state, 
          editActionDrawerVisible: action.editActionDrawerVisible
        }
    } else if (action.type === 'SAVE_EDIT_ACTION_DRAWER') {
      return {
          ...state, 
          editActionDrawerVisible: action.editActionDrawerVisible
        }
    } else if (action.type === 'SAVE_EDIT') {
      const updatedQuestion =  {
          ...state.questions, 
        [action.rowNum]: action.updatedQuestion
      };
      return {
          ...state, 
          showSuccessToastMessage: action.showSuccessToastMessage, 
          questions: {
            ...updatedQuestion
          }
        }
    } else if (action.type === "CLOSE_NOTIFICATION") {
      return {
        ...state, 
        showSuccessToastMessage: action.showSuccessToastMessage
      }
    }
    return state;
  }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;