export default function GameRulesSummary() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-slate-800/60 ring-1 ring-slate-700 rounded-lg shadow-lg p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-extrabold tracking-tight">GAME RULES SUMMARY</h1>
            <p className="mt-2 text-sm text-slate-300">
              Everything you need to know about the rules—summed up on a single page.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <Section title="MAKING TESTS">
                <Bullet>Roll d100 (two ten-sided dice, read as percentile from 00 to 99).</Bullet>
                <Bullet>Target number is determined by the appropriate skill or (occasionally) an aptitude.</Bullet>
                <Bullet>Difficulty is represented by modifiers.</Bullet>
                <Bullet>00 is always a success.</Bullet>
                <Bullet>99 is always a failure.</Bullet>
                <Bullet>Margin of Success of 30+ is an Excellent Success.</Bullet>
                <Bullet>Margin of Failure of 30+ is a Severe Failure.</Bullet>
                <Bullet>A roll of doubles (00, 11, 22, etc.) equals a critical success or failure.</Bullet>
              </Section>

              <Section title="SUCCESS TESTS">
                <Bullet>To succeed, roll d100 and score equal to or less than the skill +/- modifiers.</Bullet>
              </Section>

              <Section title="OPPOSED TESTS">
                <Bullet>Each character rolls d100 against their skill +/- modifiers.</Bullet>
                <Bullet>The character who succeeds with the highest roll wins.</Bullet>
                <Bullet>If both characters fail, or both succeed but tie, deadlock occurs.</Bullet>
              </Section>

              <Section title="SIMPLE SUCCESS TESTS">
                <Bullet>Simple Success Tests automatically succeed.</Bullet>
                <Bullet>Success or failure indicates how strongly or poorly the character succeeded.</Bullet>
              </Section>

              <Section title="DEFAULTING">
                <Bullet>If a character does not have the appropriate skill, they may default to the skill’s linked aptitude.</Bullet>
              </Section>

              <Section title="MODIFIERS">
                <Bullet>Modifiers always affect the target number (skill), not the roll.</Bullet>
                <Bullet>Modifiers come in three levels:</Bullet>
                <SubList>
                  <Bullet>Minor (+/-10)</Bullet>
                  <Bullet>Moderate (+/-20)</Bullet>
                  <Bullet>Major (+/-30)</Bullet>
                </SubList>
                <Bullet>The maximum modifiers that can be applied are +/-60.</Bullet>
              </Section>

              <Section title="TEAMWORK">
                <Bullet>One character is chosen as the primary actor.</Bullet>
                <Bullet>Each helper adds a +10 modifier (max +30).</Bullet>
              </Section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <Section title="TAKING EXTRA TIME">
                <Bullet>Characters may take extra time to complete an action.</Bullet>
                <Bullet>On Complex actions, each minute adds +10 to the test.</Bullet>
                <Bullet>On Task actions, every 50% extension adds +10.</Bullet>
              </Section>

              <Section title="APTITUDES">
                <Bullet>Aptitudes range from 1 to 30 (average 15).</Bullet>
                <Bullet>
                  Aptitudes are: Cognition, Coordination, Intuition, Reflexes, Savvy,
                  Somatics, and Willpower.
                </Bullet>
              </Section>

              <Section title="LEARNED SKILLS">
                <Bullet>Skills range from 1–99 (average 50).</Bullet>
                <Bullet>Each skill is linked to and based on an aptitude.</Bullet>
                <Bullet>Morphs, gear, drugs, etc. may provide bonuses or penalties.</Bullet>
              </Section>

              <Section title="SPECIALIZATIONS">
                <Bullet>Specializations add +10 when using a skill for that area.</Bullet>
                <Bullet>Each skill may have only one specialization.</Bullet>
              </Section>

              <Section title="ACTION TURNS">
                <Bullet>Action Turns are 3 seconds in length.</Bullet>
                <Bullet>Turn order is determined by Initiative.</Bullet>
                <Bullet>Automatic actions are always “on.”</Bullet>
                <Bullet>Characters may take any number of Quick Actions (minimum of 3).</Bullet>
                <Bullet>Characters may take a number of Complex Actions equal to Speed.</Bullet>
              </Section>

              <Section title="TASK ACTIONS">
                <Bullet>Task Actions require longer than one Action Turn.</Bullet>
                <Bullet>Timeframes range from 2 Turns to 2 years.</Bullet>
                <Bullet>Timeframe reduced by 10% for each 10 points of MoS.</Bullet>
                <Bullet>
                  If characters fail, they must work for a minimum period equal to 10%
                  of the timeframe per 10 points of MoF.
                </Bullet>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ---------- Helper Components ---------- */

function Section({ title, children }) {
  return (
    <section className="bg-slate-800/30 rounded-md p-4 ring-1 ring-slate-700">
      <h2 className="text-lg font-semibold tracking-wide mb-2 border-b border-slate-700/40 pb-1 text-slate-100">
        {title}
      </h2>
      <div className="text-sm text-slate-200">
        <ul className="list-disc list-outside pl-5 space-y-1">
          {children}
        </ul>
      </div>
    </section>
  )
}

function Bullet({ children }) {
  return <li className="leading-tight">{children}</li>
}

function SubList({ children }) {
  return (
    <ul className="list-inside pl-3 mt-1 space-y-1 text-slate-200">
      {children}
    </ul>
  )
}
