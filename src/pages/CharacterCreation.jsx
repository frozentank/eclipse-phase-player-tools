export default function CharacterCreation() {
  return (
    <div className="page-content">
      <h1>Character Creation</h1>
      
      <section>
        <h2>Overview</h2>
        <p>
          Creating a character for Eclipse Phase involves several steps. This guide walks you through the process.
        </p>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>
          <li><strong>Define Character Concept</strong> - What kind of character are you building?</li>
          <li><strong>Choose Background</strong> - What is your character's history</li>
          <li><strong>Choose Faction</strong> - Who does your character hold allegiance to</li>
          <li><strong>Spend Free Points</strong> - These are automatic things your character gets
            <ul>
                <li>105 aptitude points</li>
                <li>1 Moxie</li>
                <li>5,000 credit</li>
                <li>50 Rep</li>
                <li>Native tongue</li>
            </ul>
          </li>
          <li><strong>Spend Customization Points</strong> - 
            <ul>
                <li> 1,000 CP to spend
                    <ul>
                        <li>15 CP = 1 Moxie</li>
                        <li>10 CP = 1 aptitude point</li>
                        <li>5 CP = 1 psi sleight</li>
                        <li>5 CP = 1 specialization</li>
                        <li>2 CP = 1 skill point (61-80)</li>
                        <li>1 CP = 1 skill point (up to 60)</li>
                        <li>1 CP = 1,000 credit</li>
                        <li>1 CP = 10 rep</li>
                    </ul>
                </li>
                <li>Active skill minimum: 400 skill points</li>
                <li>Knowledge skill minimum: 300 skill points</li>
                <li>Choose Starting Morph</li>
                <li>Choose Traits</li>
            </ul>
          </li>
          <li><strong>Purchase Gear</strong> - What does your character own
            <ul>
                <li>Morphs must be purchased with CP</li>
                <li>Other gear may be purchased with credits using these values:
                    <table>
                        <thead>
                            <tr>
                              <th>Category</th>
                              <th>Range</th>
                              <th>Average</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                              <td>Trivial</td>
                              <td>1-99</td>
                              <td>50</td>
                          </tr>
                          <tr>
                              <td>Low</td>
                              <td>100-499</td>
                              <td>250</td>
                          </tr>
                          <tr>
                              <td>Moderate</td>
                              <td>500-1,499</td>
                              <td>1,000</td>
                          </tr>
                          <tr>
                              <td>High</td>
                              <td>1,500-9,999</td>
                              <td>5,000</td>
                          </tr>
                          <tr>
                              <td>Expensive</td>
                              <td>10,000+</td>
                              <td>20,000</td>
                          </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
          </li>
          <li><strong>Choose Motiviation</strong> - Choose 3 things that motivate your character</li>
          <li><strong>Calculate Remaining Stats</strong> - Calculate these values
            <ul>
                <li>Lucidity (LUC) = WIL x 2</li>
                <li>Trauma Threshold (TT) = LUC ÷ 5 (round up)</li>
                <li>Insanity Rating (IR) = LUC x 2</li>
                <li>Initiative (INIT) = ( REF + INT ) ÷ 5</li>
                <li>Damage Bonus (DB) = SOM ÷ 10</li>
                <li>Death Rating (DR) (biomorphs) = DUR x 1.5</li>
                <li>Death Rating (DR) (synthmorphs) = DUR x 2</li>
                <li>Speed = 1 (or 3 for infomorphs)</li>
            </ul>
          </li>
          <li><strong>Detail the Character</strong> - Name, physical description, etc</li>
        </ol>
      </section>

      <section>
        <h2>Resources</h2>
        <p>Use the tools on this site to explore each aspect of character creation in detail.</p>
      </section>
    </div>
  )
}
