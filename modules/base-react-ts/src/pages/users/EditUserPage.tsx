import UserForm from 'components/Users/UserForm';
import React from 'react';

const EditUserPage: React.FC<{}> = (): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();
  return (
    <UserForm
      user={{}}
      onSubmit={() => {}}
      submitText="Edit User"
    />
  );
};

export default EditUserPage;
