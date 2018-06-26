import * as actionTypes from './actionTypes';

function saveCounter(payload) {
  return {
    type: actionTypes.STORE_COUNTER,
    payload: {...payload},
  }
}

export function storeCounter(payload) {
  return (dispatch) => {
    setTimeout( () => {
      dispatch(saveCounter(payload))
    }, 2000)
  }
}

export function removeCounter(payload) {
  return {
    type: actionTypes.REMOVE_COUNTER,
    payload: {...payload},
  }
}