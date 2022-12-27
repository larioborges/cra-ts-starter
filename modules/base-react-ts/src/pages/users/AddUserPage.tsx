import UserForm from 'components/Users/UserForm';
import React from 'react';

const AddUserPage: React.FC<{}> = (): JSX.Element => {
  return (
    <UserForm
      user={{}}
      onSubmit={() => {}}
      submitText="Add User"
    />
  );
};

export default AddUserPage;
