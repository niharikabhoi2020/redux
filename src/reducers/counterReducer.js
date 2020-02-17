const initialState = {
  counter: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER_FROM_SAGA":
      return { ...state, counter: state.counter + action.payload.count };
    case "DECREMENT_COUNTER_FROM_SAGA":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
