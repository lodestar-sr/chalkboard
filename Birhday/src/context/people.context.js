import React, { useState } from 'react';

import * as PeopleService from '../services/people.service';

const PeopleContext = React.createContext({});

/**
 * @return {null}
 */
function PeopleProvider(props) {
  const [people, setPeople] = useState();
  const [person, setPerson] = useState();

  const getPeople = async () => {
    try {
      await PeopleService.getPeople().then((res) => {
        setPeople(res.users);
      });
    } catch (err) {
      setPeople(null);
    }
  };

  const getPerson = async (id) => {
    try {
      await PeopleService.getPerson(id).then((res) => {
        setPerson(res);
      });
    } catch (err) {
      setPerson(null);
    }
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        person,
        getPeople,
        getPerson,
      }}
      {...props}
    />
  );
}

function usePeople() {
  const context = React.useContext(PeopleContext);
  if (context === undefined) {
    throw new Error('usePeople must be used within a PeopleProvider');
  }
  return context;
}

export { PeopleProvider, usePeople };
