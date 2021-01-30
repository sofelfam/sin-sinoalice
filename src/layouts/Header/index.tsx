import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import SettingsIcon from '@material-ui/icons/Settings';
import NestedList from 'src/layouts/Header/nested-list';
import { Link } from 'gatsby';
import { Hidden, Tooltip } from '@material-ui/core';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const HideOnScroll = (props: Props) => {
  const { trigger, setTrigger, children, window } = props;
  const scr = useScrollTrigger({ target: window ? window() : undefined })

  useEffect(() => {
    setTrigger(scr);
  }, [scr]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarMobile: {
      width: '100%',
      marginLeft: '0',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(1),
      },
    },
    headerTitle: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    drawerHeaderMobile: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'flex-start',
      paddingLeft: theme.spacing(3),
      flexDirection: 'column',
      justifyContent: 'center',
    },
    drawerFooter: {
      display: 'flex',
      padding: theme.spacing(0, 1),
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.grey[50],
    },
    linkMobile: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      marginBottom: '2px',
    },
  }),
);

interface HeaderProps {
  mobile: boolean,
  drawerWidth: number,
  open: boolean,
  handleDrawerOpen: () => void,
  handleDrawerClose: () => void,
  darkMode: boolean,
  handleDarkModeOn: () => void,
  handleDarkModeOff: () => void,
}

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const [trigger, setTrigger] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll
        trigger={trigger}
        setTrigger={setTrigger}
        {...props}
      >
        <AppBar
          position="fixed"
          className={clsx(classes.appBar,
          { [classes.appBarShift]: props.open, },
          { [classes.appBarMobile]: props.mobile, }
        )}>
          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => props.handleDrawerOpen()}
              edge="start"
              className={clsx(classes.menuButton, props.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.headerTitle} noWrap>
              <Link to='/' className={classes.link}>
                SIN - SINoALICE
              </Link>
            </Typography>

            <Tooltip title="Toggle dark / light theme" aria-label="Toggle dark / light theme">
              {props.darkMode ? (
                <IconButton color="inherit" onClick={() => props.handleDarkModeOff()}>
                  <Brightness7Icon />
                </IconButton>
              ) : (
                <IconButton color="inherit" onClick={() => props.handleDarkModeOn()}>
                  <Brightness4Icon />
                </IconButton>
              )}
            </Tooltip>

            <Tooltip title="Close appbar" aria-label="Close appbar">
              <IconButton
                color="inherit"
                aria-label="close header"
                onClick={() => setTrigger(true)}
                edge="end"
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Hidden smUp implementation="css">
        <SwipeableDrawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={props.open && props.mobile}
          onOpen={() => props.handleDrawerOpen()}
          onClose={() => props.handleDrawerClose()}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={classes.drawerHeaderMobile}>
            <Typography variant="h6" component={Link} to={'/'} className={classes.linkMobile}>SIN - SINoALICE</Typography>
            <Typography variant="caption" color="textSecondary">v0.0.1</Typography>
          </div>
          <Divider />
          <NestedList />
        </SwipeableDrawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={props.open && (props.open != props.mobile)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => props.handleDrawerClose()}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <NestedList />
          <Divider />
          <div className={classes.drawerFooter}>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
}

export default Header;