import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function AllGear() {
  const [selectedAllGear, setSelectedAllGear] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      {item.restriction && (
        <p><strong>Restrictions:</strong> {item.restriction}</p>
      )}
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>All Gear</h1>
      
      <p>
        This is a list of all gear available.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedAllGear}
          selectedItem={selectedAllGear}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
