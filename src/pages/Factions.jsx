import { useState } from 'react'
import SearchableList from '../components/SearchableList'

const FACTIONS_DATA = [
  {
    id: 1,
    name: 'Anarchist',
    description: 'You are opposed to hierarchy, favoring flat forms of social organization',
    details: 'You are opposed to hierarchy, favoring flat forms of social organization and directly democratic decision-making. You believe power is always corrupting and everyone should have a say in the decisions that affect their lives. According to the primitive and restrictive policies of the inner system and Jovian Junta, this makes you an irresponsible hoodlum at best and a terrorist at worst. In your opinion, that’s comedy coming from governments that keep their populations in line with economic oppression and threats of violence.',
    advantages: '+10 to a skill of your choice, +30 Networking: Autonomists skill',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 2,
    name: 'Argonaut',
    description: 'You are part of a scientific technoprogressive movement',
    details: 'You are part of a scientific technoprogressive movement that seeks to solve transhumanity\'s injustices and inequalities with technology. You support universal access to technology and healthcare, open-source models of production, morphological freedom, and democratization. You try to avoid factionalism and divisive politics, seeing transhumanity\'s splintering as a hindrance to its perpetuation.',
    advantages: '+10 to two Technical, Academic: [Field], or Profession: [Field] skills; +20 Networking: Scientists',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 3,
    name: 'Barsoomian',
    description: 'You call the Martian outback and wilds your home. You are a “redneck”',
    details: 'You call the Martian outback and wilds your home. You are a “redneck,” a lower-class Martian from the rural areas that often find themselves in conflict with the policies and goals of the hyper- corp domes and Tharsis League.',
    advantages: '+10 Freerunning, +10 to one skill of your choice, +20 Networking: Autonomists skill',
    disadvantages: 'None',
    common_morphs: 'Cases, Flats, Rusters, Splicers, Synths',
  },
  {
    id: 4,
    name: 'Brinker',
    description: 'You or your faction is reluctant to deal with the rest of the transhumanity',
    details: 'You or your faction is reluctant to deal with the rest of the transhumanity and the various goings-on in the rest of the system. Your particular grouping may have sought out self-imposed isolation to pursue their own interests, or they may have been exiled for their unpopular beliefs. Or you may simply be a loner who prefers the vast emptiness of space to socializing with others. You might be a religious cultist, a primitivist, a utopian, or something altogether uninterested in transhumanity.',
    advantages: '+10 Pilot: Spacecraft skill, +10 to a skill of your choice, +20 to a Networking: [Field] skill of your choice',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 5,
    name: 'Criminal',
    description: 'You are involved with the crime-oriented underworld.',
    details: 'You are involved with the crime-oriented underworld. You may work with one of the Sol system\'s major criminal factions—triads, the Night Cartel, the ID Crew, Nine Lives, Pax Familae—or one of the smaller, local operators with a big stake in a specific habitat. You might be a vetted member-for-life, a reluctant recruit, or just a freelancer looking for the next gig.',
    advantages: '+10 Intimidation skill, +30 Networking: Criminal skill',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 6,
    name: 'Extropian',
    description: 'You are an anarchistic supporter of the free market and private property.',
    details: 'You are an anarchistic supporter of the free market and private property. You oppose government and favor a system where security and legal matters are handled by private competitors. Whether you consider yourself an anarcho-capitalist or a mutualist (a difference only other Extropians can figure out), you occupy a middle ground between the hypercorps and autonomists, dealing with both and yet trusted by neither.',
    advantages: '+10 Persuasion skill, +20 Networking: Autonomists skill, +10 Networking: Hypercorps skill',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 7,
    name: 'Hypercorp',
    description: 'You hail from a habitat controlled by the hypercorps.',
    details: 'You hail from a habitat controlled by the hypercorps. You might be a hypercapitalist entrepeneur, a hedonistic socialite, or a lowly vacworker, but you accept that certain liberties must be sacrificed for security and freedom.',
    advantages: '+10 Protocol skill, +20 Networking: Hypercorps skill, +10 to any Networking: [Field] skill',
    disadvantages: 'None',
    common_morphs: 'Exalts, Olympians, Splicers, Sylphs',
  },
  {
    id: 8,
    name: 'Jovian',
    description: 'Your faction is noted for its authoritarian regime',
    details: 'Your faction is noted for its authoritarian regime, bioconservative ideologies, and militaristic tendencies. Where you come from, technology is not to be trusted and humans need to be protected from themselves. To ensure its survival, humanity must be able to defend itself and unfettered growth must be checked.',
    advantages: '+10 to two weapon skills of your choice, +10 Fray, +20 Networking: Hypercorps skill',
    disadvantages: 'Must start with a Flat or Splicer morph, may not start with any nanoware/advanced nanotech',
    common_morphs: 'Flats and Splicers',
  },
  {
    id: 9,
    name: 'Lunar',
    description: 'You hail from Luna, the original off-Earth colony world.',
    details: 'You hail from Luna, the original off-Earth colony world. Now overpopulated and in decline, Luna is one of the few places where people still cling to old- Earth ethnic and national identities. Your home is also within sight of Earth, a constant reminder that encour- ages many “Loonies” to be reclaimers, deploring the hypercorp interdiction and arguing that you have a right to return to Earth, terraform it, and re-establish it as a living homeworld.',
    advantages: '+10 to one Language: [Field] of your choice, +20 Networking: Hypercorps skill, +10 Networking: Ecologists skill',
    disadvantages: 'None',
    common_morphs: 'Cases, Exalts, Flats, Splicers, Synths',
  },
  {
    id: 10,
    name: 'Mercuial',
    description: 'Your faction has no interest in co-opting their true natures in order to become more “human.”',
    details: 'Your faction has no interest in co-opting their true natures in order to become more “human.” You might be an AGI that does not necessarily intertwine its destiny with transhumanity or an uplift that seeks to preserve and promote non-human life (or at least your own species). You might even be an infomorph or posthuman who has strayed so far from transhuman interests and values that you now consider yourself to be forging a unique new path of life.',
    advantages: '+10 to any two skills of your choice, +20 to a Networking: [Field] skill of your choice',
    disadvantages: 'None',
    common_morphs: 'Infomorphs, Synths, uplift morphs',
  },
  {
    id: 11,
    name: 'Scum',
    description: 'This is the future we\'ve all been waiting for, and you\'re going to enjoy it to the max.',
    details: 'This is the future we\'ve all been waiting for, and you\'re going to enjoy it to the max. A paradigm shift has occurred, and while everyone else is catching up, your faction embraces and revels in it. There is no more want, no more death, no more limits on what you can be. The scum have immersed themselves in a new way of life, changing themselves as they see fit, trying out new experiences, and pushing the boundaries wherever they can ... and fuck anyone who can’t deal with that.',
    advantages: '+10 Freefall skill, +10 to a skill of your choice, +20 Networking: Autonomists skill',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 12,
    name: 'Socialite',
    description: 'You are a member of the inner system glitterati',
    details: 'You are a member of the inner system glitterati, the media-saturated social cliques that set trends, spread memes, and make or break lives with whispers, innuendo, and backroom deals. You are simultaneously an icon and a devout follower. Culture isn\'t just your life, it\'s your weapon of choice.',
    advantages: '+10 Persuasion skill, +10 Protocol skill, +20 Networking: Media skill',
    disadvantages: 'May not start with flat, pod, uplift, or synthetic morphs',
    common_morphs: 'Exalts, Olympians, Sylphs',
  },
  {
    id: 13,
    name: 'Titanian',
    description: 'You are a participant in the Titanian Commonwealth\'s socialist cyberdemocracy.',
    details: 'You are a participant in the Titanian Commonwealth\'s socialist cyberdemocracy. Unlike other autonomist projects, Titanian joint efforts have assembled some impressive infrastructural projects as approved by the Titanian Plurality and pursued by state-owned microcorps.',
    advantages: '+10 to two Technical or Academic skills of your choice, +20 Networking: Autonomists skill',
    disadvantages: 'None',
    common_morphs: 'All',
  },
  {
    id: 14,
    name: 'Ultimate',
    description: 'Your faction sees the potential in transhumanity\'s future',
    details: 'Your faction sees the potential in transhumanity\'s future and looks back upon the rest of transhumanity as weak and hedonistic. Transhumanity is set to take the next evolutionary step and it’s time for transhumans to be redesigned to the best of our capabilities.',
    advantages: '+10 to two skills of your choice, +20 to a Networking: [Field] skill of your choice',
    disadvantages: 'May not start with Flat, Splicer, uplift, or pod morphs',
    common_morphs: 'Exalts, Remades',
  },
  {
    id: 15,
    name: 'Venusian',
    description: 'You are a supporter of the Morningstar Confederation of Venusian aerostats',
    details: 'You are a supporter of the Morningstar Confederation of Venusian aerostats, resentful of the growing influence of the Planetary Consortium and other entrenched and conservative inner system powers. You see your faction\'s ascension as a chance to reform the old guard ways of inner system politics.',
    advantages: '+10 Pilot: Aircraft, +10 to one skill of your choice, +20 Networking: Hypercorps skill',
    disadvantages: 'None',
    common_morphs: 'Cases, Exalts, Mentons, Splicers, Sylphs, Synths',
  },
]

export default function Factions() {
  const [selectedFaction, setSelectedFaction] = useState(null)

  const renderDetails = (item) => (
    <>
      <h3>{item.name}</h3>
      <p>{item.details}</p>
      <p><strong>Advantages:</strong> {item.advantages}</p>
      <p><strong>Disadvantages:</strong> {item.disadvantages}</p>
      <p><strong>Common Morphs:</strong> {item.common_morphs}</p>
    </>
  )

  return (
    <div className="page-content">
      <h1>Factions</h1>
      
      <div className="searchable-container">
        <SearchableList
          items={FACTIONS_DATA}
          searchFields={['name', 'description']}
          onSelect={setSelectedFaction}
          selectedItem={selectedFaction}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
