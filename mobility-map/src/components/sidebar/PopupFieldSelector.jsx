import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const fieldOptions = [
  { label: 'Pays', key: 'pays' },
  { label: 'Adresse', key: 'adresse' },
  { label: 'Site web', key: 'site_web' },
  { label: 'Critères Academiques', key: 'criteres_academiques' },
  { label: 'Intégration et Vie Sociale', key: 'integration_et_vie_sociale' },
  { label: 'Logement et Vie Quotidienne', key: 'logement_et_vie_quotidienne' },
  { label: 'Organisation et Démarches', key: 'organisation_et_demarches' },
  { label: 'Expérience Globale', key: 'experience_globale' }
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
