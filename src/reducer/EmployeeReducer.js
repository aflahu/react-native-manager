import { EMPLOYEES_FETCH_SUCCES } from '../actions/type.js';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCES:
      return state;
    default:
      return state;
  }
};
