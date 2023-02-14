import styled from "@emotion/styled";
import {
  TableCell,
  TableRow,
  TextField,
  tableCellClasses,
} from "@mui/material";
import React from "react";

const ParamsData = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "grey",
      // color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <StyledTableRow>
        <StyledTableCell>
          <TextField id="outlined-basic" variant="outlined" fullWidth />
        </StyledTableCell>
        <StyledTableCell>
          <TextField id="outlined-basic" variant="outlined" fullWidth />
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ParamsData;
