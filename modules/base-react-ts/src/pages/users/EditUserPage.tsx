import { Button } from '@mui/material';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import UserForm from 'components/Users/UserForm';
import React, { FormEventHandler } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery } from 'redux/api';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  const params = useParams();
  const { userId = '0' } = params;
  const { data: user, isLoading, isError, error } = useGetUserQuery(userId);

  const editUserFormSubmit: FormEventHandler<HTMLFormElement> = event => {
    console.log('UPDATE USER');
    event.preventDefault();
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
          onSubmit={editUserFormSubmit}
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
