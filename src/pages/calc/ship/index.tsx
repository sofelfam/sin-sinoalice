import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme, Typography } from '@material-ui/core';
import ShipTable from 'src/pages/calc/ship/ship-table';

const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '12vh 2vw 5vw 2vw',
      margin: '0 auto',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

const Ship = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  
  return(
    <>
      <SEO title='Ship' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">シップ計算機</Typography>
        <ShipTable />
      </main>
    </>
  )
};

export default Ship;