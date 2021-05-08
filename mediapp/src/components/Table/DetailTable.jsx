import React,{useState}from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {useScreenWidth} from "../Hooks/userScreenWidth"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



function DetailTable({data=[],tableHeadins=[]}){
  const screenWidth=useScreenWidth()
  const usestyles = makeStyles({
    table: {
      minWidth: screenWidth-50
    },
  });
  const classes =usestyles()
  console.log(screenWidth)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeadins.map((heading) => {
              return (
                <StyledTableCell align="center">{heading}</StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return (
              <StyledTableRow key={index}>
                {row.map((rowdata) => {
                  return (
                    <StyledTableCell align="right" component="th" scope="row">
                      {rowdata}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailTable;
