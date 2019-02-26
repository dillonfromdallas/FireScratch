const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log("Logged In");
      return {
        ...state,
        ...action.payload
      };
    case "LOGOUT_USER":
      console.log("Logged Out");
      return state;
    default:
      return state;
  }
};

export default authReducer;
