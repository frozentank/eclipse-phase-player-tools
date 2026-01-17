import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Services() {
  const [selectedServices, setSelectedServices] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Services</h1>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Services")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedServices}
          selectedItem={selectedServices}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
