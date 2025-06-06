import { Autocomplete, TextField } from '@mui/material';

export default function CityFilter({ cities, selected, onChange }) {
  return (
    <Autocomplete
      multiple
      options={cities}
      value={selected}
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label="Filtrer par ville" placeholder="Choisissez des villes" />
      )}
    />
  );
}
