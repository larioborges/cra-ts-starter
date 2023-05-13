import Button from '@mui/material/Button';
import UserForm from 'components/Users/UserForm';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAddUserMutation } from 'redux/api';
import { User } from 'types/user';

const AddUserPage: React.FC<{}> = (): JSX.Element => {
  const [addUser, result] = useAddUserMutation();
  const { error, isError, isLoading /* isSuccess, data */ } = result;

  const createUser = async (user: Partial<User>): Promise<void> => {
    console.log('CREATE USER');
    try {
      await addUser(user);
    } catch (e) {
      console.log('Unexpected error', e);
    }
  };

  console.log('result', result);

  return (
    <React.Fragment>
      <h1>Create User</h1>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <React.Fragment>
          <ErrorMsg
            isError={isError}
            errorMsg={(error as any)?.data?.message}
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
