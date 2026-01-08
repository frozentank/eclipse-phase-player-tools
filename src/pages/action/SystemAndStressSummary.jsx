export default function SystemsAndStressSummary() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold tracking-wide border-b border-neutral-600 pb-2">
          SYSTEMS, STRESS & MOVEMENT SUMMARY
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* COLUMN 1 */}
          <div className="space-y-4">

            <TableSection title="Moxie (p. 122)">
              <Row label="Ignore mods" value="Spent before roll" />
              <Row label="Flip-flop d100" value="Reverse digits" />
              <Row label="Upgrade success" value="Success → Critical" />
              <Row label="Downgrade failure" value="Critical → Regular" />
              <Row label="Go first" value="Before action phase" />
            </TableSection>

            <TableSection title="Networking Mods (p. 287)">
              <Row label="Favor > Rep level" value="-10 / level" />
              <Row label="Rep > Favor level" value="+10 / level" />
              <Row label="Keeping quiet" value="Variable" />
              <Row label="Burning rep" value="+rep burned" />
              <Row label="Paying extra" value="+10 / level" />
            </TableSection>

            <TableSection title="Ectos (p. 246)">
              <Row label="Rushed" value="-10" />
              <Row label="Task action time" value="+25%" />
            </TableSection>

            <TableSection title="Resleeving (p. 271)">
              <Row label="Integration" value="SOM ×3 + mods" />
              <Row label="Alienation" value="INT ×3 + mods" />
              <Row label="Continuity" value="WIL ×3" />
              <Row label="Forking" value="See p. 273" />
              <Row label="Merging" value="See p. 275" />
            </TableSection>

            <TableSection title="Other Important Topics">
              <Row label="Acquiring Goods/Services" value="p. 289" />
              <Row label="Complimentary Skills" value="p. 173" />
              <Row label="Derangements" value="p. 210" />
              <Row label="Game Rules Summary" value="p. 127" />
              <Row label="Hacking" value="p. 393" />
              <Row label="Healing" value="p. 208" />
              <Row label="Hostile Environments" value="p. 200" />
              <Row label="Mental Healing/Psychotherapy" value="p. 215" />
              <Row label="Mesh Gear Quality" value="p. 247" />
              <Row label="Object/Synthmorph Repair" value="p. 208" />
              <Row label="Psi Mechanics" value="p. 220" />
            </TableSection>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-4">

            <InfoSection title="Stress Test (p. 214)">
              <p>WIL ×3. Failure = SV × XP. Success = Hardening.</p>
            </InfoSection>

            <TableSection title="Stress Values (p. 215)">
              <Row label="Failing horribly" value="1d10/2" />
              <Row label="Helplessness" value="1d10/2" />
              <Row label="Betrayal" value="1d10/2" />
              <Row label="Extended isolation" value="1d10/2" />
              <Row label="Extreme violence (viewing)" value="1d10/2" />
              <Row label="Death imminent" value="1d10" />
              <Row label="Witnessing death" value="1d10" />
              <Row label="Losing loved one" value="1d10/2" />
              <Row label="Responsible for death" value="1d10+5" />
              <Row label="Murder scene" value="1d10+5" />
              <Row label="Torture (viewing)" value="1d10+2" />
              <Row label="Torture (moderate)" value="2d10+5" />
              <Row label="Torture (severe)" value="3d10+5" />
              <Row label="Encountering aliens" value="1d10/2" />
              <Row label="Non-sentient alien" value="1d10" />
              <Row label="Hostile alien" value="1d10+3" />
              <Row label="Advanced technology" value="1d10/2" />
              <Row label="Exsurgent tech" value="1d10/2" />
              <Row label="Exsurgent infection" value="1d10" />
              <Row label="Psi-epsilon sleights" value="1d10+2" />
            </TableSection>

            <TableSection title="Non-Physical Aptitude Tests (p. 175)">
              <Row label="Composure / Resolve" value="WIL ×3" />
              <Row label="Having an Idea" value="INT ×3 or COG ×3" />
              <Row label="Memorizing / Remembering" value="COG ×3" />
            </TableSection>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-4">

            <TableSection title="Movement – Earth Gravity (p. 190)">
              <Row label="Walk (Quick)" value="4 m/action" />
              <Row label="Run (Quick)" value="20 m/action" />
              <Row label="Sprint (Complex)" value="5" />
              <Row label="Jump (Standing)" value="SOM/20 (RU)" />
              <Row label="Jump (Running)" value="SOM/5 (RU)" />
              <Row label="Jump (Vertical)" value="1 m" />
              <Row label="Swim" value="1" />
              <Row label="Crawl" value="1" />
            </TableSection>

            <InfoSection title="Freerunning">
              <p>
                +1 m / 10 MoS (max +5).  
                Jumping gains +0.25 m per 10 MoS.
              </p>
            </InfoSection>

            <InfoSection title="What Your Muse Can Do (p. 245)">
              <ul className="list-disc list-outside pl-4 space-y-1">
                <li>Research and gather information</li>
                <li>Scan newsfeeds and mesh updates</li>
                <li>Monitor PANs and slaved devices</li>
                <li>Launch countermeasures against intruders</li>
                <li>Remote control and command robots</li>
                <li>Monitor Rep scores</li>
                <li>Provide audio translation</li>
                <li>Act as privacy node or stealth signal</li>
                <li>Track preferences and anticipate needs</li>
              </ul>
            </InfoSection>
          </div>
        </div>

        {/* SKILL CATEGORIES */}
        <TableSection title="Skill Categories">
          <Row
            label="Combat"
            value="Beam, Blades, Clubs, Exotic Weapons, Kinetic, Seeker, Spray, Thrown, Unarmed"
          />
          <Row
            label="Mental"
            value="Control, Investigation, Navigation, Perception, Psi Assault, Scrounging"
          />
          <Row
            label="Physical"
            value="Climbing, Disguise, Flight, Free Fall, Freerunning, Infiltration, Palming, Swimming"
          />
          <Row
            label="Psi"
            value="Control, Psi Assault, Sense"
          />
          <Row
            label="Social"
            value="Animal Handling, Deception, Impersonation, Intimidation, Kinesics, Networking, Persuasion"
          />
          <Row
            label="Technical"
            value="Demolition, Hardware, Infosec, Interfacing, Medicine, Programming, Research"
          />
          <Row
            label="Vehicle"
            value="Pilot"
          />
        </TableSection>

      </div>
    </div>
  )
}

/* ---------- Helper Components ---------- */

function TableSection({ title, children }) {
  return (
    <section className="border border-neutral-700 rounded-md">
      <h2 className="bg-neutral-800 px-2 py-1 text-xs font-semibold tracking-wide">
        {title}
      </h2>
      <table className="w-full table-fixed text-sm leading-tight">
        <tbody>{children}</tbody>
      </table>
    </section>
  )
}

function Row({ label, value }) {
  return (
    <tr className="border-t border-neutral-700">
      <td className="px-2 py-0.5 align-top">
        {label}
      </td>
      <td className="px-2 py-0.5 w-2/3 text-right font-mono whitespace-nowrap">
        {value}
      </td>
    </tr>
  )
}

function InfoSection({ title, children }) {
  return (
    <section className="border border-neutral-700 rounded-md p-2 text-sm space-y-1">
      <h2 className="font-semibold tracking-wide text-xs">
        {title}
      </h2>
      {children}
    </section>
  )
}
