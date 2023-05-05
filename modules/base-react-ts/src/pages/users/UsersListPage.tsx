import UserList from 'components/Users/UserList';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import React from 'react';
import { useGetUsersQuery } from 'redux/api';

const UsersListPage: React.FC<{}> = (): JSX.Element => {
  const { data: users, error, isError, isLoading } = useGetUsersQuery();
  return (
    <React.Fragment>
      <h1>Users List</h1>
      <Loader isLoading={isLoading} />
      <ErrorMsg
        isError={isError}
        errorMsg={(error as any)?.data?.errorMsg}
      />
      <UserList users={users} />
    </React.Fragment>
  );
};

export default UsersListPage;
