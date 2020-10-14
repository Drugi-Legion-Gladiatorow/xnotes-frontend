// eslint-disable-next-line
import { InitialState } from '../contexts/AuthContextProvider';

export interface Action {
  type: string;
  payload: InitialState;
}

const authReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
