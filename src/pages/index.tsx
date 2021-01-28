import React from 'react';
import { AnyImage, SEO } from 'src/components';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '10vh 2vw 5vw 2vw',
      margin: '0 auto',
      '& h1': {
        paddingBottom: '3rem',
        fontSize: '4rem',
      },
    },
  })
);

const Index = (path: string) => {
  const classes = useStyles();
  
  return(
    <>
      <SEO title='Top' pathname={path}/>
      <main className={classes.root}>
        <Typography variant="h1">this is Index page!</Typography>
        <AnyImage filename='banner.png' />
      </main>
    </>
  )
};

export default Index;