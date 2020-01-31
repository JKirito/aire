import { ADD_POLLS } from "./pollingConstants";

const initialState = {
  livepolls: [
    {
      id: "123",
      hostname: "Arpit",
      data: [1, 0, 0, 1, 1, 1, 0]
    },
    {
      id: "321",
      hostname: "Lucifer",
      data: [1, 1, 1, 0, 1, 0, 0]
    }
  ]
};

const pollingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POLLS: {
      state.livepolls.push(action.payload);
      return state;
    }
    default:
      return state;
  }
};
export default pollingReducer;
