import { useState } from 'react'
import SearchableList from '../../components/SearchableList'
import PSI_SLEIGHTS_DATA from '../../data/PsiSleights'

export default function PsiSleights() {
  const [selectedSleight, setSelectedSleight] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Psi Type:</strong> {item.type}</p>
      <p><strong>Action:</strong> {item.action}</p>
      <p><strong>Range:</strong> {item.range}</p>
      <p><strong>Duration:</strong> {item.duration}</p>
      { item.strain && (
        <p><strong>Strain Mod:</strong> {item.strain}</p>
      )}
      { item.skill && (
        <p><strong>Skill:</strong> {item.skill}</p>
      )}
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Psi Sleights</h1>
      
      <p>
        Psi Sleights are the abilities granted from being infected with the Watts-MacLeod Virus.
      </p>
      <p>
        Sleights come in two types:
      </p>
      <ul>
        <li><strong>Psi-Chi:</strong> Async abilities that speed up cognitive informatics (internal information processing) and enhance the user’s perception and cognition.</li>
        <li><strong>Psi-Gamma:</strong> Dealing with contacting (reading and communicating) and influencing the function of biological minds (egos within a biomorph, but also including animal life). Psi-gamma is only available to characters with Level 2 of the Psi trait.</li>
      </ul>

      <div className="searchable-container">
        <SearchableList
          items={PSI_SLEIGHTS_DATA}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedSleight}
          selectedItem={selectedSleight}
          renderDetails={renderDetails}
        />
      </div>

    </div>
  )
}
