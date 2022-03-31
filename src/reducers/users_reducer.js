import { findAndReplaceUser, sortUsers } from "../helpers";
import { UPDATE_USER, ADD_USERS_LIST, SORT_USERS, SET_LOADING } from "../actions/user_actions";

const defaultState = {
  loading: false,
  users: [],
};

const userReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return {
        users: findAndReplaceUser(state.users, payload),
      };
    case ADD_USERS_LIST:
      return {
        loading: false,
        users: payload,
      };
    case SORT_USERS:
      return {
        users: sortUsers(state.users, payload),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
