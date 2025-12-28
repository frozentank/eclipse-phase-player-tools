import { useState } from 'react'
import SearchableList from '../components/SearchableList'

const BACKGROUNDS_DATA = [
  {
    id: 1,
    name: 'Drifter',
    description: 'You were raised with a social grouping that remained on the move throughout the Sol system.',
    details: 'You were raised with a social grouping that remained on the move throughout the Sol system. This could have been free traders, pirates, asteroid farmers, scavengers, or just migrant workers. You are used to roaming space travel between habitats and stations.',
    advantages: '+10 Navigation skill, +20 Pilot: Spacecraft skill, +10 Networking: [Field] skill of your choice',
    disadvantages: 'None',
    common_morphs: 'All, especially Bouncers and Hibernoids',
  },
  {
    id: 2,
    name: 'Fall Evacuee',
    description: 'You were born and raised on Earth and evacuated during the horrors of the Fall',
    details: 'You were born and raised on Earth and evacuated during the horrors of the Fall, leaving your old life (and possibly your friends, family, and loved ones) behind you. You were lucky enough to survive with your body intact and continue to make a life for yourself out in the system.',
    advantages: '+10 Pilot: Groundcraft skill, +10 Networking: [Field] skill of your choice, +1 Moxie',
    disadvantages: 'Only 2,500 Starting Credit (can still buy credit with CP)',
    common_morphs: 'Flats, Splicers',
  },
  {
    id: 3,
    name: 'Hyperelite',
    description: 'You are privileged to have been raised as part of the immortal upper class',
    details: 'You are privileged to have been raised as part of the immortal upper class that rules many inner system habitats and hypercorps. You were pampered with wealth and influence that most people can only dream of.',
    advantages: '+10 Protocol skill, +10,000 Credit, +20 Networking: Hypercorps skill',
    disadvantages: 'May not start with flat, splicer, or any pod, uplift, or synthetic morphs',
    common_morphs: 'Exalts, Sylphs',
  },
  {
    id: 4,
    name: 'Infolife',
    description: 'You entered existence as a digital consciousness',
    details: 'You entered existence as a digital consciousness— an artificial general intelligence (AGI). Your very existence is illegal in certain habitats (a legacy of those who place the Fall at the feet of rampant AIs). Unlike the seed AIs responsible for their Fall, your capacity for self-improvement is limited, though you do have full autonomy.',
    advantages: '+30 Interfacing skill, Computer skills (Infosec, Interfacing, Programming, Research) bought with Customization Points are half price',
    disadvantages: 'Real World Naiveté trait, Social Stigma (AGI) trait, Social skills bought with Customization Points are double price',
    common_morphs: 'Infomorphs, synthetic morphs',
  },
  {
    id: 5,
    name: 'Isolate',
    description: 'You were raised as part of a self-exiled grouping on the fringes of the system.',
    details: 'You were raised as part of a self-exiled grouping on the fringes of the system. Whether raised as part of a religious group, cult, social experiment, anti-tech cell, or a group that just wanted to be isolated, you spent most if not all of your upbringing isolated from other factions.',
    advantages: '+20 to two skills of your choice',
    disadvantages: '-10 starting Rep',
    common_morphs: 'All',
  },
  {
    id: 6,
    name: 'Lost',
    description: 'You are a legacy of one of the most infamous debacles since the Fall.',
    details: 'You are a legacy of one of the most infamous debacles since the Fall. As a member of the “Lost generation,” you went through an accelerated-growth childhood, somehow surviving where others of your kind died, went insane, or were persecuted (see The Lost, p. 233). Your background is a social stigma, but it does provide you with certain advantages ... and burdens.',
    advantages: '+20 to two Knowledge skills of your choice, Psi trait (Level 1)',
    disadvantages: 'Mental Disorder (choose two, this includes the one from Psi) trait, Social Stigma (Lost) trait, must start with Futura morph',
    common_morphs: 'Futuras',
  },
  {
    id: 7,
    name: 'Lunar Colonist',
    description: 'You experienced your childhood in one of the cramped dome cities or underground stations on Luna, Earth\'s moon.',
    details: 'You experienced your childhood in one of the cramped dome cities or underground stations on Luna, Earth\'s moon. You had a ringside seat to the Fall of Earth.',
    advantages: '+10 Pilot: Groundcraft skill, +10 to one Technical, Academic: [Field], or Profession: [Field] skill of your choice, +20 Networking: Hypercorps skill',
    disadvantages: 'None',
    common_morphs: 'Flats, Splicers',
  },
  {
    id: 8,
    name: 'Martian',
    description: 'You were raised in a station on or above Mars',
    details: 'You were raised in a station on or above Mars, now the most populated planet in the system. Your home town may or may not have survived the Fall.',
    advantages: '+10 Pilot: Groundcraft skill, +10 to one Technical, Academic: [Field], or Profession: [Field] skill of your choice, +20 Networking: Hypercorps skill',
    disadvantages: 'None',
    common_morphs: 'Flats, Splicers, and Rusters',
  },
  {
    id: 9,
    name: 'Original Space Colonist',
    description: 'You or your parents were part of the first “generations” of colonists/workers sent out from Earth',
    details: 'You or your parents were part of the first “generations” of colonists/workers sent out from Earth to stake a claim in space, so you are familiar with the cramped confines of spaceflight and life aboard older stations and habitats. As a “zero-one g” (zero-gravity, first- gen), you were never part of the elite. People from your background typically have some sort of specialized tech training as vacworkers or habtechs.',
    advantages: '+10 Pilot: Spacecraft or Freefall skill, +10 to a Technical, Academic: [Field], or Profession: [Field] skill of your choice, +20 to a Networking: [Field] skill of your choice',
    disadvantages: 'None',
    common_morphs: 'All. Use of exotic morphs is common',
  },
  {
    id: 10,
    name: 'Re-instantiated',
    description: 'You were born and raised on Earth, but you did not survive the Fall.',
    details: 'You were born and raised on Earth, but you did not survive the Fall. All that you know is that your body died there, but your backup was transmitted offworld, and you were one of the lucky few to be re-instantiated with a new morph. You may have spent years in dead storage, simulspace, or as an infomorph slave.',
    advantages: '+10 Pilot: Groundcraft skill, +10 to a Networking: [Field] skill of your choice, +2 Moxie',
    disadvantages: 'Edited Memories trait, 0 Starting Credit (can still buy credit with CP)',
    common_morphs: 'Cases, Infomorphs, Synths',
  },
  {
    id: 11,
    name: 'Scumborn',
    description: 'You were raised in the nomadic and chaotic lifestyle common to scum barges.',
    details: 'You were raised in the nomadic and chaotic lifestyle common to scum barges.',
    advantages: '+10 Persuasion or Deception skill, +10 Scrounging skill, +20 Networking: Autonomists skill',
    disadvantages: 'None',
    common_morphs: 'All, especially Bouncers',
  },
  {
    id: 12,
    name: 'Uplift',
    description: 'You are not even human.',
    details: 'You are not even human. You were born as an uplifted animal: chimpanzee, gorilla, orangutan, parrot, raven, crow, or octopus',
    advantages: '+10 Fray skill, +10 Perception skill, +20 to two Knowledge skills of your choice',
    disadvantages: 'Must choose an uplift morph to start',
    common_morphs: 'Neo-Avian, Neo-Hominid, Octomorph',
  },
]

export default function Backgrounds() {
  const [selectedBg, setSelectedBg] = useState(null)

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
      <h1>Backgrounds</h1>
      
      <div className="searchable-container">
        <SearchableList
          items={BACKGROUNDS_DATA}
          searchFields={['name', 'description']}
          onSelect={setSelectedBg}
          selectedItem={selectedBg}
          renderDetails={renderDetails}
        />
      </div>
    </div>
  )
}
