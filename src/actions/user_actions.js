export const UPDATE_USER = "UPDATE_USER";
export const ADD_USERS_LIST = "ADD_USERS_LIST";
export const SORT_USERS = "SORT_USERS";
export const SET_LOADING = "SET_LOADING";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const addUsersList = (users) => {
  return {
    type: ADD_USERS_LIST,
    payload: users,
  };
};

export const sortUsers = (key) => {
  return {
    type: SORT_USERS,
    payload: key,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
