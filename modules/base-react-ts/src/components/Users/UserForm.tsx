import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { DEFAULT_USER } from 'consts';
import React, { FormEventHandler, useCallback, useState } from 'react';
import { Gender, User } from 'types/components/User';

const UserForm: React.FC<{ handleUserSubmit: Function; user?: User; submitText: string }> = ({
  handleUserSubmit = () => {},
  submitText = 'Add User',
  user = DEFAULT_USER,
}): JSX.Element => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gender] = useState(user.gender);
  const [age, setAge] = useState(user.age?.toString());

  const getSubmitUser = useCallback(() => {
    const submitUser: User = {
      id: user.id,
      name: name?.trim(),
      email: email?.trim(),
      gender,
    };
    if (age != null && age.trim() !== '') {
      submitUser.age = parseInt(age.trim());
    }
    return submitUser;
  }, [user.id, name, email, gender, age]);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      handleUserSubmit(getSubmitUser());
      event.preventDefault();
    },
    [handleUserSubmit, getSubmitUser],
  );

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="Name"
        type="text"
        id="name"
        autoComplete="name"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="age"
        label="Age"
        name="age"
        autoComplete="age"
        autoFocus
        value={age}
        onChange={e => {
          setAge(e.target.value);
        }}
        type="number"
      />
      <FormLabel id="gender-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="Gender"
        value={gender}
        onChange={e => {
          // user.gender = e.target.value != null ? e.target.value : undefined;
          console.log(e);
        }}
        id="gender"
        name="gender"
      >
        <FormControlLabel
          value={Gender.FEMALE}
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value={Gender.MALE}
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          value={Gender.OTHER}
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {submitText}
      </Button>
    </Box>
  );
};

export default UserForm;
