import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Software() {
  const [selectedSoftware, setSelectedSoftware] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Software</h1>
      
      <p>
       For information on using software, see the Mesh chapter, p. 234. 
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Software")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedSoftware}
          selectedItem={selectedSoftware}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
