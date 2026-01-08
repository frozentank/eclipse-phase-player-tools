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
import Action from './pages/action/Action'
import Psi from './pages/psi/Psi'
import PsiUsing from './pages/psi/PsiUsing'
import PsiSleights from './pages/psi/PsiSleights'
import Gear from './pages/gear/Gear'
import Mesh from './pages/Mesh'
import Psychosurgery from './pages/Pyschosurgery'
import Meshed from './pages/gear/Meshed'
import GameRulesSummary from './pages/action/GameRulesSummary'
import CombatModifiersSummary from './pages/action/CombatModifiersSummary'
import SystemsAndStressSummary from './pages/action/SystemAndStressSummary'

import './App.css'
import Personal from './pages/gear/Personal'

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
          <Route path="action" element={<Action />} />
          <Route path="psi" element={<Psi />} />
          <Route path="gear" element={<Gear />} />
          <Route path="mesh" element={<Mesh />} />
          <Route path="psi/using" element={<PsiUsing />} />
          <Route path="psi/sleights" element={<PsiSleights />} />
          <Route path="psychosurgery" element={<Psychosurgery />} />
          <Route path="gear/meshed" element={<Meshed />} />
          <Route path="gear/personal" element={<Personal />} />
          <Route path="action/rules_summary" element={<GameRulesSummary />} />
          <Route path="action/combat_modifiers" element={<CombatModifiersSummary />} />
          <Route path="action/system_stress" element={<SystemsAndStressSummary />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
