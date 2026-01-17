import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Communication() {
  const [selectedCommunication, setSelectedCommunication] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Communication</h1>
      
      <p>
       The oldest and most widespread communications technology still in regular use is radio. Every habitat and world inhabited by transhumanity is awash in radio traffic, with humans, machines, and uplifts all constantly communicating with one another. The smallest radios are no larger than a spec of dust and have a range of no more than 20 meters, while the largest are the size of a truck and have a range of many thousands of miles. Radios large and small are ubiquitous and almost all devices contain at least short-range radios so they may interact with the mesh. Most morphs are equipped with basic mesh inserts that include an implanted radio. For radio ranges, see p. 296.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Communications")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedCommunication}
          selectedItem={selectedCommunication}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
