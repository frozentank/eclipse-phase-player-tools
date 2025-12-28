import { useState } from 'react'
import SearchableList from '../components/SearchableList'

const SKILLS_DATA = [
  {
    id: 1,
    name: 'Academics',
    linkedAptitude: 'Cognition',
    description: 'Knowledge in scholarly or scientific fields',
    details: 'Academics represents advanced knowledge in theoretical and applied sciences. This skill covers physics, chemistry, biology, mathematics, and other scholarly disciplines. Characters with high Academics can research, teach, and solve complex theoretical problems.',
  },
  {
    id: 2,
    name: 'Animal Handling',
    linkedAptitude: 'Coordination',
    description: 'Ability to interact with and control animals',
    details: 'Though rare in Eclipse Phase, Animal Handling allows interaction with genetically engineered creatures and uplifted animals. This skill involves training, care, and behavioral understanding of biological entities.',
  },
  {
    id: 3,
    name: 'Beam Weapons',
    linkedAptitude: 'Coordination',
    description: 'Skill with energy-based weapons',
    details: 'Beam Weapons covers proficiency with all energy-based weapons including laser rifles, plasma weapons, and particle beams. Users can aim accurately, maintain weapons, and understand their tactical applications.',
  },
  {
    id: 4,
    name: 'Free Fall',
    linkedAptitude: 'Reflexes',
    description: 'Movement and maneuvering in zero-gravity',
    details: 'Free Fall is essential for survival and combat in zero-gravity environments. This skill covers movement through vacuum, use of thruster packs, and zero-g combat maneuvering. Crucial for space operations.',
  },
  {
    id: 5,
    name: 'Hacking',
    linkedAptitude: 'Intuition',
    description: 'Ability to penetrate and manipulate computer systems',
    details: 'Hacking covers cybernetic infiltration, system penetration, and digital manipulation. Skilled hackers can break security, install backdoors, manipulate data, and control systems from a distance. A critical skill for digital warfare.',
  },
  {
    id: 6,
    name: 'Kinetic Weapons',
    linkedAptitude: 'Coordination',
    description: 'Skill with projectile-based weapons',
    details: 'Kinetic Weapons covers traditional ballistic weapons including firearms, assault rifles, and rocket launchers. Characters with this skill can aim accurately in various conditions and maintain ballistic weapons effectively.',
  },
  {
    id: 7,
    name: 'Medicine',
    linkedAptitude: 'Cognition',
    description: 'Medical and biological knowledge',
    details: 'Medicine covers diagnosis, treatment, and biological understanding. Medical specialists can treat injuries, perform surgery, understand morphology, and make biological identifications. Essential for keeping the team alive.',
  },
  {
    id: 8,
    name: 'Perception',
    linkedAptitude: 'Intuition',
    description: 'Ability to notice details and observe',
    details: 'Perception represents awareness and observation skills. Perceptive characters notice hidden details, spot threats, and gather intelligence through careful observation. This passive awareness can provide critical advantages in tactical situations.',
  },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Linked Aptitude:</strong> {item.linkedAptitude}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Skills</h1>
      
      <p>
        Skills represent specific training and experience. Each skill is linked to an aptitude that provides a base modifier.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={SKILLS_DATA}
          searchFields={['name', 'description', 'linkedAptitude']}
          onSelect={setSelectedSkill}
          selectedItem={selectedSkill}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
