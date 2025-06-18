import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MapPage from './components/MapPage/MapPage';
import ComparisonPage from './components/ComparisonPage/ComparisonPage';
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';

function App() {
  const [activePage, setActivePage] = useState("map");

  const [universities, setUniversities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUnivs, setSelectedUnivs] = useState([]);

  const [sidebarVisible, setSidebarVisible] = useState(true);
  
  const [selectedSemester, setSelectedSemester] = useState("S8");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [maxNote, setMaxNote] = useState(20);
  const [onlyEnglish, setOnlyEnglish] = useState(false);

  const handleFileUpload = async (file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      const geocodedData = await Promise.all(jsonData.map(async (u) => {
        const address = `${u.adresse}`;
        const coords = await geocodeAddress(address);
        if (!coords) return null;
        return {
          ...u,
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
      }));

      const validData = geocodedData.filter(u => u !== null);
      setUniversities(validData);
    };
    reader.readAsArrayBuffer(file);
  };


  const countries = [...new Set(universities.map(u => u.pays).filter(Boolean))];
  const filtered = universities.filter(u => {
    const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(u.pays);
    const semesterKey = `${selectedSemester}_total_places`;
    const specialtyKey = selectedSemester && selectedSpecialty ? `${selectedSemester}_${selectedSpecialty}` : null;
    const hasSemesterPlaces = u[semesterKey] > 0;
    const hasSpecialtyPlaces = specialtyKey ? u[specialtyKey] > 0 : true; 
    const noteOk = !u.note_min || parseFloat(u.note_min) <= maxNote; 
    const englishOk = !onlyEnglish || (
    !u.langue_des_cours ||  // garder les cases vides
    u.langue_des_cours.toLowerCase().includes("anglais")
    );

    return countryMatch && hasSemesterPlaces && hasSpecialtyPlaces && noteOk && englishOk;
  });

  const addUniv = (univ) => {
    if (selectedUnivs.some(u => u.nom_partenaire === univ.university) || selectedUnivs.length >= 5) return;
    setSelectedUnivs([...selectedUnivs, univ]);
  };

  const reorderUnivs = (reordered) => setSelectedUnivs(reordered);
  const geocodeAddress = async (address) => {
    const encoded = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'university-map-app', // requis par Nominatim
      }
    });
    const data = await res.json();
    if (data.length === 0) return null;
    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  };

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
          selectedUnivs={selectedUnivs}
          setSelectedUnivs={setSelectedUnivs}
          reorderUnivs={reorderUnivs}
          onFileUpload={handleFileUpload}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          maxNote={maxNote} 
          setMaxNote={setMaxNote}
          onlyEnglish={onlyEnglish}
          setOnlyEnglish={setOnlyEnglish}
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