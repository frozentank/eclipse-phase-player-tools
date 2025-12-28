import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
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
            </div>
          </li>
          
          <li 
            className={`dropdown ${openDropdown === 'gameplay' ? 'active' : ''}`}
            onClick={() => toggleDropdown('gameplay')}
          >
            <span className="dropdown-toggle">Gameplay</span>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/actions" onClick={handleLinkClick}>Actions & Combat</Link>
              <Link to="/psi" onClick={handleLinkClick}>Psi</Link>
              <Link to="/gear" onClick={handleLinkClick}>Gear</Link>
              <Link to="/mesh" onClick={handleLinkClick}>The Mesh</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
