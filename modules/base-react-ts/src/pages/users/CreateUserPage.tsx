import { Button } from '@mui/material';
import UserForm from 'components/Users/UserForm';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import { DEFAULT_USER } from 'consts';
import React, { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';

const AddUserPage: React.FC<{}> = (): JSX.Element => {
  const error = {};
  const isError = false;
  const isLoading = false;

  const createUserFormSubmit: FormEventHandler<HTMLFormElement> = event => {
    console.log('CREATE USER');
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <h1>Create User</h1>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <React.Fragment>
          <ErrorMsg
            isError={isError}
            errorMsg={(error as any)?.data?.errorMsg}
          />
          <UserForm
            user={DEFAULT_USER}
            onSubmit={createUserFormSubmit}
            submitText="Add User"
          />
        </React.Fragment>
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

export default AddUserPage;
