// /src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './app/Navbar';
import HomePage from './app/HomePage';
import SearchPage from './app/SearchPage';
import PlanetPage from './app/PlanetPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/planets" element={<PlanetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;