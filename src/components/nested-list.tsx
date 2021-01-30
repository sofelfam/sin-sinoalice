import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface nestedListsProps {
    topIcon: JSX.Element,
    topText: string,
    lists: {icon: JSX.Element, text: string, link?: string}[]
}

const NestedLists = (props: nestedListsProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{props.topIcon}</ListItemIcon>
        <ListItemText primary={props.topText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.lists.map(list => (
            <ListItem button key={list.text} component={Link} to={list.link} className={classes.nested}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
};

export default NestedLists;