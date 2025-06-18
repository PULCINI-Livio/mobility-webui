import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const specialties = ["MM", "MC", "SNI", "BAT", "EIT", "IDU"];

export default function SpecialtyFilter({ selectedSpecialty, setSelectedSpecialty }) {
  return (
    <FormControl component="fieldset" sx={{ color: 'white', marginTop: 2 }}>
      <FormLabel sx={{ color: 'white' }}>Spécialité</FormLabel>
      <RadioGroup
        row
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        {specialties.map((spec) => (
          <FormControlLabel
            key={spec}
            value={spec}
            control={<Radio sx={{ color: 'white' }} />}
            label={spec}
          />
        ))}
        <FormControlLabel
          value=""
          control={<Radio sx={{ color: 'white' }} />}
          label="Toutes"
        />
      </RadioGroup>
    </FormControl>
  );
}
