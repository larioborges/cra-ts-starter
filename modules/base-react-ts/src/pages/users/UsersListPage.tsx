import Button from '@mui/material/Button';
import UserList from 'components/Users/UserList';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from 'redux/api';

const UsersListPage: React.FC<{}> = (): JSX.Element => {
  const { data: users, error, isError, isLoading } = useGetUsersQuery();
  return (
    <React.Fragment>
      <h1>Users List</h1>

      <Link to="/users/create">
        <Button
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
        >
          CREATE USER
        </Button>
      </Link>

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
