import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MapPage from './components/MapPage/MapPage';
import ComparisonPage from './components/ComparisonPage/ComparisonPage';
import Papa from 'papaparse';
import Button from '@mui/material/Button';

function App() {
  const [activePage, setActivePage] = useState("map");

  const [universities, setUniversities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const [selectedUnivs, setSelectedUnivs] = useState([]);

  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    Papa.parse('/universities.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data.map(u => ({
          ...u,
          latitude: parseFloat(u.latitude),
          longitude: parseFloat(u.longitude),
        })).filter(u => !isNaN(u.latitude) && !isNaN(u.longitude));
        setUniversities(data);
      }
    });
  }, []);

  const countries = [...new Set(universities.map(u => u.country).filter(Boolean))];
  const cities = [...new Set(universities.map(u => u.city).filter(Boolean))];
  const filtered = universities.filter(u => {
    const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(u.country);
    const cityMatch = selectedCities.length === 0 || selectedCities.includes(u.city);
    return countryMatch && cityMatch;
  });

  const addUniv = (univ) => {
    if (selectedUnivs.some(u => u.university === univ.university) || selectedUnivs.length >= 5) return;
    setSelectedUnivs([...selectedUnivs, univ]);
  };

  const reorderUnivs = (reordered) => setSelectedUnivs(reordered);

  return (
    <div className="relative flex min-h-screen bg-[#009bda]">
      <Button
        onClick={() => setSidebarVisible(!sidebarVisible)}
        sx={{
          marginLeft: '100px',
          position: 'absolute',
          backgroundColor: '#009bda',
          color:  '#ffffff',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#007bb5',
          },
        }}
        className="absolute top-4 left-4 z-50 bg-white text-black px-3 py-1 rounded shadow"
      >
        {sidebarVisible ? '⏴ Cacher' : '⏵ Afficher'}
      </Button>

      {sidebarVisible && (
        <Sidebar
          activePage={activePage}
          onSelectPage={setActivePage}
          countries={countries}
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          cities={cities}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
          selectedUnivs={selectedUnivs}
          setSelectedUnivs={setSelectedUnivs}
          reorderUnivs={reorderUnivs}
        />
      )}

      <main className="flex-1 p-6">
        {activePage === "map" && <MapPage universities={filtered} onAddUniv={addUniv} />}
        {activePage === "comparison" && <ComparisonPage selectedUnivs={selectedUnivs} />}
      </main>
    </div>
  );
}

export default App;