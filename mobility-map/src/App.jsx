import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MapPage from './components/MapPage/MapPage';
import ComparisonPage from './components/ComparisonPage/ComparisonPage';

function App() {
  const [activePage, setActivePage] = useState("map");

  return (
    <div className="flex min-h-screen">
      <Sidebar onSelectPage={setActivePage}/>
      <main className="flex-1 p-6">
        {activePage === "map" && <MapPage />}
        {activePage === "comparison" && <ComparisonPage />}
      </main>
    </div>
  );
}

export default App;