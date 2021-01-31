import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, TextField, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '12vh 2vw 5vw 2vw',
      margin: '0 auto',
      '& .MuiOutlinedInput-input': {
        padding: theme.spacing(1),
      },
    },
    sourceList: {
      '& .MuiListItemText-primary': {
        paddingBottom: theme.spacing(1),
      },
    },
    sourceTitle: {
      display: 'inline',
      fontSize: '1.6rem',
    },
  })
);

const Credits = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  return(
    <>
      <SEO title='Credits' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">Credits</Typography>
        <div>
          <div>
            <Typography variant="h6">Content</Typography>
            <p>...</p>
            <div>
              <List>
                <ListItem>
                  <ListItemText
                    className={classes.sourceList}
                    primary="ナイトメア時間計算 - 効果音"
                    secondary={
                      <>
                        <Typography variant="subtitle2" className={classes.sourceTitle} color="textPrimary">©効果音ラボ:</Typography>
                        <TextField id="outlined-basic" variant="outlined" defaultValue="https://soundeffect-lab.info/" />
                      </>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default Credits;