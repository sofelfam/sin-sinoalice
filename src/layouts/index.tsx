import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import '@fontsource/noto-sans-jp'

import Footer from './Footer';
import Header from './Header';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  }),
);

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    setOpen(localStorage.getItem('drawer') === 'open' ? true : false);
    setDarkMode(localStorage.getItem('darkMode') === 'on' ? true : false);
  }, []);

  const handleDrawerOpen = () => {
    localStorage.setItem('drawer', 'open');
    setOpen(true);
  };

  const handleDrawerClose = () => {
    localStorage.setItem('drawer', 'close');
    setOpen(false);
  };

  const handleDarkModeOn = () => {
    localStorage.setItem('darkMode', 'on');
    setDarkMode(true);
  };
  const handleDarkModeOff = () => {
    localStorage.setItem('darkMode', 'off');
    setDarkMode(false);
  };
  
  const muiTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? theme.palette.grey[800] : theme.palette.primary.main
      },
    },
    overrides: {
      MuiListSubheader: {
        root: {
          fontSize: '2rem',
          fontFamily: ['"Segoe UI"', '"Noto Sans JP" !important'].join(','),
        },
      },
      MuiTypography: {
        root: {
          fontFamily: ['"Segoe UI"', '"Noto Sans JP" !important'].join(','),
          color: darkMode ? theme.palette.background.default : theme.palette.text.primary + ' !important',
        },
        body1: {
          fontSize: '1.5rem',
        },
        h1: {
          fontSize: '3.2rem',
          fontWeight: 700,
          margin: '0.67em 0',
        },
        h6: {
          fontSize: '1.8rem',
        },
        caption: {
          fontSize: '1.4rem',
        },
      },
      MuiSvgIcon:{
        root: {
          fontSize:'2.4rem',
        },
      },
      MuiListItemIcon: {
        root: {
          fontSize: '3rem',
        },
      },
      MuiTooltip: {
        tooltip: {
          '& .MuiTypography-root': {
              color: theme.palette.background.default + ' !important',
          },
        },
      },
    }
  });
  
  return(
    <>
      <ThemeProvider theme={muiTheme}>
        <div className={classes.root}>
          <Header
            mobile={mobile}
            drawerWidth={drawerWidth}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            darkMode={darkMode}
            handleDarkModeOn={handleDarkModeOn}
            handleDarkModeOff={handleDarkModeOff}
          />
          
          <div className={clsx(classes.content, 
            { [classes.contentShift]: open || mobile }
          )}>
            {children}
          </div>
          
        </div>
        <Footer
          open={open}
          mobile={mobile}
          drawerWidth={drawerWidth}
        />
      </ThemeProvider>
    </>
  )
};

export default Layout;
