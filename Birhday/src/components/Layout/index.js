import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import Header from "./Header";

const Root = styled(Box)(() => ({
  background: 'linear-gradient(#e9ecef, #dee2e6)',
  minHeight: '100vh',
  display: 'flex',
  '& main': {
    paddingTop: '64px',
    width: '100%',
  }
}));

const Layout = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="md">
          { children }
        </Container>
      </main>
    </Root>
  );
};

export default Layout;
