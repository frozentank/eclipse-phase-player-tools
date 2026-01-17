import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Vehicles() {
  const [selectedVehicles, setSelectedVehicles] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Vehicles</h1>
      
      <p>
       The following is a small selection of the many vehicles in use in the solar system. Almost all of the vehicles in current use, including all of the vehicles listed here, have built-in AIs capable of piloting the vehicle under almost all circumstances. In most cases, passengers simply state their destination and the vehicle takes them there. Manual piloting is primarily used in emergencies or by people who prefer the exotic thrill of controlling their own vehicle.
      </p>
      <p>
        Rules for handling robots and vehicles are detailed on p. 195. Any of these shells may be modified for use as a synthetic morph by adding a cyberbrain system . Each of the shells listed here comes with a puppet sock (p. 307) for remote-control operation.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Vehicles")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedVehicles}
          selectedItem={selectedVehicles}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
