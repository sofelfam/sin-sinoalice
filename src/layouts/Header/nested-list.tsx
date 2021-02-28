import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TimerIcon from '@material-ui/icons/Timer';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FlareIcon from '@material-ui/icons/Flare';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { SwordIcon } from 'src/components/icons'
import { Divider } from '@material-ui/core';
import { Link } from 'gatsby';
import { NestedLists } from 'src/components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      disablePadding={true}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Calculators
        </ListSubheader>
      }
      className={classes.root}
    >
      <NestedLists
        topIcon={<SwordIcon />}
        topText={"ダメージ計算"}
        lists={[{icon: <EventNoteIcon />, text: "コロシアム", link: "/"},
                {icon: <EventNoteIcon />, text: "モノガタリ", link: "/"}]}
      />
      <NestedLists
        topIcon={<LocalLibraryIcon />}
        topText={"バフデバフ計算"}
        lists={[{icon: <EventNoteIcon />, text: "コロシアム", link: "/"},
                {icon: <EventNoteIcon />, text: "モノガタリ", link: "/"}]}
      />
      <NestedLists
        topIcon={<FlareIcon />}
        topText={"回復計算"}
        lists={[{icon: <EventNoteIcon />, text: "コロシアム", link: "/"},
                {icon: <EventNoteIcon />, text: "モノガタリ", link: "/"}]}
      />
      <ListItem button key='コンボ計算' component={Link} to={'/calc/combo'}>
        <ListItemIcon><InsertChartIcon /></ListItemIcon>
        <ListItemText primary='コンボ計算'/>
      </ListItem>
      <ListItem button key='獲得イノチ量計算' component={Link} to={'/'}>
        <ListItemIcon><InsertChartIcon /></ListItemIcon>
        <ListItemText primary='獲得イノチ量計算'/>
      </ListItem>
      <ListItem button key='ナイトメア時間計算' component={Link} to={'/calc/nightmare'}>
        <ListItemIcon><TimerIcon /></ListItemIcon>
        <ListItemText primary='ナイトメア時間計算'/>
      </ListItem>
      <ListItem button key='シップ計算' component={Link} to={'/calc/ship'}>
        <ListItemIcon><DirectionsBoatIcon /></ListItemIcon>
        <ListItemText primary='シップ計算'/>
      </ListItem>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Simulators
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button key='前衛装備'>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='前衛装備'/>
        </ListItem>
        <ListItem button key='後衛装備'>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='後衛装備'/>
        </ListItem>
        <ListItem button key='キャラクターズ強化'>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='キャラクターズ強化'/>
        </ListItem>
        <ListItem button key='ナイトメアテーブル'>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='ナイトメアテーブル'/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='更新履歴' component={Link} to={'/about/changelog'}>
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary='更新履歴' />
        </ListItem>
        <ListItem button key='Contact' component={Link} to={'/about/contact'}>
          <ListItemIcon><ContactsIcon /></ListItemIcon>
          <ListItemText primary='Contact us' />
        </ListItem>
        <ListItem button key='Credits' component={Link} to={'/about/credits'}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='Credits' />
        </ListItem>
      </List>
    </List>
  );
}

export default NestedList;