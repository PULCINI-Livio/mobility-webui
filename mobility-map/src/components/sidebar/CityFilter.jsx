import { Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';


export default function CityFilter({ cities, selected, onChange }) {
  return (
    <Box 
      sx={{
        padding:'10px',
        backgroundColor:'#ffffff',
        color: '#000000',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      }}
    >
      <Autocomplete
        multiple
        options={cities}
        value={selected}
        onChange={(e, newValue) => onChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filtrer par ville" placeholder="Choisissez des villes" />
        )}
      />
    </Box>
  );
}
