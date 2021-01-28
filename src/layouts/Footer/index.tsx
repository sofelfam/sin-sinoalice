import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '5rem',
      width: '100%',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    footerShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    footerMobile: {
      width: '100%',
      marginLeft: '0',
    },
  }),
);

interface FooterProps {
  open: boolean,
  mobile: boolean,
  drawerWidth: number,
}

const Footer = (props: FooterProps) => {
  const classes = useStyles();
  
  return(
    <div className={clsx(classes.footer,
      { [classes.footerShift]: props.open, },
      { [classes.footerMobile]: props.mobile, },
    )}>
      <footer>Footer</footer>
    </div>
  )
};

export default Footer;