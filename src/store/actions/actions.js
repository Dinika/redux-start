export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_COUNTER = 'STORE_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function add(payload) {
  return {
    type: ADD,
    payload: {...payload},
  }
}

export function subtract(payload) {
  return {
    type: SUBTRACT,
    payload: {...payload},
  }
}

export function storeCounter(payload) {
  return {
    type: STORE_COUNTER,
    payload: {...payload},
  }
}

export function removeCounter(payload) {
  return {
    type: REMOVE_COUNTER,
    payload: {...payload},
  }
}