import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';

function ComparisonTable({ universities }) {
  if (universities.length === 0) {
    return <p>Aucune université sélectionnée.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Pays</TableCell>
            <TableCell>Ville</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map((u, index) => (
            <TableRow key={index}>
              <TableCell>{u.university}</TableCell>
              <TableCell>{u.country}</TableCell>
              <TableCell>{u.city}</TableCell>
              <TableCell>{u.latitude}</TableCell>
              <TableCell>{u.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ComparisonTable;
