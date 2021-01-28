import React from 'react';
import { graphql } from "gatsby"
import clsx from 'clsx';
import { SEO } from 'src/components';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const query = graphql`
{
  allNightmare {
    nodes {
      id
      name
      icon
      cskill
      ready
      activate
    }
  }
}
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1',
      width: '100%',
      padding: '10vh 2vw 5vw 2vw',
      margin: '0 auto',
    },
  })
);

const Test = ( {data}: {data: any} ) => {
  const classes = useStyles();
  console.log(data);
  
  return(
    <>
      {/**
      <SEO title='Test' pathname={path} />
      <main className={clsx(className, classes.root)}>
        <h1>this is Test page!</h1>
      </main>
       */}

      <div>
        <h1>L nightmare details</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>icon</TableCell>
              <TableCell>cskill</TableCell>
              <TableCell>ready</TableCell>
              <TableCell>activate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {data.allNightmare.nodes.map((node: any) => (
              <TableRow key={node.id}>
                <TableCell>{node.name}</TableCell>
                <TableCell>{node.icon}</TableCell>
                <TableCell>{node.cskill}</TableCell>
                <TableCell>{node.ready}</TableCell>
                <TableCell>{node.activate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
};

export default Test;