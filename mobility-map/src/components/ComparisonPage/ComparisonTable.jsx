import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

function ComparisonTable({ universities }) {
  if (universities.length === 0) {
    return <Typography variant="h3">Aucune université sélectionnée.</Typography>;
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.3 },
    { field: 'university', headerName: 'Nom', flex: 1 },
    { field: 'country', headerName: 'Pays', flex: 0.7 },
    { field: 'city', headerName: 'Ville', flex: 0.7 },
    { field: 'latitude', headerName: 'Latitude', flex: 0.6, type: 'number' },
    { field: 'longitude', headerName: 'Longitude', flex: 0.6, type: 'number' },
  ];

  const rows = universities.map((u, index) => ({
    id: index + 1,
    ...u,
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        sx={{
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader': {
            cursor: 'default',
          },
        }}
      />
    </Box>
  );
}

export default ComparisonTable;
