import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const removeCounter = (state, action) => {
  const updatedResults = state.results.filter( (result) => {
    return result.id !== action.payload.idToRemove
  });
  return updateObject(state, {results: updatedResults})
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_COUNTER:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.payload.currentCounterValue})})
    case actionTypes.REMOVE_COUNTER:
      return removeCounter(state, action)
    default:
      return state;
  }
}

export default resultsReducer;
