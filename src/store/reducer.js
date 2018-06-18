const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload.value,
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload.value,
      }
    case 'STORE_COUNTER':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}),
      }
    case 'REMOVE_COUNTER':
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

export default reducer;