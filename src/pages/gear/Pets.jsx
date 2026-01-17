import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Pets() {
  const [selectedPets, setSelectedPets] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Pets</h1>
      
      <p>
       These partially-uplifted and bio-engineered animals have rudimentary intelligence and limited communication skills. They make for fine companions and helpers.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Pets")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedPets}
          selectedItem={selectedPets}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
