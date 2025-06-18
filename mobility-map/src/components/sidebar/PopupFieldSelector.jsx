import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const fieldOptions = [
  { label: 'Nom du partenaire', key: 'nom_partenaire' },
  { label: 'Pays', key: 'pays' },
  { label: 'Adresse', key: 'adresse' },
  { label: 'Site web', key: 'site_web' },
  { label: 'Langue des cours', key: 'langue_des_cours' },
  // Ajoute d'autres champs ici si besoin
];

export default function PopupFieldSelector({ selectedFields, onChange }) {
  const handleToggle = (key) => {
    if (selectedFields.includes(key)) {
      onChange(selectedFields.filter(f => f !== key));
    } else {
      onChange([...selectedFields, key]);
    }
  };

  return (
    <div>
      <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
        Champs à afficher dans la popup
      </Typography>
      <FormGroup>
        {fieldOptions.map(({ label, key }) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={selectedFields.includes(key)}
                onChange={() => handleToggle(key)}
                sx={{ color: '#ffffff' }}
              />
            }
            label={<span style={{ color: '#ffffff' }}>{label}</span>}
          />
        ))}
      </FormGroup>
    </div>
  );
}
