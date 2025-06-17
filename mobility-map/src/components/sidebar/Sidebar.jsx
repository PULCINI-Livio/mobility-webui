import CartButton from "./CartButton";
import MapButton from "./MapButton";
import UnivSelection from "./UnivSelection";
import CountryFilter from "./CountryFilter";
import CityFilter from "./CityFilter";
import InputFileUpload from "./InputFileUpload";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Sidebar({
  activePage,
  onSelectPage,
  countries,
  selectedCountries,
  setSelectedCountries,
  selectedUnivs,
  setSelectedUnivs,
  reorderUnivs,
  onFileUpload 
}) {

  const handleSelect = (page) => {
    onSelectPage(page);
  };
  const handleResetFilters = () => {
    setSelectedCountries([]);
  };
  const [filtersOpen, setFiltersOpen] = useState(true);
      
  return (
    <div className="bg-[#009bda] px-[2vh] max-w-[20vw] min-w-min pt-[32px]">
      <Box display="flex" alignItems="center" gap={1}>
        <GlobeAltIcon style={{ height: 48, width: 48, color: '#ffffff' }} />
        <Typography variant="h3" 
          sx={{ 
            fontFamily: 'Roboto, sans-serif', 
            color: '#ffffff' 
          }}
        >
          MOBILITY
        </Typography>
      </Box>
      <MapButton
        onButtonClick={() => handleSelect("map")}
        active={activePage === "map"}
      />
      <CartButton
        onButtonClick={() => handleSelect("comparison")}
        active={activePage === "comparison"}
      />
      <InputFileUpload onFileUpload={onFileUpload} />
      <UnivSelection
        selectedUnivs={selectedUnivs}
        setSelectedUnivs={setSelectedUnivs}
        reorderUnivs={reorderUnivs}
      />
      <Button
        onClick={() => setFiltersOpen(prev => !prev)}
        sx={{
          boxShadow: 'none',
          backgroundColor:'#ffffff',
          color: '#009bda',
          textTransform: 'none',
          marginY: '2vh',
          '&:hover': {
            backgroundColor: '#8d8d8d',
            color: '#ffffff'
          },
        }}
      >
        {filtersOpen ? "Masquer les filtres" : "Afficher les filtres"}
      </Button>
      {filtersOpen && (
        <div className="space-y-2 mt-2">
          <CountryFilter
            countries={countries}
            selected={selectedCountries}
            onChange={setSelectedCountries}
          />
          <Button
            onClick={handleResetFilters}
            sx={{
              marginY: '2vh',
              boxShadow: 'none',
              backgroundColor:'#ffffff',
              color: '#009bda',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#8d8d8d',
                color: '#ffffff'
              },
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </div>
  );
}