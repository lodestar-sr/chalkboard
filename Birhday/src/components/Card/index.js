import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useHistory } from 'react-router';

import { getInitials } from '../../utils/getInitials';

const PREFIX = 'detail-card';
const classes = {
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
};

const Root = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '400px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& .MuiTypography-h5': {
      fontWeight: 'bold'
    }
  },
  [`& .${classes.avatar}`]: {
    width: '80px',
    height: '80px',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  }
}));

const PersonCard = ({ person }) => {
  const history = useHistory();

  const age = useMemo(() => {
    if (person && person['date_of_birth']) {
      return new Date().getFullYear() - moment(person['date_of_birth'], 'MM-dd-yyyy').year();
    }
  }, [person]);

  const handleBack = () => {
    history.push('/home');
  };

  return (
    <Root className={classes.root}>
      { person && (
        <>
          <Avatar className={classes.avatar}>{getInitials(person.name)}</Avatar>
          <Typography variant="h5">{person.name}</Typography>
          <Typography mt={1} mb={3}>
            {age} years old
          </Typography>
        </>
      )}
      <Button variant="contained" onClick={handleBack}>Go back</Button>
    </Root>
  )
};

export default PersonCard;
