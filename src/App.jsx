import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

// Import pages
import Home from './pages/Home'
import CharacterCreation from './pages/CharacterCreation'
import Backgrounds from './pages/Backgrounds'
import Factions from './pages/Factions'
import Aptitudes from './pages/Aptitudes'
import Morphs from './pages/Morphs'
import Traits from './pages/Traits'
import Skills from './pages/Skills'
import Actions from './pages/Actions'
import Psi from './pages/psi/Psi'
import PsiUsing from './pages/psi/PsiUsing'
import PsiSleights from './pages/psi/PsiSleights'
import Gear from './pages/Gear'
import Mesh from './pages/Mesh'
import Psychosurgery from './pages/Pyschosurgery'

import './App.css'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <main className="app-main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="character-creation" element={<CharacterCreation />} />
          <Route path="backgrounds" element={<Backgrounds />} />
          <Route path="factions" element={<Factions />} />
          <Route path="aptitudes" element={<Aptitudes />} />
          <Route path="morphs" element={<Morphs />} />
          <Route path="traits" element={<Traits />} />
          <Route path="skills" element={<Skills />} />
          <Route path="actions" element={<Actions />} />
          <Route path="psi" element={<Psi />} />
          <Route path="gear" element={<Gear />} />
          <Route path="mesh" element={<Mesh />} />
          <Route path="psi/using" element={<PsiUsing />} />
          <Route path="psi/sleights" element={<PsiSleights />} />
          <Route path="psychosurgery" element={<Psychosurgery />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
