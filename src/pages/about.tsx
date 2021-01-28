import React from 'react';
import clsx from 'clsx';
import { SEO } from 'src/components';
import AboutMDX from 'src/internal/about.mdx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

const About = ({ path, className }: { path: string, className: string }) => {
  const classes = useStyles();
  return(
    <>
      <SEO title='About' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <Typography variant="h1">About</Typography>
        <AboutMDX />
      </main>
    </>
  )
};

export default About;