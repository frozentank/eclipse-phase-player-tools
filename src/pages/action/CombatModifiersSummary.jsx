export default function CombatSummary() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold tracking-wide border-b border-neutral-600 pb-2">
          COMBAT MODIFIERS & ACTIONS SUMMARY
        </h1>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* COLUMN 1 */}
          <div className="space-y-4">

            <TableSection title="Combat Modifiers (p. 193)">
              <Row label="Using off-hand" value="-20" />
              <Row label="Wounded" value="-10 / wound" />
              <Row label="Traumatized" value="-10 / wound" />
              <Row label="Superior position" value="+20" />
              <Row label="Touch-only attack" value="+20" />
              <Row label="Called shot" value="-10" />
              <Row label="Wielding 2+ weapons in one hand" value="-20" />
              <Row label="Very small target (mouse/insect)" value="-30" />
              <Row label="Small target (child-sized)" value="-10" />
              <Row label="Large target (car-sized)" value="+10" />
              <Row label="Very large target (side of barn)" value="+30" />
              <Row label="Visibility impaired (minor)" value="-10" />
              <Row label="Visibility impaired (major)" value="-20" />
              <Row label="Blind attack" value="-30" />
            </TableSection>

            <TableSection title="Melee Modifiers">
              <Row label="Reach advantage" value="+10" />
              <Row label="Charging or receiving charge" value="+10" />
            </TableSection>

            <TableSection title="Ranged Modifiers">
              <Row label="Smartlink / laser sight" value="+10" />
              <Row label="Attacker behind cover" value="-10" />
              <Row label="Attacker running" value="-20" />
              <Row label="Attacker in melee combat" value="-30" />
              <Row label="Defender prone" value="-10" />
              <Row label="Defender hidden" value="-60" />
              <Row label="Aimed shot (quick)" value="+10" />
              <Row label="Aimed shot (complex)" value="+30" />
              <Row label="Sweeping fire (beam)" value="+10 on 2nd shot" />
              <Row label="Multiple targets same action" value="-20 / additional target" />
              <Row label="Indirect fire" value="-30" />
              <Row label="Point-blank range (≤2m)" value="+10" />
              <Row label="Short range" value="+0" />
              <Row label="Medium range" value="-10" />
              <Row label="Long range" value="-20" />
              <Row label="Extreme range" value="-30" />
            </TableSection>

            <TableSection title="Area Effects">
              <Row label="Blast" value="-2 DV / meter from center" />
              <Row label="Uniform blast" value="-2 DV / meter from sphere" />
              <Row label="Cone" value="Short: +1d10DV, Medium: 2 targets, Long: +1d10DV" />
            </TableSection>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-4">

            <TableSection title="Firing Modes (p. 198)">
              <Row label="Single Shot (SS)" value="1 shot" />
              <Row label="Semi-Automatic (SA)" value="2 shots, 2 attacks" />
              <Row label="Burst Fire (BF)" value="3 shots, +10DV, hit 2 targets" />
              <Row label="Full Auto (FA)" value="10 shots, +1d10DV, hit 3 targets" />
            </TableSection>

            <InfoSection title="Suppressive Fire (p. 204)">
              <p>
                In FA mode, expend 20 shots. Lasts until next Action Turn.
                Creates a 20-meter cone. Characters moving through or out of the
                zone are attacked by a single shot.
              </p>
            </InfoSection>

            <InfoSection title="Attack Multiple Targets (p. 202)">
              <p>
                Melee: Declare up to 3 targets within 1 meter. Apply -20 per target.
              </p>
              <p>
                Ranged: -20 per additional target and targets must be within
                1 meter of each other.
              </p>
            </InfoSection>

            <InfoSection title="Attack with Multiple Weapons (p. 206)">
              <p>
                Melee: Same target, +1d10DV for each additional weapon (max 3d10).
              </p>
              <p>
                Ranged: Fire all weapons at same target. Add -20 per weapon after first.
              </p>
            </InfoSection>

            <TableSection title="Called Shot (p. 197)">
              <Row label="Bypass armor" value="Ignore armor rating" />
              <Row label="Disarm" value="Half DV, target SOM x3 or drop weapon" />
              <Row label="Specify target" value="GM decides effect" />
            </TableSection>

            <TableSection title="Grenades / Seekers (p. 199)">
              <Row label="Airburst" value="Explode when distance reached" />
              <Row label="Impact" value="Explode on impact" />
              <Row label="Signal" value="Explode on signal" />
              <Row label="Timer" value="Explode after timer" />
              <Row label="Thrown grenade back" value="COO x2 + REF" />
              <Row label="Jump on grenade" value="COO + REF" />
            </TableSection>

            <TableSection title="Scatter (p. 204)">
              <Row label="Miss with blast weapon" value="MoF × meters scattered" />
            </TableSection>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-4">

            <TableSection title="Charging (Melee) (p. 197)">
              <Row label="Charge" value="-10 running, +1d10DV melee" />
              <Row label="Receive charge" value="Delay action, +20 vs charger" />
            </TableSection>

            <TableSection title="Knockback / Knockdown (p. 202)">
              <Row label="Knockback" value="Attack 1m / MoS" />
              <Row label="Knockdown" value="Attack MoS 30+" />
            </TableSection>

            <TableSection title="Subdual (p. 204)">
              <Row label="Subdual attack" value="Melee only, half DV, SOM x3" />
              <Row label="Grappled" value="May communicate or use small skills" />
            </TableSection>

            <TableSection title="Shock (Biomorphs/Pods)">
              <Row label="DUR > current" value="Armor test or fall incapacitated" />
              <Row label="Failure" value="Stunned 1 action turn" />
            </TableSection>

            <TableSection title="MoS Damage Bonus (p. 192)">
              <Row label="MoS 30+" value="+5 DV" />
              <Row label="MoS 60+" value="+10 DV" />
            </TableSection>

            <InfoSection title="Full Defense (p. 198)">
              <p>+30 to all defense tests. Requires no attacks this turn.</p>
            </InfoSection>

            <TableSection title="Physical Aptitude Tests (p. 175)">
              <Row label="Brute strength" value="SOM × 3" />
              <Row label="Catching thrown object" value="COO × 2 + REF" />
              <Row label="Escape artist" value="COO + SOM" />
            </TableSection>

            <TableSection title="Wound Effects (p. 207)">
              <Row label="General" value="-10 to all actions per wound" />
              <Row label="Knockdown" value="SOM ×3 or fall prone" />
              <Row label="Unconscious" value="2+ wounds, SOM ×3 or fall unconscious" />
              <Row label="Bleeding" value="-1 DV per action until treated" />
            </TableSection>

            <TableSection title="Trauma Effects (p. 209)">
              <Row label="General" value="-10 to all actions per trauma" />
              <Row label="Disorientation" value="WIL ×3 or stunned" />
              <Row label="Derangement" value="Temporary mental condition" />
            </TableSection>

          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Helper Components ---------- */

function TableSection({ title, children }) {
  return (
    <section className="border border-neutral-700 rounded-md">
      <h2 className="bg-neutral-800 px-3 py-1 text-sm font-semibold tracking-wide">
        {title}
      </h2>
      <table className="w-full table-fixed text-sm">
        <tbody>{children}</tbody>
      </table>
    </section>
  )
}

function Row({ label, value }) {
  return (
    <tr className="border-t border-neutral-700">
      <td className="px-3 py-1">{label}</td>
      <td className="px-3 py-1 text-right font-mono">{value}</td>
    </tr>
  )
}

function InfoSection({ title, children }) {
  return (
    <section className="border border-neutral-700 rounded-md p-3 text-sm space-y-1">
      <h2 className="font-semibold tracking-wide">{title}</h2>
      {children}
    </section>
  )
}
