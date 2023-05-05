import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import UserForm from 'components/Users/UserForm';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetUserQuery } from 'redux/api';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  const params = useParams();
  const { userId = '0' } = params;
  const { data: user, isLoading, isError, error } = useGetUserQuery(userId);
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
          onSubmit={() => {}}
          submitText="Update User"
        />
      )}
      <NavLink
        color="text.primary"
        to="/users"
      >
        Back
      </NavLink>
    </React.Fragment>
  );
};

export default EditUserPage;
