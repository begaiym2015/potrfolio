import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Surname" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Phone" inputProps={{ 'aria-label': 'description' }}
      />
    </form>
  );
}
