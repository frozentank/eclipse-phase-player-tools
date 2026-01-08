import { Link } from 'react-router-dom'

export default function Action() {
  return (
    <div className="page-content">
      <h1>Actions & Combat</h1>
      
      <div className="sections-nav">
        <section>
          <h2>Overview</h2>
          <p>
            Combat in Eclipse Phase is structured around rounds where characters take turns. This section breaks down the mechanics of actions and combat.
          </p>
        </section>

        <section>
          <h2>Related Topics</h2>
          <ul>
            <li><Link to="actions/turns">Turns and Rounds</Link></li>
            <li><Link to="actions/quick-actions">Quick Actions</Link></li>
            <li><Link to="actions/complex-actions">Complex Actions</Link></li>
            <li><Link to="actions/initiative">Initiative</Link></li>
            <li><Link to="actions/damage">Damage & Healing</Link></li>
          </ul>
        </section>

        <section>
          <h2>Combat Basics</h2>
          <ul>
            <li>Initiative determines turn order</li>
            <li>Each character gets a turn each round</li>
            <li>On your turn, you can take one complex action or two quick actions</li>
            <li>Armor reduces damage</li>
            <li>Health is measured in Wounds</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
