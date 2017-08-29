import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/type';

const INTIAL_STATE = { email: '', password: '', user: null, error: '' };

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      // redux automatic overwrite same key
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: '',
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication failed.',
        password: '',
        loading: false,
      };
    default:
      return state;
  }
};
