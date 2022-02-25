import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {usePeople} from "../../context/people.context";
import PersonCard from "../../components/Card";

const PREFIX = 'person';
const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2rem',
  },
}));

const PersonDetail = ({ match }) => {
  const { person, getPerson } = usePeople();

  useEffect(() => {
    if (match?.params.id) {
      getPerson(match.params.id);
    }
  }, []);

  return (
    <Root className={classes.root}>
      <PersonCard person={person} />
    </Root>
  )
};

export default PersonDetail;
