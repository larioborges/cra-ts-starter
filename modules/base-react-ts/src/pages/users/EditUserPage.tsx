import Button from '@mui/material/Button';
import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import UserForm from 'components/Users/UserForm';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery, useUpdateUserMutation } from 'redux/api';
import { User } from 'types/user';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  const params = useParams();
  const { userId = '0' } = params;

  const { data: user, isLoading, isError, error } = useGetUserQuery(userId);

  const [updateUser, updateUserResult] = useUpdateUserMutation();
  const {
    // data: updateResponse,
    // error: updateError,
    // isError: updateIsError,
    isLoading: updateIsLoading /* isSuccess, data */,
  } = updateUserResult;

  const handleUpdateUser = async (user: User): Promise<void> => {
    console.log('UPDATE USER');
    try {
      await updateUser(user);
    } catch (e) {
      console.log('Unexpected error', e);
    }
  };

  console.log(updateUserResult);

  return (
    <React.Fragment>
      <h1>Edit User</h1>
      <Loader isLoading={isLoading || updateIsLoading} />
      <ErrorMsg
        isError={isError}
        errorMsg={(error as any)?.data?.errorMsg}
      />
      {user != null && (
        <UserForm
          user={user}
          handleUserSubmit={handleUpdateUser}
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
