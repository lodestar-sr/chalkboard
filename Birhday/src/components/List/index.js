import React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

import { getInitials } from '../../utils/getInitials';

const PREFIX = 'people-list';
const classes = {
  root: `${PREFIX}-root`,
  listItem: `${PREFIX}-list-item`,
  personInfo: `${PREFIX}-person-info`
};

const Root = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '400px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [`& .${classes.listItem}`]: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.border}`,
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.border,
    },
    '&:last-of-type': {
      borderBottom: `1px solid ${theme.palette.border}`,
    },
    '& .MuiTypography-root': {
      '&:first-of-type': {
        fontWeight: 'bold',
      }
    }
  },
  [`& .${classes.personInfo}`]: {
    marginLeft: theme.spacing(2),
  }
}));

const PeopleList = ({
  people,
}) => {
  const history = useHistory();

  const handleSelect = (id) => {
    history.push(`/home/${id}`);
  };

  return (
    <Root className={classes.root}>
      <Box display="flex" justifyContent="center" mb={1}>
        <Typography variant="h5">Birthdays</Typography>
      </Box>
      {
        people?.length > 0 && people.map((person, index) => (
          <Box className={classes.listItem} key={index} onClick={() => handleSelect(person.id)}>
            <Avatar>{getInitials(person.name)}</Avatar>
            <Box className={classes.personInfo}>
              <Typography>{person.name}</Typography>
              <Typography>{person['date_of_birth']}</Typography>
            </Box>
          </Box>
        ))
      }
    </Root>
  )
};

export default PeopleList;
