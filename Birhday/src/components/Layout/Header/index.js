import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const PREFIX = 'header';
const classes = {
  root: `${PREFIX}-root`,
  bar: `${PREFIX}-bar`,
};

const Root = styled(MuiAppBar)(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '64px !important',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    paddingRight: '0 !important',
    '& .MuiToolbar-root': {
      minHeight: '64px !important',
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

const Header = () => {
  return (
    <Root className={classes.root} position="fixed">
      <Toolbar className={classes.bar}>
        <Typography variant="h4" component="h4">Dashboard</Typography>
      </Toolbar>
    </Root>
  );
};

export default Header;
