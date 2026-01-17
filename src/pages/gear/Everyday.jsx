import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Everyday() {
  const [selectedEveryday, setSelectedEveryday] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Everyday technology</h1>
      
      <p>
       The following devices are all exceptionally common and can be acquired in almost any habitat. Almost everyone in Eclipse Phase either owns these devices or knows several people who do.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Everyday")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedEveryday}
          selectedItem={selectedEveryday}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
