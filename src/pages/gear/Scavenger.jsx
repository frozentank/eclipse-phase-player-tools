import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Scavenger() {
  const [selectedScavenger, setSelectedScavenger] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Scavenger</h1>
      
      <p>
       This technology is often employed by gatecrashers, space scavengers, and Firewall teams during missions.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Scavenger")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedScavenger}
          selectedItem={selectedScavenger}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
