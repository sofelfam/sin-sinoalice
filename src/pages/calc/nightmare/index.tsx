import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import NightmareTimerTable from './timer-table';
import { Typography } from '@material-ui/core';

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

//スマホのとき、Tabを召喚しhistoryを投げつける
//timeline表示→出力（タイムテーブルで扱えるurl形式）

const NightmareTimer = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  
  return(
    <>
      <SEO title='Nightmare Timer' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">ナイトメア計算機</Typography>
        <NightmareTimerTable />
      </main>
    </>
  )
};

export default NightmareTimer;