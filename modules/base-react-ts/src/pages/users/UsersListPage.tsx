import Button from '@mui/material/Button';
import UserList from 'components/Users/UserList';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDeleteUserMutation, useGetUsersQuery } from 'redux/api';

const UsersListPage: React.FC<{}> = (): JSX.Element => {
  const { data: users, error, isError, isLoading } = useGetUsersQuery();

  const [deleteUser, result] = useDeleteUserMutation();
  const {
    // error: deleteError,
    // isError: deleteIsError,
    // isLoading: deleteIsLoading,
    // isSuccess: deleteIsSuccessful,
    data: deleteResponseData,
  } = result;

  console.log('deleteResponseData', deleteResponseData);
  console.log('delete result', result);

  const handleDelete = useCallback((userId: number): void => {
    console.log('DELETE CLICK', userId);
    try {
      void deleteUser(userId);
    } catch (e) {
      console.log('Unexpected error', e);
    }
  }, []);

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
      <UserList
        users={users}
        handleDelete={handleDelete}
      />
    </React.Fragment>
  );
};

export default UsersListPage;
