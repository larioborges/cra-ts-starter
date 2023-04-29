import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import React, { FormEventHandler } from 'react';
import { Gender, User } from 'types/components/User';

const UserForm: React.FC<{ onSubmit: FormEventHandler<HTMLFormElement>; user: User; submitText: string }> = ({
  onSubmit = () => {},
  submitText = 'Add User',
  user,
}): JSX.Element => {
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
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={user?.gender}
        name="radio-buttons-group"
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
