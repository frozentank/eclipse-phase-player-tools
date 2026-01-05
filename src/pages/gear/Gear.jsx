export default function Gear() {
  return (
    <div className="page-content">
      <h1>Gear</h1>
      
      <p>
        Gear represents equipment available in Eclipse Phase, from advanced weapons to everyday tools. Most gear can be fabricated or obtained through various means.
      </p>

      <section>
        <h2>Acquiring Gear</h2>
        <p>
          During character creation, players purchase gear for their characters using the credits they have during the character creation process. Once play begins, however, characters must obtain any equipment they need the usual way: by buying, borrowing, making, or stealing it.
        </p>
        <p>
          In the inner system, hypercorp, and Jovian Republic settlements—and other places where capitalism still reigns—gear acquisition is simply a matter of finding a seller and buying it. Each item has a listed cost, from Trivial to Expensive, as noted on the Gear Costs table. Due to local availability of resources, supply and demand, and legalities, these listed costs are meant to be approximations. When no other factors apply, the listed Average Cost for that category can be used. Otherwise the gamemaster should modify the item's worth as they see fit, according to local economic factors, while still keeping it within that cost category range. The Cost Modifiers table lists out some suggested changes to an item's cost, but these are simply recommendations and can be ignored or followed as the gamemaster deems fit. The exact local conditions are largely up to the gamemaster to determine, as best fits their game.
        </p>
        <p>
          Some gear is listed with a Cost based on other gear (usually one category higher than a related item). For any Cost elevated above Expensive, add 10,000 credits for each category raise.
        </p>
        <p>
          In some circumstances, characters may attempt to haggle over gear prices. This is best handled as roleplaying, but the gamemaster may also call for an Opposed Persuasion Test (or possibly an Intimidation Test). The character who wins may increase or reduce the price by 10% per 10 points of MoS.
        </p>
        <p>
          In the outer system, anarchist, Titanian, scum, and other habitats that use the reputation economy, characters must rely on their rep scores to acquire the goods and services they need. The mechanics for this are covered under Reputation and Social Networks
        </p>
        <p>
          Characters are of course free to get their hands on equipment by any other means they devise—con schemes, borrowing from friends, and outright theft, with all of the appropriate tests and consequences. In some cases, acquiring gear may be an adventure unto itself.
        </p>
      </section>

      <section>
        <h3>Fabricating Gear</h3>
        <p>
          Thanks to nanofabrication technology, characters may also create their own equipment using cornucopia machines and similar nanofab devices. The character must have the appropriate blueprints to do so, whether they come with the fabber, are bought legitimately or on the black market, acquired with rep, or found online. Characters may also code their own blueprint desires, using the Programming: Nanofabrication skill.
        </p>
      </section>

      <section>
        <h3>Gear Costs</h3>

        <table>
          <thead><tr><th>Category</th><th>Range (in Credits)</th><th>Average (in Credits)</th></tr></thead>
          <tbody>
            <tr><td>Trivial</td><td>1-99</td><td>50</td></tr>
            <tr><td>Low</td><td>100-499</td><td>250</td></tr>
            <tr><td>Moderate</td><td>500-1,499</td><td>1,000</td></tr>
            <tr><td>High</td><td>1,500-9,999</td><td>5,000</td></tr>
            <tr><td>Expensive</td><td>10,000+</td><td>20,000</td></tr>
          </tbody>
        </table>

        <h3>Cost Modifiers</h3>
        <table>
          <thead><tr><th>Economic Factor</th><th>Suggested Cost Modifier</th></tr></thead>
          <tbody>
            <tr><td>Item Stolen</td><td>-50%</td></tr>
            <tr><td>Item Used</td><td>-25%</td></tr>
            <tr><td>Item Restricted</td><td>+25%</td></tr>
            <tr><td>Item Illegal</td><td>+50%</td></tr>
            <tr><td>Item Scarce</td><td>+25%</td></tr>
            <tr><td>Item Extremely Rare</td><td>+50%</td></tr>
            <tr><td>Item Common</td><td>-25%</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Gear Modifiers</h2>
        <p>
          In the technological future, gear is a necessity. In many cases, use of equipment provides no bonuses, it simply allows a character to perform a task they would otherwise be unable to do. For example, it is impossible to pick a mechanical lock without lockpick or some sort of tool.
        </p>
        <p>
          In other cases, however, gear provides a bonus to the task at hand. Climbing a wall may be possible without tools, but if you happen to have gecko gloves or other climbing gear, it's going to be a lot easier. The specific modifier applied is usually noted in the gear item's description, typically ranging from +10 to +30.
        </p>
      </section>

      <section>
        <h3>Gear Quality</h3>
        <p>
          In both of the situations above, it is possible to have items that are of either exceptional or inferior quality, with corresponding positive or negative modifiers. The gear may be well-crafted, state-of-the-art, cutting-edge experimental, or simply top-of-the-line, applying an additional +10 to +30. Or it may be outdated, shoddy, or in disrepair, inflicting a -10 to -30 modifier (in some cases canceling out the basic gear bonus).
        </p>
      </section>

      <section>
        <h3>Gear Sizes</h3>
        <p>
          On occasion, you'll need to know how small or large a certain piece of equipment is. Though this is largely something the gamemaster can wing on the fly using common sense, we've listed sizes for many gear items that are unusual or so futuristic that the average player may not have a feel for what dimensions the tech likely is. These size categories are listed on the Gear Sizes table (below). These sizes should be considered approximations, as depending on the manufacturer and process, some items may be smaller or larger than similar items. It is also important to keep in mind that as technology advances, the size and components of various equipment items shrink, so when in doubt, go with smaller.
        </p>
        <table>
          <thead>
            <tr>
              <th>Size Category</th>
              <th>General Dimensions and Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Nano</td><td>So small that the item cannot be seen without the aid of a microscope or nanoscopic vision, and may not be manipulated without fractal digits or similar tools.</td></tr>
            <tr><td>Micro</td><td>Anything ranging from the size of a barely visible small dot to an average insect.</td></tr>
            <tr><td>Mini</td><td>Mini items may be concealed within someone's palm or small pockets.</td></tr>
            <tr><td>Small</td><td>Small items may be held in one hand and concealed in normal pockets.</td></tr>
            <tr><td>Medium</td><td>Medium size items are cumbersome to hold with one hand, ranging from the size of a 2-liter bottle to the size of a medium dog. They do not fit in pockets, but they may be concealed by larger coverings.</td></tr>
            <tr><td>Large</td><td>Roughly human-sized.</td></tr>
            <tr><td>Huge</td><td>Vehicles and other more massive objects.</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Mass and Encumbrance</h3>
        <p>
          A character who is carrying too much gear should be slowed down, suffering negative modifiers both to their movement rates and their skill tests. Rather than micromanaging the weights of individual pieces of equipment, however, this matter is largely left to the gamemaster's discretion, using common sense. If a character loads up beyond reason, apply modifiers as seem appropriate. The gamemaster should, however, keep in mind that many of the manufacturing materials used in Eclipse Phase allow for items that are much lighter than current standards without any loss of durability or function (see Future Materials, next page). Likewise, characters in low or microgravity environments can carry much larger loads.
        </p>
      </section>

      <section>
        <h3>Concealing Gear</h3>
        <p>
          Characters may attempt to conceal items on their person, hoping at least to hide them from casual notice if not an intensive search. To determine how effectively the character conceals the equipment, make a Palming Test and note the MoS (the gamemaster may wish to roll this secretly). Whenever another character has a chance to notice the concealed item, they must succeed in a Perception Test and achieve a higher MoS than was scored on the Palming Test. The gamemaster should apply modifiers to both tests as appropriate. For example, concealing a large item like a sword would be difficult (-30), whereas wearing concealing clothing like a longcoat or multi-pocketed jumpsuit would help (+20). Likewise, a character who is not actively looking is less likely to notice the hidden gear (-30), whereas someone who conducts a physical search (+30) or who has enhanced vision to pierce protective layers will fare better.
        </p>
      </section>

      <section>
        <h2>Design and Fashion</h2>
        <p>
          Many objects in Eclipse Phase closely resemble their early 21st century equivalents—a bottle of soda is still a transparent container holding a brightly colored liquid, clothing is obviously something you wear, and a knife still consists of a blade and a handle. The materials, processes, and mindsets that go into making them, however, are quite different. To start, very few items look have a uniform, mass-produced look, even if they were. The procedures of minifacturing and nanofabrication allow every individual item to be manufactured with a unique (or at least different) look. In areas with anarchist/ reputation economies, in fact, where personal possessions have very little intrinsic value, expression and creativity are favored and so many items are artistically personalized (and actual hand-crafted items are rare and prized). Likewise, almost all equipment is designed with ergonomics and ease-of-use prioritized, so gear with soft curves, pleasing colors, and formfitting shapes are common. Many items of personal technology, such as flashlights or small tools, are made in the form of ovoids that fit comfortably in the user's hand or in similar forms that can be easily worn or attached to clothing. To someone from the 20th century, many common devices look like oddly colored rocks or decorative pieces of plastic or ceramic (in fact, many such items are referred to as “blobjects” by older transhumans).
        </p>
        <p>
          The materials used to create everyday items are also advanced, ranging from aerogel and graphene to Smart Materials and exotic metamaterials with unusual physical properties. In practice, this means that most items are light, durable (with both tensile strength and/or flexibility, as needed), waterproof, dirt-repellent, and self-cleaning. Most gear is also designed with zero-g or microgravity functionality in mind, and can easily be clipped, tethered, or stuck to a surface with grip pads.
        </p>
        <p>
          Almost all gear in Eclipse Phase is also available in forms that are wearable/usable by uplifted animals and non-humanoid morphs, such as novacrabs, slitheroids, and so on. Even if such customized gear is not immediately available, it is usually not difficult to nanofabricate. Smart Materials also make interoperability between different morphs easy.
        </p>
      </section>

      <section>
        <h3>Interface</h3>
        <p>
          It is not uncommon for everyday devices to have no visible controls as they are designed to be operated via radio broadcasts from the user's ecto or mesh inserts. Any items crafted for use in emergency, combat, survival, or exploration situations, however, will feature basic physical controls, just in case. Physical interfaces are typically controlled by touch pads that are nothing more than colored spots on the device's surface, though some may also project a holographic interface display. Most equipment of this sort can can also be voice-activated and controlled.
        </p>
        <p>
          Almost all devices are loaded with a complete set of help files and tutorials. Most electronics are also mesh-capable and equipped with specialized AIs (see Meshed Gear).
        </p>
      </section>

      <section>
        <h3>Smart Materials</h3>
        <p>
          Many common items of technology are made from so-called smart materials. These devices contain—or sometimes consist entirely of—many small nanomachines that can both move and reshape themselves to alter the object's shape, color, and texture. For example, smart clothing can transform from a suit of specialized cold weather clothing suitable for the Martian poles in winter to a fashionable suit in the latest style due to hundreds of thousands of tiny nanomachines in the clothing that shift and move to reshape the garment. Similarly, a tool made of smart materials can switch from a powered screwdriver to a wrench or a hammer, as the nanomachines move around and completely reshape the tool. Smart materials all contain specialized advanced nanomachine generators that keep them in perfect repair as long as they are regularly recharged.
        </p>
      </section>
    </div>
  )
}
