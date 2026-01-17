import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Armor() {
  const [selectedArmor, setSelectedArmor] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Armor</h1>
      
      <p>
       Modern personal armor systems have advanced from the high modulus polyethylene thermoplastics and aramid fabrics of the early 21st century. Armor in Eclipse Phase is derived from biotech, in the form of organoweave fibers and crystalline-grown plates, and nanotech, in the form of shock-absorbing fullerene (p. 298) materials. Occasionally other materials are used, such as metallic glass plates or shear-resistant fluids that harden against impacts. Such armor protects against (armor-piercing) bullets and kinetic impacts as well as bladed weapons and piercing sharp objects. They also insulate against both the explosive heating of energy weapons and electrical shocks. While such armor protects against bullets, the layers of material catch the bullet and redistribute its kinetic energy across the body, which can still result in severe blunt force trauma.
      </p>
      <p>
        Rules for armor in combat can be found on p. 194. Armored exoskeletons are listed on p. 343.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Armor")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedArmor}
          selectedItem={selectedArmor}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
