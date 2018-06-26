import * as actionTypes from './actionTypes';

export function increment() {
  return {
    type: actionTypes.INCREMENT
  }
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT
  }
}

export function add(payload) {
  return {
    type: actionTypes.ADD,
    payload: {...payload},
  }
}

export function subtract(payload) {
  return {
    type: actionTypes.SUBTRACT,
    payload: {...payload},
  }
}