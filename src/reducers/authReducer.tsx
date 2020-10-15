// eslint-disable-next-line
import { initialState, InitialState } from '../contexts/AuthContextProvider';

export interface Action {
  type: string;
  payload: InitialState;
}

const authReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
