import {
  LOGIN_SUCCESS,
} from "constants/ActionTypes";
const auth = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLogin: true,
        error: null
      };

    default:
      return state;
  }
};

export default auth;
