import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Survival() {
  const [selectedSurvival, setSelectedSurvival] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Survival</h1>
      
      <p>
       The following gear is often critical to the survival of soldiers, spies, criminals, gatecrashers, emergency service personnel, and others who regularly venture into unsafe or unfamiliar regions.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Survival")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedSurvival}
          selectedItem={selectedSurvival}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
