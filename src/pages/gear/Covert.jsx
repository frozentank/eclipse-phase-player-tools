import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Covert() {
  const [selectedCovert, setSelectedCovert] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Covert</h1>
      
      <p>
       These technologies allow characters to acquire protected information and to gain access to places that others try to keep them out of. Many of these devices are mesh-capable and equipped with radios, see p. 296 for radio ranges.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Covert")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedCovert}
          selectedItem={selectedCovert}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
