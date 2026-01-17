import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import GEAR_DATA from '../../data/Gear'


export default function Chemical() {
  const [selectedChemical, setSelectedChemical] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Cost:</strong> {item.cost}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Drugs, chemicals and toxins</h1>
      
      <p>
       In Eclipse Phase, the transhuman desire to enhance the body and mind — especially with chemicals — merges right into humanity’s popular pastime of recreational substance abuse. Drugs of all kinds, whether they be chemical, nano-based, or electronic, are not only popular but widespread. While advances in biotechnology have eliminated many of the side effects that once plagued drug users, transhuman bodies remain complicated environments, and so side effects (especially with long-term use) are still a factor. Additionally, addiction is always a consideration for anyone who gets comfortable with popping the same pills too often, though there are also drugs for addiction of course.
      </p>
      <p>
        Drug descriptions include benefits, side effects, noticeable signs that a person is using the drug, addictiveness, and effects from long-term use). Descriptions also include the drug’s Duration and its Addiction Modifier (see Addiction and Substance Abuse). 
      </p>

      <div className="searchable-container">
        <SearchableList
          items={GEAR_DATA.filter(item => item.type === "Chemicals")}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedChemical}
          selectedItem={selectedChemical}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
