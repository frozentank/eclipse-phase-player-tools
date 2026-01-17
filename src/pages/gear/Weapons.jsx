import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Weapons() {
  const [selectedWeapon, setSelectedWeapon] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Weapon</h1>
      
      <p>
       A wide range of weapons are available in Eclipse Phase, from the primitive to the technologically advanced.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Weapons")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedWeapon}
          selectedItem={selectedWeapon}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
