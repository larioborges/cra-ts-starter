import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import React, { FormEventHandler } from 'react';
import { Gender, User } from 'types/components/User';

const UserForm: React.FC<{ handleUserSubmit: Function; user: User; submitText: string }> = ({
  handleUserSubmit = () => {},
  submitText = 'Add User',
  user,
}): JSX.Element => {
  const onSubmit: FormEventHandler<HTMLFormElement> = event => {
    const { name, email, gender, age } = event.target as any;
    handleUserSubmit({
      id: user.id,
      name: name?.value,
      email: email?.value,
      gender: gender?.value,
      age: age?.value,
    });
    event.preventDefault();
  };
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
        value={user?.name}
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
        value={user?.email}
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
        value={user?.age}
        type="number"
      />
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="Gender"
        value={user?.gender}
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
