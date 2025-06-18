import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export default function SemesterFilter({ selectedSemester, setSelectedSemester }) {
  return (
    <FormControl component="fieldset" sx={{ color: 'white' }}>
      <FormLabel sx={{ color: 'white' }}>Semestre</FormLabel>
      <RadioGroup
        row
        value={selectedSemester}
        onChange={(e) => setSelectedSemester(e.target.value)}
      >
        <FormControlLabel value="S8" control={<Radio sx={{ color: 'white' }} />} label="S8" />
        <FormControlLabel value="S9" control={<Radio sx={{ color: 'white' }} />} label="S9" />
      </RadioGroup>
    </FormControl>
  );
}
