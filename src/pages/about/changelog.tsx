import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '12vh 2vw 5vw 2vw',
      margin: '0 auto',
    }
  })
);

const Changelog = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  return(
    <>
      <SEO title='Changelog' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">Changelog</Typography>
      </main>
    </>
  )
};

export default Changelog;