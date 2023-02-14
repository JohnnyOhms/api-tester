import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ListItem, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { green, red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { paramsTableData } from "../../utils/data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "grey",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Params() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          paddingRight: "10px",
        }}
      >
        <AddIcon
          sx={{
            border: `1px solid ${green[300]}`,
            background: green[300],
            color: "white",
            mx: 1,
          }}
        />
        <DeleteIcon
          sx={{
            border: `1px solid ${red[300]}`,
            background: red[300],
            color: "white",
            mx: 1,
          }}
        />
      </div>
      <TableContainer component={Paper} sx={{ mt: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Key</StyledTableCell>
              <StyledTableCell>Value</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paramsTableData.map((List, index) => {
              return <List key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
