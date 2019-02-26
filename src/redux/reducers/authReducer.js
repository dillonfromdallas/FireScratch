const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...action.payload
      };
    case "LOGOUT_USER":
      return state;
    case "SIGNUP_USER":
      return state;
    default:
      return state;
  }
};

export default authReducer;
