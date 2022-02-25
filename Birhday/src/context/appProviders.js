import React from 'react';

import { PeopleProvider } from './people.context';

function AppProviders({ children }) {
  return (
    <PeopleProvider>
      {children}
    </PeopleProvider>
  );
}

export default AppProviders;
