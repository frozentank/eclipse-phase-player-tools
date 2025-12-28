import { useState } from 'react'
import SearchableList from '../components/SearchableList'

const TRAITS_DATA = [
  {
    id: 1,
    name: 'Ambidextrous',
    type: 'Positive',
    cost: 1,
    description: 'You can use both hands with equal proficiency',
    details: 'Your natural ambidexterity grants you a significant advantage in combat and technical tasks. You suffer no penalty when using your non-dominant hand, and can dual-wield weapons more effectively.',
  },
  {
    id: 2,
    name: 'Combat Implants',
    type: 'Positive',
    cost: 2,
    description: 'Your morph includes specialized combat implants',
    details: 'Your morph is equipped with military-grade combat systems including targeting assistance, reaction enhancement, and weapon interfaces. This trait provides significant bonuses to combat-related actions.',
  },
  {
    id: 3,
    name: 'Direction Sense',
    type: 'Positive',
    cost: 1,
    description: 'You have an innate sense of direction',
    details: 'You possess an almost supernatural ability to navigate and sense direction. You never become lost in familiar territory and can navigate new areas with exceptional accuracy even without maps or instruments.',
  },
  {
    id: 4,
    name: 'Addiction',
    type: 'Negative',
    cost: -1,
    description: 'Your character is addicted to a particular substance',
    details: 'Your character is physiologically and psychologically dependent on a particular substance, drug, or behavior. Without your addiction satisfied, you suffer from withdrawal symptoms that impair your abilities.',
  },
  {
    id: 5,
    name: 'Arachnophobia',
    type: 'Negative',
    cost: -1,
    description: 'You have an intense fear of arachnids',
    details: 'The sight of spiders or arachnid-like creatures triggers overwhelming fear in you. In combat situations against arachnid-type enemies, you suffer significant penalties to your rolls and must make willpower checks to stay focused.',
  },
  {
    id: 6,
    name: 'Egoism',
    type: 'Negative',
    cost: -2,
    description: 'Your character is extremely self-centered',
    details: 'Your character is narcissistic and self-centered to the point of severe social dysfunction. You struggle to consider others\' needs and frequently engage in selfish or outright hostile behavior that alienates allies.',
  },
]

export default function Traits() {
  const [selectedTrait, setSelectedTrait] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Cost:</strong> {item.cost > 0 ? `+${item.cost}` : item.cost} points</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Traits</h1>
      
      <p>
        Traits represent special advantages and disadvantages of your character. Positive traits cost trait points, while negative traits provide bonus trait points.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={TRAITS_DATA}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedTrait}
          selectedItem={selectedTrait}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
