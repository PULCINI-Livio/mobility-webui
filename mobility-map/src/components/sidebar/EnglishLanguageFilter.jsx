import { FormControlLabel, Checkbox, Box, Typography } from "@mui/material";

export default function EnglishLanguageFilter({ onlyEnglish, setOnlyEnglish }) {
  return (
    <Box sx={{ color: 'white', mt: 2 }}>
      <Typography variant="subtitle1">Langue des cours</Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={onlyEnglish}
            onChange={(e) => setOnlyEnglish(e.target.checked)}
            sx={{ color: 'white' }}
          />
        }
        label="Afficher uniquement les universités proposant des cours en anglais"
      />
    </Box>
  );
}
