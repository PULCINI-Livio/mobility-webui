import { Autocomplete, TextField } from '@mui/material';

export default function CountryFilter({ countries, selected, onChange }) {
  return (
    <Autocomplete
      multiple
      options={countries}
      value={selected}
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label="Filtrer par pays" placeholder="Choisissez des pays" />
      )}
    />
  );
}
