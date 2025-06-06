import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MapPage from './components/MapPage/MapPage';
import ComparisonPage from './components/ComparisonPage/ComparisonPage';
import Papa from 'papaparse';

function App() {
  const [activePage, setActivePage] = useState("map");

  const [universities, setUniversities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

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
  const filtered = selectedCountries.length === 0
    ? universities
    : universities.filter(u => selectedCountries.includes(u.country));

  return (
    <div className="flex min-h-screen">
      <Sidebar
        onSelectPage={setActivePage}
        countries={countries}
        selectedCountries={selectedCountries}
        setSelectedCountries={setSelectedCountries}
      />
      <main className="flex-1 p-6">
        {activePage === "map" && <MapPage universities={filtered} />}
        {activePage === "comparison" && <ComparisonPage />}
      </main>
    </div>
  );
}

export default App;