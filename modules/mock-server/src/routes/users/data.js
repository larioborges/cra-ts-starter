const users = [
  {
    id: 1,
    name: 'Larry Berry',
    email: 'larry@berton.com',
    age: 20,
    gender: 0,
    deleted: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: 2,
    name: 'Herb Mallock',
    email: 'herb@mallock.com',
    gender: 2,
    age: 80,
    deleted: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: 3,
    name: 'Barry Right',
    email: 'barry@right.com',
    age: 10,
    gender: 1,
    deleted: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

const getLatestId = (users) => users.reduce((max, u) => u.id > max ? u.id : max, 0) + 1;

const getFindUserError = (userMatches) => {
  const err = {}
  if (userMatches.length === 0) {
    err.errorMsg = 'There is no user with that user ID';
    err.errorCode = 404;
  } else if (userMatches.length > 1) {
    err.errorMsg = 'More than 1 user with a matching ID was found';
    err.errorCode = 500;
  }
  return err;
};

const getUserById = (users, userId) => {
  const userMatches = users.filter(u => !u.deleted && u.id == userId);
  const user = userMatches.length === 1 ? userMatches[0] : null;
  const { errorMsg, errorCode } = getFindUserError(userMatches);

  return {
    user,
    responseCode: user != null ? 200 : errorCode,
    errorMsg,
  };
};

const getActiveUsers = users => users.filter(u => !u.deleted);

const addUser = (users, newUser) => {
  newUser.id = getLatestId(users);
  newUser.createdAt = Date.now();
  newUser.updatedAt = Date.now();
  users.push(newUser);
  return newUser;
};

const updateUser = (users, updatedUser) => {
  const { user, responseCode, errorMsg } = getUserById(users, updatedUser.id);

  if (user) {
    // TODO Lario: update the user in the list
    users = users.map(u => u.id === updatedUser.id ? {...u, ...updatedUser} : u);
    return {
      updatedUser,
      responseCode,
      errorMsg,
    }
  }

  return {
    responseCode,
    errorMsg,
  };
};

const deleteUserById = (users, userId) => {
  const { user, responseCode, errorMsg } = getUserById(users, userId);

  const response = {
    responseCode,
    errorMsg,
  };

  if (user) {
    user.deleted = true;
    response.deletedUserId = user.id;
  }

  return response;
}

module.exports = {
  users,
  getActiveUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
};
