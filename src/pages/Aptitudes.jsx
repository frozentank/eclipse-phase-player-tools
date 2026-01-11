export default function Aptitudes() {
  const aptitudes = [
    {
      name: 'Cognition (COG)',
      description: 'Mental capacity, memory, learning, and reasoning',
      applications: ['Research', 'Academics', 'System Administration'],
    },
    {
      name: 'Coordination (COO)',
      description: 'Physical coordination, balance, and dexterity',
      applications: ['Combat', 'Piloting', 'Zero-G Movement'],
    },
    {
      name: 'Intuition (INT)',
      description: 'Instinct, perception, and sensory awareness',
      applications: ['Hacking', 'Awareness', 'Survival'],
    },
    {
      name: 'Reflexes (REF)',
      description: 'Speed of thought and quick reactions',
      applications: ['Initiative', 'Close Combat', 'Dodge'],
    },
    {
      name: 'Savvy (SAV)',
      description: 'Mental adaptability and social intuition',
      applications: ['Impersonation', 'Kinesics', 'Animal Handling'],
    },
    {
      name: 'Somatics (SOM)',
      description: 'Physical toughness and pain tolerance',
      applications: ['Damage Resistance', 'Survival', 'Medical'],
    },
    {
      name: 'Willpower (WIL)',
      description: 'Mental fortitude and Psi affinity',
      applications: ['Resistance to Mental Attacks', 'Psi Abilities'],
    },
  ]

  return (
    <div className="page-content">
      <h1>Aptitudes</h1>
      
      <p>
        Aptitudes represent your character's inherent capabilities in six key areas. Every test in Eclipse Phase is based on one of these six aptitudes.
      </p>

      <div className="aptitudes-grid">
        {aptitudes.map((apt) => (
          <div key={apt.name} className="aptitude-card">
            <h3>{apt.name}</h3>
            <p>{apt.description}</p>
            <div className="aptitude-applications">
              <strong>Applications:</strong>
              <ul>
                {apt.applications.map((app) => (
                  <li key={app}>{app}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
