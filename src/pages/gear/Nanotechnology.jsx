import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Nano() {
  const [selectedNano, setSelectedNano] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Nanotechnology</h1>
      
      <p>
       Nanotechnology is the precise manipulation of matter at the atomic level, typically using millions of microscale nanomachines. Nanotechnology transformed manufacturing, enabling new techniques and materials. The advent of nanofabrication — building objects from the molecular level up — transformed economies, allowing people to simply manufacture whatever they needed from raw materials. Nanotechnology is still a growing field, however, and has its limitations. While the TITANs unleashed self-replicating nanoswarms with the ability to transform or destroy anything through the power of geometric growth, such technology remains far beyond transhumanity’s grasp. 
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Nanotechnology")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedNano}
          selectedItem={selectedNano}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
