import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Personal() {
  const [selectedPersonal, setSelectedPersonal] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Type:</strong> Personal Augmentation</p>
      <p><strong>Cost:</strong> {item.cost}</p>
      {item.restriction && (
        <p><strong>Restrictions:</strong> {item.restriction}</p>
      )}
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Personal Augmentation</h1>
      
      <p>
        Almost all citizens of the solar system, whether human, AI, or uplifted animal, use various forms of biological, cybernetic, or nanotechnological augmentation. The following is a list of the most common types.
      </p>
      <p>
        Unless otherwise noted, any bonuses from personal augmentations are both compatible and cumulative with bonuses from other enhancements.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "personal")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedPersonal}
          selectedItem={selectedPersonal}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
