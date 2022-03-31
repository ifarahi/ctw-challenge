const findAndReplaceUser = (users, user) => {
  const newUsers = [...users];
  const userIndex = newUsers.findIndex((currentUser) => currentUser.id === user.id);
  newUsers[userIndex] = user;
  return newUsers;
};

const sortUsers = (users, key) => {
  const sorted = [...users].sort((userA, userB) => {
    if (typeof userA[key] === "number") {
      return userA[key] - userB[key];
    } else {
      return userA[key].localeCompare(userB[key]);
    }
  });
  return sorted;
};

export { findAndReplaceUser, sortUsers };
