import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ComboTable from './combo-table';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '12vh 2vw 5vw 2vw',
      margin: '0 auto',
    },
  }),
);

const ComboCalc = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  
  return(
    <>
      <SEO title='Nightmare Timer' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">コンボ計算機</Typography>
        <ComboTable />
      </main>
    </>
  )
};

export default ComboCalc;