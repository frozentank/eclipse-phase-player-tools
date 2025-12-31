import { useState } from 'react'
import SearchableList from '../components/SearchableList'
import MORPHS_DATA from '../data/Morphs'

export default function Morphs() {
  const [selectedMorph, setSelectedMorph] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p>{item.details}</p>
      <div className="container">
        <div className="column">
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Implants:</strong> {item.implants}</p>
          <p><strong>Mobility System:</strong> {item.mobility}</p>
          <p><strong>Aptitude Maximum:</strong> {item.aptitude_max}</p>
          <p><strong>Speed:</strong> {item.speed}</p>
          <p><strong>Durability:</strong> {item.durability}</p>
          <p><strong>Wound Threshold:</strong> {item.wound_threshold}</p>
          <p><strong>Advantages:</strong> {item.advantages}</p>
          <p><strong>Disadvantages:</strong> {item.disadvantages}</p>
          <p><strong>CP Cost:</strong> {item.cp_cost}</p>
          <p><strong>Credit Cost:</strong> {item.credit_cost}</p>
          {item.variants.length > 0 && (
            <div>
              <strong>Variants</strong>
              <ul>
                {item.variants.map((item, index) => (
                  <li key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.details}</p>
                    {item.implants && (<p><strong>Enhancements:</strong>{item.implants}</p>)}
                    {item.modification && (<p><strong>Additional Changes:</strong>{item.modification}</p>)}
                    {item.speed && (<p><strong>Speed:</strong>{item.speed}</p>)}
                    {item.cp_cost && (<p><strong>CP Cost:</strong>{item.cp_cost}</p>)}
                    {item.credit_cost && (<p><strong>Credit Cost:</strong>{item.credit_cost}</p>)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="column w-51 h-68 lg:w-120 lg:h-300">
          <img
            src={"./images/morphs/" + item.image}
            alt={"./images/morphs/" + item.image}
            className="max-w-full max-h-full object-contain"
            />
        </div>
      </div>
    </>
  )

  return (
    <div className="page-content">
      <h1>Morphs</h1>
      
      <p>
        Morphs are the physical forms that your character inhabits. You can transfer your consciousness between morphs through resleeving.
      </p>
      <p>
        Morphs come in 4 basic types:
      </p>
      <ul>
        <li><strong>Biomorph</strong> - Fully biological, born naturally or in an exowomb and grown to adulthood either naturally or at a slightly accelerated rate.</li>
        <li><strong>Pod</strong> - Vat-grown, biological bodies with extremely undeveloped brains that are augmented with an implanted computer and cybernetics systems.</li>
        <li><strong>Synthmorph</strong> - Completely artificial/robotic. Typically operated by an AI or via remote control, infugees have resorted to resleeving into these as well.</li>
        <li><strong>Infomorph</strong> - No body, your consciousness exists digitially in the mesh.</li>
      </ul>
      

      <div className="searchable-container">
        <SearchableList
          items={MORPHS_DATA}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedMorph}
          selectedItem={selectedMorph}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
