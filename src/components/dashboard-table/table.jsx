import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, false, 4.0),
  createData('Ice cream sandwich', 237, 9.0, true, 4.3),
  createData('Eclair', 262, 16.0, false, 6.0),
  createData('Cupcake', 305, 3.7, false, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Amout</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Units</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align='center' sx={{ color: row.carbs?'green':'gray'}} >{row.carbs?'Paid':'Pending'}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}