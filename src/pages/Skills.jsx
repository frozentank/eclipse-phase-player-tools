import { useState } from 'react'
import SearchableList from '../components/SearchableList'
import SKILLS_DATA from '../data/Skills'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Linked Aptitude: </strong> {item.linkedAptitude}</p>
      <p><strong>What it is: </strong>{item.what_it_is}</p>
      <p><strong>When you use it: </strong>{item.when_you_use_it}</p>
      {item.sample && (
        <p><strong>Samples: </strong>{item.sample}</p>
      )}
      <p><strong>Specialization: </strong>{item.specialization}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Skills</h1>
      
      <p>
        Skills represent specific training and experience. Each skill is linked to an aptitude that provides a base modifier.
      </p>

      <div className="searchable-container">
        <SearchableList
          items={SKILLS_DATA}
          searchFields={['name', 'description', 'linkedAptitude']}
          onSelect={setSelectedSkill}
          selectedItem={selectedSkill}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
