import { ADD_POLLS } from "./pollingConstants";

export const addPoll = hostname => {
  return {
    type: ADD_POLLS,
    payload: hostname
  };
};
