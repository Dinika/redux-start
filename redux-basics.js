const redux = require('redux');
//store
const createStore = redux.createStore;

const initialState = {
  counter: 0,
}
const rootReducer = (state = initialState, action) => {
  if(action.type === 'INCREMENT_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  if(action.type === 'ADD_TO_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  } 
  return state;
}
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe( () => {
  console.log('[Subscription]', store);
})
//dispatch action
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'ADD_TO_COUNTER', value: 5});
console.log(store.getState());
//subscription