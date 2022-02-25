import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import { usePeople } from '../../context/people.context';
import PeopleList from '../../components/List';

const PREFIX = 'home';
const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const People = () => {
  const { people, getPeople } = usePeople();

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Root className={classes.root}>
      <PeopleList people={people} />
    </Root>
  )
};

export default People;
