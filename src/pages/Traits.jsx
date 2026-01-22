import { useState } from 'react'
import SearchableList from '../components/SearchableList'
import TRAITS_DATA from '../data/Traits'


export default function Traits() {
  const [selectedTrait, setSelectedTrait] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Type:</strong> {item.type}</p>
      {item.cost && (
        <p><strong>{item.type.toLowerCase().includes('positive') ? 'Cost' : 'Gain'}:</strong> {item.cost} points</p>
      )}

      {item.levels && item.levels.length > 1 && (
        <div>
          <strong>Levels</strong>
          <ul>
            {item.levels.map((i, index) => (
              <li key={i.id}>
                <strong>{i.name} {item.type.toLowerCase().includes('positive') ? 'Cost' : 'Gain'}:</strong> {i.cost} points
              </li>
            ))}
          </ul>
        </div>
      )}
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
