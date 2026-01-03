export default function PsiUsing() {
  return (
    <div className="page-content">
      <h1>Using Psi</h1>
      
      <section>
        <p> 
          Using psi—i.e., drawing on a certain sleight to procure some kind of effect—does not always require a test. Each sleight description details how the power is used.
        </p>
      </section>

      <section>
        <h2>Active Psi</h2>
        <p>
          Active psi sleights must be “activated” to be used. These sleights usually require a skill test. Sleights that target other sentient beings or life forms are always Opposed Tests, while others are handled as Success Tests. The level of concentration required to use these sleights varies and so may call for a Quick, Complex, or Task Action. Active sleights also cause strain to the async. Most psi-gamma sleights fall into this category.
        </p>
        <p>
          Active sleights count as mental actions for characters who have augmentations that grant extra mental actions. Due to the concentration required, however, active psi-gamma sleights cannot be used in the same Action Phase with other mental actions that require a Complex Action.
        </p>
      </section>
      
      <section>
        <h2>Passive Psi</h2>
        <p>
          Passive psi sleights are abilities that are considered automatically active and subconscious. They rarely require an action to be activated and require no effort or strain by the psi user. Passive sleights typically add bonuses to various activities or allow access to certain abilities rather than calling for some kind of skill test. Most psi-chi sleights fall into this category.
        </p>
      </section>

      <section>
        <h2>Psi Range</h2>
        <p>
          Sleights have a Range of either Self, Touch, or Close.
        </p>
        <ul className="list-disc">
          <li>
            <strong>Self:</strong> These sleights only affect the async.
          </li>
          <li>
            <strong>Touch:</strong> Sleights with a Touch range may be used against other biological life, but the async must have physical contact with the target. If the target avoids being touched, this requires a successful melee attack, applying the touch-only +20 modifier. This attack does not cause damage and is considered part of the same action as the psi use.
          </li>
          <li>
            <strong>Close:</strong> Close sleights involve interaction with other biological life from a short distance. The optimal distance is within 5 meters. For each meter beyond that, apply a -10 modifier to the test.
          </li>
          <li>
            <strong>Psi vs Psi:</strong> Due to the nature of psi, sleights are more effective against other psi users. Sleights with a range of Touch may be used from a Close range against another async. Likewise, a sleight with a Close range may be used at twice the normal distance (10 meters) when wielded on another async.
          </li>
        </ul>
        
      </section>

      <section>
        <h2>Targeting</h2>
        <p>
          Synthmorphs, bots, and vehicles may not be targeted by psi sleights, as they lack biological brains. Pods—with brains that are half biological and half computer—are less susceptible and receive a +30 modifier when defending against psi use. Note that infomorphs may never be targeted by psi sleights as psi is not effective within the mesh or simulspace.
        </p>
        <ul className="list-disc">
          <li>
            <strong>Multiple Targets:</strong> An async may target more than one character with a sleight with the same action, as long as each of them can be targeted via the rules above. The psi character only rolls once, with each of the defending characters making their Opposed Tests against that roll. The psi character suffers strain for each target, however, meaning that using psi on multiple targets can be extremely dangerous.
          </li>
          <li>
            <strong>Animals and Less Complex Life Forms:</strong> Psi works against any living creature with a brain and/or nervous system. Against partially sapient and partially uplifted animals, it suffers a -20 modifier and increases strain by +1. Against non-sapient animals, it suffers a -30 modifier and increases strain by +3. It has no effect on or against less complex life forms like plants, algae, bacteria, etc.
          </li>
          <li>
            <strong>Factors and Aliens:</strong> At the gamemaster's discretion, psi sleights may not work on alien creatures at all, depending on their physiology and neurology. If it does work, it is likely to suffer at least a -20 modifier and +1 strain.
          </li>
        </ul>
      </section>

      <section>
        <h2>Opposed Tests</h2>
        <p>
          Psi that is used against another character is resisted with an Opposed Test. Defending characters resist with WIL x 2. Willing characters may choose not to resist. Unconscious or sleeping characters cannot resist.
        </p>
        <p>
          If the psi-wielding character succeeds and the defender fails, the sleight affects the target. If the psi user fails, the defender is unscathed. If both parties succeed in their tests, compare their dice rolls. If the psi user's roll is higher, the sleight bypasses the defender's mental block and affects the target; otherwise, the sleight fails to affect the defender's ego.
        </p>
      </section>

      <section>
        <h2>Target Awareness</h2>
        <p>
          The target of a psi sleight is aware they are being targeted any time they succeed on their half of the Opposed Test (regardless on whether the async rolls higher or not). Note that awareness does not necessarily mean that the target understands that psi abilities are being used on them, especially as most people in Eclipse Phase are unaware of psi's existence. Instead, the target is simply likely to understand that some outside influence is at work or that something strange is happening. They may suspect that they have been drugged or are under the influence of some strange technology.
        </p>
        <p>
          Targets who fail their roll remain unaware.
        </p>
      </section>

      <section>
        <h2>Psi Full Defense</h2>
        <p>
          Like full defense in physical combat, an aware defender (even a non-async) may spend a Complex Action to rally and concentrate their mental defenses, gaining a +30 modifier to their defense test against psi use until their next Action Phase.
        </p>
      </section>

      <section>
        <h2>Criticals</h2>
        <p>
          If the defender rolls a critical success, the character attempting to wield psi is temporarily locked out of the target's mind. The psi user may not target that character with sleights until an appropriate “reset” period has passed, determined by the gamemaster.
        </p>
        <p>
          If the async rolls a critical failure, they suffer temporary incapacitation as their mind dysfunctions in some harsh and distressing ways
        </p>
        <p>
          If a psi user rolls a critical success against a defender or the defender rolls a critical failure, double the potency of the sleight's effect. In the case of psi attacks, the DV can be doubled or mental armor can be bypassed. Alternately, when using Psi Assault the targeted character may be in danger of infection by the Watts-MacLeod Virus.
        </p>
      </section>

      <section>
        <h2>Mental Armor</h2>
        <p>
          The Psi Shield sleight provides mental armor, a form of neural hardening against psi-based attacks. Like physical armor, this mental armor reduces the amount of damage inflicted by a psi assault.
        </p>
      </section>


      <section>
        <h2>Duration</h2>
        <p>
          Psi sleights have one of four durations:
        </p>
        <ul className="list-disc">
          <li>
            <strong>Constant:</strong> Constant sleights are always “on.”
          </li>
          <li>
            <strong>Instant:</strong> Instant sleights take effect only in the Action Phase in which they are used.
          </li>
          <li>
            <strong>Temporary:</strong> Temporary sleights last for a limited duration with no extra effort from the async. The temporary duration is determined by the async's WIL ÷ 5 (round up) and is measured in either Action Turns or minutes, as noted. Strain for the sleight is applied immediately when used, not at the end of the duration.
          </li>
          <li>
            <strong>Sustained:</strong> Sustained sleights require active effort to maintain for as long as the async wants to keep it active. Sustaining a sleight requires concentration, and so the async suffers a -10 modifier to all other skill tests while the sleight is sustained. The async must also stay within the range appropriate to the sleight, otherwise the sleight immediately ends. More than one sleight may be sustained at a time, with a cumulative modifier. Strain for the sleight is applied immediately when used, not at the end of the duration. At the gamemaster's discretion, sleights that are sustained for long periods may incur additional strain.
          </li>
        </ul>
        
      </section>

      <section>
        <h2>Strain</h2>
        <p>
          The use of psi is physically (and sometimes psychologically) draining to a psi user. This phenomenon is known as strain and manifests as fatigue, exhaustion, pain, neural overload, cardiovascular stress, and adynamia (loss of vigor). Though strain has only rarely been known to actually kill an async, the use of too much active psi can be life-threatening in some circumstances.
        </p>
        <p>
          In game terms, every active sleight has a Strain Value of 1d10 ÷ 2 (round up) DV. Every active sleight lists a Strain Value Modifier that modifies this amount. For example, a sleight with a Strain Value Modifier of -1 inflicts (1d10 ÷ 2) -1 DV. Asyncs sleeved in pods suffer twice the DV from strain.
        </p>
        <p>
          If the damage points suffered from strain exceed the character's Wound Threshold, they may inflict a wound just like other damage.
        </p>
      </section>

    </div>
  )
}
