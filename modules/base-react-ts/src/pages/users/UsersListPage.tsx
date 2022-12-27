import UserList from 'components/Users/UserList';
import React from 'react';
import { userIds, userMap } from './userData';

const UsersListPage: React.FC<{}> = (): JSX.Element => {
  console.log(userMap);
  return (
    <React.Fragment>
      <h1>Users List</h1>
      <UserList
        userMap={userMap}
        userIds={userIds.map(id => parseInt(id))}
      />
    </React.Fragment>
  );
};

export default UsersListPage;
