import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600,
    marginTop: theme.spacing(3),
    marginBottom: 100,
    overflowX: 'auto',
    // background: '#37474f',
  },
  table: {
    maxWidth: 600,
  },
  cell: {
    color: 'white',
  }
}));


export default function PredictionOutput(props) {
  const classes = useStyles();

  function buildTable() {
    return (
      <Paper className={classes.root}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Breed</TableCell>
              <TableCell align="right">Probability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.prediction.map((value, index) => (
              <TableRow key={value.className}>
                <TableCell component="th" scope="row">
                  {value.className}
                </TableCell>
                <TableCell align="right">
                  {parseFloat(value.probability * 10000 / 100).toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  return props.prediction ? buildTable() : "";

}