import UserForm from 'components/Users/UserForm';
import { DEFAULT_USER } from 'consts';
import React from 'react';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <UserForm
      user={DEFAULT_USER}
      onSubmit={() => {}}
      submitText="Edit User"
    />
  );
};

export default EditUserPage;
