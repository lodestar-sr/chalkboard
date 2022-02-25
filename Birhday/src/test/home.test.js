import React from "react";
import { render } from '@testing-library/react';

import People from '../containers/People';
import AppProviders from '../context/appProviders';

describe('People list', () => {
  it('renders people list page', async () => {
    const { getByText } = render(
      <AppProviders>
        <People />
      </AppProviders>
    );

    const listTitle = getByText(/Birthdays/i);

    expect(listTitle).toBeTruthy();
  });
});

