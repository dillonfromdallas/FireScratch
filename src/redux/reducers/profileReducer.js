const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
