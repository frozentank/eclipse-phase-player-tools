import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page-content">
      <h1>Eclipse Phase Player Tools</h1>
      <p className="intro-text">
        Welcome to the Eclipse Phase Player Tools! This website is designed to help new and experienced players understand character creation and game mechanics.
      </p>
      
      <div className="tools-grid">
        <section className="tool-section">
          <h2>Character Creation</h2>
          <ul>
            <li><Link to="character-creation">Character Creation Guide</Link></li>
            <li><Link to="backgrounds">Backgrounds</Link></li>
            <li><Link to="factions">Factions</Link></li>
            <li><Link to="aptitudes">Aptitudes</Link></li>
            <li><Link to="morphs">Morphs</Link></li>
            <li><Link to="traits">Traits</Link></li>
            <li><Link to="skills">Skills</Link></li>
            <li>
                Psi
                <ul>
                  <li><Link to="psi">Psi Overview</Link></li>
                  <li><Link to="psi/using">Using Psi</Link></li>
                  <li><Link to="psi/sleights">Psi Sleights</Link></li>
                </ul>
            </li>
          </ul>
        </section>

        <section className="tool-section">
          <h2>Gameplay</h2>
          <ul>
            <li><Link to="action">Actions & Combat</Link></li>
            <li><Link to="action/rules_summary">Game Rules Summary</Link></li>
            <li><Link to="action/combat_modifiers">Combat Modifiers Summary</Link></li>
            <li><Link to="action/system_stress">System and Stress Summary</Link></li>
            <li><Link to="psi">Psi</Link></li>
            <li><Link to="gear">Gear</Link></li>
            <li><Link to="mesh">The Mesh</Link></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
