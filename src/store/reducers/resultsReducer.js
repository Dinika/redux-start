import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_COUNTER:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.payload.currentCounterValue}),
      }
    case actionTypes.REMOVE_COUNTER:
      const updatedResults = state.results.filter( (result) => {
        return result.id !== action.payload.idToRemove
      });
      return {
        ...state,
        results: updatedResults,
      }
    default:
      return state;
  }
}

export default resultsReducer;
