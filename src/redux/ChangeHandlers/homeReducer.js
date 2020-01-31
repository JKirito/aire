import { EDIT_HOSTNAME } from "./homeConstants";

const initialState = {
  hostname: ""
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_HOSTNAME:
      return {
        ...state,
        hostname: action.payload
      };

    default:
      return state;
  }
};
export default homeReducer;
