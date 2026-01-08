import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openSubDropdown, setOpenSubDropdown] = useState(null)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
    setOpenSubDropdown(null)
  }

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  const toggleSubDropdown = (subName) => {
    setOpenSubDropdown(openSubDropdown === subName ? null : subName)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={handleLinkClick}>
          Eclipse Phase Player Tools
        </Link>
        
        <button 
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link></li>
          
          <li 
            className={`dropdown ${openDropdown === 'character' ? 'active' : ''}`}
            onClick={() => toggleDropdown('character')}
          >
            <span className="dropdown-toggle">Character Creation</span>
            <div className="dropdown-menu dropdown-menu-left">
              <Link to="/character-creation" onClick={handleLinkClick}>Overview</Link>
              <Link to="/backgrounds" onClick={handleLinkClick}>Backgrounds</Link>
              <Link to="/factions" onClick={handleLinkClick}>Factions</Link>
              <Link to="/aptitudes" onClick={handleLinkClick}>Aptitudes</Link>
              <Link to="/morphs" onClick={handleLinkClick}>Morphs</Link>
              <Link to="/traits" onClick={handleLinkClick}>Traits</Link>
              <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
              
              <div
                className={`dropdown-item ${openSubDropdown === 'psi' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleSubDropdown('psi') }}
                role="button"
                tabIndex={0}
              >
                <span className="dropdown-toggle">Psi ▸</span>
                <div className={`dropdown-submenu ${openSubDropdown === 'psi' ? 'open' : 'hidden'}`}>
                  <Link to="/psi" onClick={handleLinkClick}>Overview</Link>
                  <Link to="/psi/using" onClick={handleLinkClick}>Using Psi</Link>
                  <Link to="/psi/sleights" onClick={handleLinkClick}>Psi Sleights</Link>
                </div>
              </div>
            </div>
          </li>

          <li 
            className={`dropdown ${openDropdown === 'gear' ? 'active' : ''}`}
            onClick={() => toggleDropdown('gear')}
          >
            <span className="dropdown-toggle">Gear</span>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/gear" onClick={handleLinkClick}>Overview</Link>
              <Link to="/gear/all" onClick={handleLinkClick}>All Gear</Link>
              <Link to="/gear/meshed" onClick={handleLinkClick}>Meshed Gear</Link>
              <Link to="/gear/personal" onClick={handleLinkClick}>Personal Augmentation</Link>
              <Link to="/gear/communication" onClick={handleLinkClick}>Communication</Link>
              <Link to="/gear/covert" onClick={handleLinkClick}>Covert and Espionage Tech</Link>
              <Link to="/gear/drugs" onClick={handleLinkClick}>Drugs, Chemicals, and Toxins</Link>
              <Link to="/gear/everyday" onClick={handleLinkClick}>Everyday Technology</Link>
              <Link to="/gear/nano" onClick={handleLinkClick}>Nanotechnology</Link>
              <Link to="/gear/pets" onClick={handleLinkClick}>Pets</Link>
              <Link to="/gear/scavenger" onClick={handleLinkClick}>Scavenger Tech</Link>
              <Link to="/gear/services" onClick={handleLinkClick}>Services</Link>
              <Link to="/gear/software" onClick={handleLinkClick}>Software</Link>
              <Link to="/gear/survival" onClick={handleLinkClick}>Survival Gear</Link>
              <Link to="/gear/weapons" onClick={handleLinkClick}>Weapons</Link>
              <Link to="/gear/vehicles" onClick={handleLinkClick}>Robots and Vehicles</Link>
            </div>
          </li>
          
          <li 
            className={`dropdown ${openDropdown === 'gameplay' ? 'active' : ''}`}
            onClick={() => toggleDropdown('gameplay')}
          >
            <span className="dropdown-toggle">Gameplay</span>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/action" onClick={handleLinkClick}>Actions & Combat</Link>
              <Link to="action/rules_summary">Game Rules Summary</Link>
              <Link to="action/combat_modifiers">Combat Modifiers Summary</Link>
              <Link to="action/system_stress">System and Stress Summary</Link>
              <Link to="/mesh" onClick={handleLinkClick}>The Mesh</Link>
              <Link to="/psychosurgery" onClick={handleLinkClick}>Psychosurgery</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
