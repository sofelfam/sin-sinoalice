import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '10vh 2vw 5vw 2vw',
      margin: '0 auto',
    }
  })
);

const notFound = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  return(
    <>
      <SEO title='Not Found' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <h1>Not Found</h1>
      </main>
    </>
  )
};

export default notFound;