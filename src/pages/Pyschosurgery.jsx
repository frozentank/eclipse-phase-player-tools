import { useState } from 'react'
import SearchableList from '../components/SearchableList'
import PSYCHOSURGERY_DATA from '../data/Psychosurgery'


export default function Psychosurgery() {
  const [selectedPsychosurgery, setSelectedPsychosurgery] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p><strong>Timeframe:</strong> {item.timeframe}</p>
      <p><strong>PM:</strong> {item.pm}</p>
      <p><strong>SV:</strong> {item.sv}</p>
      <p>{item.details}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Psychosurgery Procedures</h1>
      
      <p>
        The following alterations may be accomplished with psychosurgery. At the gamemaster's discretion, other mind-editing procedures may be attempted, using these as a guideline.
      </p>

      <p>
        Psychosurgery can have these additional modifiers for the rolls:
      </p>
      <table>
        <thead>
          <tr><th>Situtation</th><th>Psychosurgery Test Modifier</th><th>SV Modifier</th></tr>
        </thead>
        <tbody>
          <tr><td>Improper Preparatory Diagnosis</td><td>-30</td><td>+1</td></tr>
          <tr><td>Safety Protocols Ignored</td><td>+20</td><td>x2</td></tr>
          <tr><td>Simulspace Time Acceleration</td><td>-20</td><td>+2</td></tr>
          <tr><td>Subject is an AI, AGI, or Uplift</td><td>-20</td><td>+1</td></tr>
        </tbody>
      </table>

      <div className="searchable-container">
        <SearchableList
          items={PSYCHOSURGERY_DATA}
          searchFields={['name', 'description', 'type']}
          onSelect={setSelectedPsychosurgery}
          selectedItem={selectedPsychosurgery}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
