import { EDIT_HOSTNAME } from "./homeConstants";

export const changeHostname = hostname => {
  return {
    type: EDIT_HOSTNAME,
    payload: hostname
  };
};
