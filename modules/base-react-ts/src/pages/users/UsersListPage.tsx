import UserList from 'components/Users/UserList';
import React from 'react';
import { useGetUsersQuery } from 'redux/api';
import { userIds, userMap } from './userData';

const UsersListPage: React.FC<{}> = (): JSX.Element => {
  // console.log(userMap);
  const { data, error, isLoading } = useGetUsersQuery();
  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);
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
