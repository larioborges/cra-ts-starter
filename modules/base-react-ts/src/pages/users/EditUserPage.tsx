import ErrorMsg from 'components/shared/ErrorMsg';
import Loader from 'components/shared/Loader';
import UserForm from 'components/Users/UserForm';
import React from 'react';
import { useGetUserQuery } from 'redux/api';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { data: user, isLoading, isError, error } = useGetUserQuery('1');
  console.log(user, isLoading, isError, error);
  return (
    <>
      <h1>Edit User</h1>
      <Loader isLoading={isLoading} />
      <ErrorMsg isError={isError} />
      {user != null && (
        <UserForm
          user={user}
          onSubmit={() => {}}
          submitText="Edit User"
        />
      )}
    </>
  );
};

export default EditUserPage;
