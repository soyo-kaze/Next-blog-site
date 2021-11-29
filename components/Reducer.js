/**
 * TODO: Implement useReducer()
    - For storing data.
    - Storing User
*/
export const InitialState = {
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        user: action.user,
      };
    case "USER_LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};
