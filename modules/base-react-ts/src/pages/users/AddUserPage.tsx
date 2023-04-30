import UserForm from 'components/Users/UserForm';
import { DEFAULT_USER } from 'consts';
import React from 'react';

const AddUserPage: React.FC<{}> = (): JSX.Element => {
  return (
    <UserForm
      user={DEFAULT_USER}
      onSubmit={() => {}}
      submitText="Add User"
    />
  );
};

export default AddUserPage;
