import { useState } from 'react'
import SearchableList from '../components/SearchableList'

const GEAR_DATA = [
  {
    id: 1,
    name: 'Nano-swarm',
    category: 'Hardware',
    description: 'Programmable swarm of nanobots',
    cost: 1000,
    details: 'A programmable swarm of microscopic robots capable of manufacturing, repair, and specialized tasks. Nano-swarms can construct items, repair damage, and perform delicate work at a microscopic scale. Limited by programming complexity and available raw materials.',
  },
  {
    id: 2,
    name: 'Smart Clothing',
    category: 'Apparel',
    description: 'Adaptive clothing that changes color and texture',
    cost: 500,
    details: 'Advanced clothing with embedded smart fibers that adapt to environment and user preferences. Smart clothing can change color for camouflage, regulate temperature, and provide minor protection. Excellent for blending in or making fashion statements.',
  },
  {
    id: 3,
    name: 'Plasma Rifle',
    category: 'Weapons',
    description: 'High-energy weapon firing plasma bursts',
    cost: 5000,
    details: 'A powerful energy weapon that fires superheated plasma bolts. The Plasma Rifle delivers devastating damage against both organic and synthetic targets. Requires power cells and careful maintenance, but the raw destructive power makes it worth the investment.',
  },
  {
    id: 4,
    name: 'Healing Spray',
    category: 'Medical',
    description: 'Nanobotic medical application for wound treatment',
    cost: 500,
    details: 'A medical spray containing therapeutic nanobots that rapidly accelerate wound healing. One application can heal moderate injuries within hours. Each use requires a fresh batch, making it a consumable resource for medical professionals.',
  },
  {
    id: 5,
    name: 'Hacker Tools',
    category: 'Electronics',
    description: 'Specialized software for infiltrating systems',
    cost: 1500,
    details: 'A comprehensive suite of hacking software and electronic tools. Hacker Tools provide bonuses to system infiltration, security bypassing, and network navigation. These tools are essential for digital intrusion operations and cyber warfare.',
  },
]

export default function Gear() {
  const [selectedGear, setSelectedGear] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Cost:</strong> {item.cost.toLocaleString()} credits</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Gear</h1>
      
      <p>
        Gear represents equipment available in Eclipse Phase, from advanced weapons to everyday tools. Most gear can be fabricated or obtained through various means.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA}
          searchFields={['name', 'category', 'description']}
          onSelect={setSelectedGear}
          selectedItem={selectedGear}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
