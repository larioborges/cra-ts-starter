import Button from '@mui/material/Button';
import UserForm from 'components/Users/UserForm';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/components/User';

const AddUserPage: React.FC<{}> = (): JSX.Element => {
  const error = {};
  const isError = false;
  const isLoading = false;

  const createUser = (user: User): void => {
    console.log('CREATE USER');
    console.log(user);
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
            handleUserSubmit={createUser}
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
