import { useState } from "react";
import UnivSelection from "../sidebar/UnivSelection";
import { Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button, Box } from '@mui/material';


export default function WishPage({ sidebarUnivs, selectedSemester }) {
  // Deux sélecteurs, chacun avec sa liste d'universités propres
  const [s8Univs, setS8Univs] = useState([]);
  const [s9Univs, setS9Univs] = useState([]);

  // Copier depuis la sidebar vers le sélecteur ciblé
  const copyFromSidebar = (semester) => {
    if (semester === "S8") {
      setS8Univs(sidebarUnivs);
    } else if (semester === "S9") {
      setS9Univs(sidebarUnivs);
    }
  };

  // Désactiver le bouton copier pour le semestre non sélectionné
  const isS8ButtonDisabled = selectedSemester !== "S8";
  const isS9ButtonDisabled = selectedSemester !== "S9";

  return (
    <Box>
      <Typography variant="h4" mb={2}>Wish List</Typography>

      <Box mb={4}>
        <Typography variant="h6">Semestre S8</Typography>
        <Button
          variant="contained"
          onClick={() => copyFromSidebar("S8")}
          disabled={isS8ButtonDisabled}
          sx={{ mb: 1 }}
        >
          Copier depuis la sidebar (S8)
        </Button>
        <UnivSelection
          selectedUnivs={s8Univs}
          setSelectedUnivs={setS8Univs}
          reorderUnivs={setS8Univs}
        />
      </Box>

      <Box mb={4}>
        <Typography variant="h6">Semestre S9</Typography>
        <Button
          variant="contained"
          onClick={() => copyFromSidebar("S9")}
          disabled={isS9ButtonDisabled}
          sx={{ mb: 1 }}
        >
          Copier depuis la sidebar (S9)
        </Button>
        <UnivSelection
          selectedUnivs={s9Univs}
          setSelectedUnivs={setS9Univs}
          reorderUnivs={setS9Univs}
        />
      </Box>
    </Box>
  );
}
