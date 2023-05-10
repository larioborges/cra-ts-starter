import Button from '@mui/material/Button';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import UserForm from 'components/Users/UserForm';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery } from 'redux/api';
import { User } from 'types/user';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  const params = useParams();
  const { userId = '0' } = params;
  const { data: user, isLoading, isError, error } = useGetUserQuery(userId);

  const updateUser = (user: User): void => {
    console.log('UPDATE USER');
    console.log(user);
  };

  return (
    <React.Fragment>
      <h1>Edit User</h1>
      <Loader isLoading={isLoading} />
      <ErrorMsg
        isError={isError}
        errorMsg={(error as any)?.data?.errorMsg}
      />
      {user != null && (
        <UserForm
          user={user}
          handleUserSubmit={updateUser}
          submitText="Update User"
        />
      )}
      <Link to="/users">
        <Button
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
        >
          BACK
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default EditUserPage;
