const GEAR_DATA = [
    {
        id: 1,
        name: 'Basic Biomods',
        description: '',
        details: 'Almost universal in biomorphs, many habitats will not allow individuals to visit/immigrate if their biomorph does not possess these biomods in order to preserve public health. Basic biomods consists of a series of genetic tweaks, tailored viruses, and bacteria that speed healing, greatly increase disease resistance, and impede aging. A morph with basic biomods heals twice as fast as an early 21st century human, gradually regrows lost body parts, is immune to all normal diseases (from cancer to the flu), and is largely immune to aging. In addition, the morph requires no more than 3–4 hours of sleep per night, is immune to ill effects from long-term exposure to low or zero gravity, and does not naturally suffer from biological problems like depression, shock reactions after being injured, or allergies',
        type: 'personal',
        cost: 'Moderate, but included for free in most biomorphs',
    },
    {
        id: 2,
        name: 'Basic Mesh Inserts: Cranial Computer',
        description: '',
        details: 'This computer serves as the hub for the character’s personal area network and is home to their muse. It has all of the functions of a smartphone and PDA, acting as a media player, meshbrowser, alarm clock/calendar, positioning and map system, address book, advanced calculator, file storage system, search engine, social networking client, messaging program, and note pad. It manages the user’s augmented reality input and can run any software the character desires (see Software, p. 331). It also processes XP data, allowing the user to experience other people’s recorded memories, and also allowing the user to share their own XP sensory input with others in real-time. Facial/image recognition and encryption software are included by default.',
        type: 'personal',
        cost: 'Moderate, but included for free in most morphs',
    },
    {
        id: 3,
        name: 'Basic Mesh Inserts: Radio Transceiver',
        description: '',
        details: 'This transceiver connects the user to the mesh and other characters/devices within range. It has an effective range of 20 kilometers in deep space or other locations far from radio interference and 1 kilometer in crowded habitats.',
        type: 'personal',
        cost: 'Moderate, but included for free in most morphs',
    },
    {
        id: 4,
        name: 'Basic Mesh Inserts: Medical Sensors',
        description: '',
        details: 'This array of implants monitors the user’s medical status, including heart rate, respiration, blood pressure, temperature, neural activity, and much more. A sophisticated medical diagnostic system interprets the data and warns the user of any concerns or dangers.',
        type: 'personal',
        cost: 'Moderate, but included for free in most morphs',
    },
    {
        id: 5,
        name: 'Cortical Stack',
        description: '',
        details: 'A cortical stack is a tiny cyberware data storage unit protected within a synthdiamond case the size of a grape, implanted at the base of the skull where the brain stem and spinal cord connect. It contains a digital backup of that character’s ego. Part nanoware, the implant maintains a network of nanobots that monitor synaptic connections and brain architecture, noting any changes and updating the ego backup in real time, right up to the moment of death. If the character dies, the cortical stack can be recovered and they may be restored from the backup (see Resleeving). Cortical stacks do not have external or wireless access (for security), they must be surgically removed (see Retrieving a Cortical Stack). Cortical stacks are extremely durable, requiring special effort to damage or destroy. They are commonly recovered from bodies that have otherwise been pulped or mangled. Cortical stacks are intentionally isolated from mesh inserts and other implants, as a security measure to prevent hacking or external tampering.',
        type: 'personal',
        cost: 'Moderate, but included for free with most morphs',
    },
    {
        id: 6,
        name: 'Cyberbrain',
        description: '',
        details: 'Cybernetic brains are where the ego (or controlling AI) resides in synthmorphs and pods. Modeled on biological brains, cyberbrains have a holistic architecture and serve as the command node and central processing point for sensory input and decision-making. Only one ego or AI may “inhabit” a cyberbrain at a time; to accommodate extras, mesh inserts or a ghostrider module must be used. Since cyberbrains store memories digitally, they have the equivalent of mnemonic augmentation. They also have a built-in puppet sock and may be remote-controlled, though this option may be removed by those who value their security. Cyberbrains are vulnerable to cyberbrain hacking and other forms of electronic infiltration/ attack. Cyberbrains come equipped with two or more pairs of external access jacks, usually located at the base of the skull, which allow for direct wired connections.',
        type: 'personal',
        cost: 'Moderate, but included for free in all synthetic morphs and pods',
        restriction: 'Only available to Synthentic morphs and pods'
    },
    {
        id: 7,
        name: 'Direction Sense',
        description: '',
        details: 'The character has an innate sense of direction and distance using advanced inertial navigation. The character can arbitrarily define any point as “north” and keep track of which direction that is, as well as knowing approximately how far they have come. Characters with this augmentation can always retrace any route they have taken, only experiencing difficulty with three-dimensional routes lacking navigational markers (such as deep space or undersea; apply a –30 modifier). Since positioning inside habitats by anyone with basic mesh inserts is an automatic affair, only characters venturing to remote locations require this augmentation.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 8,
        name: 'Echolocation',
        description: '',
        details: 'The character possesses sonar similar to that of a bat or dolphin. The character bounces brief ultrasonic pulses off their surroundings and uses them to form an image of these surroundings through the pattern of reflections of these pulses received by the character’s ears. For more details, see Using Enhanced Senses. This augmentation works in both air and water and has a range of 20 meters in air and 100 meters in water.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 9,
        name: 'Enhanced Hearing',
        description: '',
        details: 'The morph’s ears are enhanced to hear both higher and lower frequency sounds—the range of sounds they can hear is twice that of normal human ears see Using Enhanced Senses. In addition, their hearing is considerably more sensitive, allowing them to hear sounds as if they were five times closer than they are. A character with this augmentation can easily overhear even a softly spoken conversation at another table in a small restaurant. This augmentation provides a +20 modifier to all Perception Tests involving hearing.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 10,
        name: 'Enhanced Smell',
        description: '',
        details: 'The morph’s sense of smell is equal to that of a bloodhound. The user can identify both chemicals and individuals by smell and can track people and chemically reactive objects by odor as long as the trail was made within the last several hours and has not been obscured. The character can also gain a general sense of the emotions and health of any character within 5 meters (+20 to Perception or Kinesics Tests to do so).',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 11,
        name: 'Enhanced Vision',
        description: '',
        details: 'The morph’s eyes have tetrachromatic vision capable of exceptional color differentiation. These eyes can also see the electromagnetic spectrum from terahertz wave frequencies to gamma rays, enabling them to see a total of several dozen colors, instead of the seven ordinary human eyes can perceive. In addition, these eyes have a variable focus equivalent to 5 power magnifiers or binoculars. This augmentation provides a +20 modifier to all Perception Tests involving vision. For further applications, see Using Enhanced Senses.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 12,
        name: 'Eidetic Memory',
        description: '',
        details: 'The character can remember everything that ever happened to them, in detail, with no long term memory loss. For example, they can recite a page they read in a book a month ago, recall a string of 200 random characters they viewed a year ago, or even tell you what they had for breakfast on a particular date a decade ago. However, they can only remember things to which they paid attention. The character will not remember the contents of a note on someone’s desk if they merely glanced at it; they must specifically have read it. No effort is required to use this augmentation, the character merely needs to attempt to remember a specific fact.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 13,
        name: 'Hyper Linguist',
        description: '',
        details: 'The morph’s brain maintains the linguistic flexibility of a small child, allowing the character to learn languages with great ease. This functions as the Hyper Linguist trait',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 14,
        name: 'Math Boost',
        description: '',
        details: 'This implant functions as the Math Wiz trait',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 15,
        name: 'Multiple Personalities',
        description: '',
        details: 'The character’s brain is intentionally partitioned to accommodate an extra personality. This multiplicity is not viewed as a disorder, but as a cognitive tool to help people deal with their hypercomplex environments. This extra personality can be an NPC run by the gamemaster, a separate character (in ego form only) made by the player, or the downloaded fork of another character. For all intents and purposes, the extra personality is treated as a separate ego (i.e., it may fork separately), except that both personalities are backed up in the same cortical stack and if downloaded they must be placed in separate morphs or in another morph with this implant. Only one ego may be in control of the morph at a time. The other resides in the background, still active, but not on a surface level. Each ego is completely aware of what the other is doing, thinking, etc. If for some reason the subsumed personality wants to come to the fore, but the other personality won’t relinquish control, make an Opposed WIL × 3 Test. Each ego has its own Lucidity and Trauma Threshold, and they track stress and trauma separately. Any psi attacks or social/mental influences only affect the personality at the fore. Having an extra ego in your head, working in the background, is helpful for multitasking. The character receives an extra Complex Action each turn that may only be used for mental or mesh actions.',
        type: 'personal',
        cost: 'High',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 16,
        name: 'Adrenal Boost',
        description: '',
        details: 'This adrenal gland enhancement supercharges the character’s adrenal response to situations that invoke stress, pain, or strong emotions (fear, anger, lust, hate). When activated, the concentrated burst of norepinephrine accelerates heart rate and blood flow and burns carbohydrates. In game terms, this allows the character to ignore the modifiers from 1 wound and temporarily increases REF by +10 (also boosting REF-linked skills and Initiative). These modifiers apply until the character has calmed down (if the character also has endocrine control, p. 304, then adrenal boosts can be activated and deactivated at will, and the negated wounds are cumulative).',
        type: 'personal',
        cost: 'High',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 17,
        name: 'Bioweave Armor (Light)',
        description: '',
        details: 'Bioweave armor involves lacing the morph’s skin with artificial spider silk biological fibers. This provides an Armor rating of 2/3 without changing the appearance, texture, or sensitiv- ity of the morph’s skin. This armor is cumulative with worn armor, but not heavy bioweave or carapace.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 18,
        name: 'Bioweave Armor (Heavy)',
        description: '',
        details: 'Heavy bioweave armor involves lacing the morph’s skin with a denser and thicker network of the same fibers. The morph’s skin becomes thicker and somewhat less flexible except at the joints. The morph’s skin also has an unusually smooth look, and a distinctively smooth and tough-feeling texture. This provides an Armor rating of 3/4 without decreasing the morph’s mobility. The character’s sense of touch, however, is significantly reduced (–20 modifier) except on their hands, feet, and face. This armor is cumulative with worn armor.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 19,
        name: 'Carapace Armor',
        description: '',
        details: 'Carapace armor combines bio-weave armor with hard but flexible plates of a chitin-ceramic hybrid material modeled on the microscopic structure and texture of arthropod exoskeletons. This armor is obvious and has a somewhat crocodilian or insectoid appearance (character’s choice). The morph is completely hairless as well. This provides an Armor rating of 11/11. This armor is not cumulative with worn armor or bioweave.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 20,
        name: 'Chameleon Skin',
        description: '',
        details: 'The morph’s skin is augmented with complex chromatophores so that it changes color like the skin of a chameleon or an octopus. The morph can match the appearance of almost any color and most patterns. This provides a +20 modifier to Infiltration Tests to avoid being seen or noticed, as long as the character is stationary or not moving faster than a slow walk. The character must be nude or wearing smart clothing (p. 325) of the same color/pattern. If incompletely camouflaged, or if moving faster, reduce the modifier to +10. In addition to blending in, the character can also consciously change the color and pattern of their skin to deliberately stand out (+20 on Perception Tests to notice) or simply to produce attractive or interesting colors or patterns.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 21,
        name: 'Circadian Regulation',
        description: '',
        details: 'The morph only requires 2 hours of sleep to maintain health and function at peak mental capacity. The character dreams constantly while asleep and can both fall asleep and wake up almost instantly. In addition, the character can easily and with no ill-effects shift to a 2-day cycle, where they are awake for 44 hours and sleep for 4.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 22,
        name: 'Claws',
        description: '',
        details: 'The morph has retractable claws like those of a cat. These claws do not interfere with the character’s manual dexterity and are razor sharp. However, they are relatively small and only do 1d10 + 1 + (SOM ÷ 10) damage, with an AP of –1. As a result, they are legal in almost all habitats and are considered tools as much as weapons.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 22,
        name: 'Clean Metabolism',
        description: '',
        details: 'The morph’s symbiotic bacteria, gut flora, and glands have been genetically engineered to keep the morph “clean.” The morph also produces smart antibiotics that prevent the growth of any bacteria or yeasts in it or on its skin. As a result, the morph is completely immune to infections, dental cavities, and bad breath, its sweat has no scent, and the morph’s efficient digestion produces somewhat less solid waste and less odorous chemicals.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 23,
        name: 'Drug Glands',
        description: '',
        details: 'The morph has specially tailored glands designed to produce specific hormones or chemicals and release them in the body. The character has control over these glands and can release the chemicals at will. Each type of drug gland is considered a separate enhancement. For potential drugs and chemicals, see p. 317.',
        type: 'personal',
        cost: 'One Cost Category Higher than the Drug Cost',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 23,
        name: 'Eelware',
        description: '',
        details: 'Derived from electric eel genetics, a character can have eelware implanted so that it connects to a network of bioconductors in the hands and feet (or other limbs), allowing the character to generate stunning shocks with a touch. Eelware inflicts shock damage (p. 204) exactly like a pair of shock gloves. Eelware can also be used to power implants and spe- cially designed handheld devices by touch.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 24,
        name: 'Emotional Dampers',
        description: '',
        details: 'This low-cost alternative to endocrine control (p. 304) allows the user to voluntarily damp their morph’s emotional responses and various non-verbal cues like pupil dilation, eye movement, or vocal tone. Using this augmentation allows the user to lie and conceal their emotions in such as way as to fool the keenest observer; apply a +30 modifier to Deception and Impersonation Tests. This modification does not affect methods of detecting lies and emotions that involve reading the character’s neural state, including psi-gamma sleights. However, this augmentation damps out all emotional responses and so causes the character to be less persuasive in real-time personal interactions, imposing a –10 modifier to other Social skill tests like Persuasion. Characters can turn this augmentation on or off at will.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 25,
        name: 'Endocrine Control',
        description: '',
        details: 'This augmentation modifies the morph’s endocrine system, giving the character fine control over their hormone output. This allows the character to completely control their appetite and emotions and to regulate pain. They receive a +30 modifier against the effects of hunger, fear, and any forms of emotional manipulation, such as the Drive Emotion sleight. This augmentation also allows character to lie with perfect conviction and to completely fool all methods of lie detection that do not rely on the target’s neural output; apply a +20 modifier to Deception Tests. It also allows the character to remain awake for 48 hours without penalty, but after this time the character begins experiencing normal fatigue. Finally, the ability to regulate pain reception allows the character to ignore the –10 modifier from 1 wound.',
        type: 'personal',
        cost: 'High',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 26,
        name: 'Enhanced Pheromones',
        description: '',
        details: 'The morph’s biochemistry has been altered so that it produces enhanced pheromonal signals that subconsciously affect the behavior of other humans in the vicinity. These pheromones make the character more attractive and trustworthy to the target; apply a +10 modifier to appropriate Social skill tests, such as Persuasion. This augmentation only affects characters who can smell the pheromones, and it does not affect uplifts or xenomorphs.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 27,
        name: 'Enhanced Respiration',
        description: '',
        details: 'By boosting both lung efficiency and the blood’s oxygen-carrying capacity, the character can live comfortably in both high and low pressure environments, from 0.2 atmospheres to 5 atmospheres, with no dizziness or need for gradual decompression. In addition, the character can hold their breath for up to 30 minutes when performing minimal activity or for up to 10 minutes while performing highly strenuous activity.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 28,
        name: 'Gills',
        description: '',
        details: 'The morph’s lung tissue has been adapted to function as gills, allowing the morph to breathe both air and water, as long as the water is not toxic or too stagnant. Characters with this augmentation breathe in water and then expel the water through slits just underneath their lowest pair of ribs that seal when the character is not underwater.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 29,
        name: 'Grip Pads',
        description: '',
        details: 'The morph possesses specialized pads on its palms, lower arms, shins, and the bottoms of its feet. Designed to emulate the pads on gecko feet, characters can support themselves on a wall or ceiling by placing any two of these pads against any surface not made from a material specially designed to resist this augmentation. Characters can climb any surface and move easily across ceilings that can support their weight. Apply a +30 modifier to Climbing Tests. The pads must be free to touch the surface the character is climbing (no gloves). The nature of these pads is obvious to anyone looking at them, but they do not impair the character’s sense of touch or manual dexterity. If combined with the vacuum sealing augmentation, the character can even stick to surfaces in the vacuum of space.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 30,
        name: 'Hibernation',
        description: '',
        details: 'The character can voluntarily reduce the morph’s metabolism to the point that the morph requires only 5% of the normal amount of food, water, and air. The character appears to sink into a deep sleep, but can maintain a dim awareness of both touch and sound and so can be easily awakened. Entering or leaving this state requires 3 minutes where the character is relatively helpless. With sufficient air, characters can safely hibernate for up to 40 days without food or water.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 31,
        name: 'Muscle Augmentation',
        description: '',
        details: 'The morph’s muscle mass has been enhanced and toned and myofibers strengthened. Apply a +5 modifier to SOM.',
        type: 'personal',
        cost: 'High',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 32,
        name: 'Neurachem',
        description: '',
        details: 'This bioware modification enhances the character’s chemical synapses and juices their neurotransmitters, drastically speeding up neural connections. Neurachem can be mentally activated or triggered by charged emotions. Level 1 neurachem increases the Speed stat by +1, with no side effect. Level 2 raises the Speed stat by +2, but the character suffers a nervous system fatigue hangover for 1 hour after the boost wears off (–20 modifier to all actions). The speed boost lasts for 30 minutes, though it may be triggered again. Level 2 may be used as Level 1 if desired.',
        type: 'personal',
        cost: 'High (level 1), Expensive (level 2)',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 33,
        name: 'Poison Gland',
        description: '',
        details: 'Similar to the drug gland, this morph has special glands that produce poisons, like the venom glands of a snake. The morph has poison glands in its fingers and mouth, so that it can deliver either poison by scratching someone with a fingernail, biting them hard enough to draw blood, or even by sharing a beverage with someone or spitting into their drink. The morph is immune to the poisons it produces. These glands may not produce nanotoxins.',
        type: 'personal',
        cost: 'One Cost Category Higher Than Toxin Cost',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 34,
        name: 'Prehensile Feet',
        description: '',
        details: 'The morph’s feet and leg joints are altered so that its toes are longer and more dexterous and the big toe is transformed into an opposable thumb. Physically, the morph’s feet resemble a longer narrower hand or a human foot with finger (and thumb)-like toes. The character can walk normally but must wear specially designed shoes. However, this morph runs somewhat slower than a morph with unmodified feet (–1 meter per Action Turn). In addition, the morph’s hips are slightly modified to allow greater mobility. In a properly constructed chair, or when floating in zero-G, the character can use both their hands and their feet to manipulate the same object. Most morphs used by characters who live in zero-G possess this augmentation.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 35,
        name: 'Prehensile Tail',
        description: '',
        details: 'A long (1.5 meters) prehensile tail is added to the morph’s backside, extending out from the tailbone. This tail is prehensile and may be used to grab, hold, and even manipulate objects. The character can control the tail’s movements with concentration, but it otherwise tends to move on its own. The tail also improves the character’s balance; apply a +10 to any Physical skill tests where balance is a factor.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 36,
        name: 'Sex Switch',
        description: '',
        details: 'A complex suite of alterations allows the character to switch their physical sex to male, female, hermaphrodite, or neuter. This change is mentally triggered but takes approximately 1 week to complete.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 37,
        name: 'Skin Pocket',
        description: '',
        details: 'The morph has a pocket within its skin layer, capable of holding and providing concealment (+30) for small items.',
        type: 'personal',
        cost: 'Trivial',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 38,
        name: 'Temperature Tolerance',
        description: '',
        details: 'The morph’s temperature regulation and circulation are both substantially enhanced allowing the character to survive in temperatures as low as –30 degrees Celsius and as high as 60 degrees Celsius without discomfort or ill effects.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 39,
        name: 'Toxin Filters',
        description: '',
        details: 'The morph gains an improved liver and kidneys and biological filters in its lungs. Characters with this augmentation are immune to all chemical and biological toxins, including everything from recreational chemicals to nerve agents to spoiled food. In addition, the character can safely and comfortably breathe smoke and drink salt water. Unlike medichines, toxin immunity prevents the character from experiencing even brief harm or discomfort from a toxin (medichines merely rapidly repair damage caused by the toxin and then remove it from the morph). This augmentation provides no resistance to concentrated acid, nanotechnological attacks, or similar destructive agents. Some characters with this augmentation learn to enjoy the taste of various chemical toxins like cyanide or arsenic.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 40,
        name: 'Vacuum Sealing',
        description: '',
        details: 'To possess this augmentation, the character must also possess some form of bioware armor or carapace armor. The morph has been specially designed to survive the effects of vacuum. The character’s skin resists vacuum as well as protecting the wearer from temperatures from –75 to 100 C. In addition, the character’s mouth, nose, and other orifices can seal sufficiently well to resist vacuum, and the morph possesses a special membrane that extends over their eyes, allowing the character to see in vacuum without risking any eye damage. This augmentation is usually combined with either the enhanced respiration or oxygen storage augmentation, or both together.',
        type: 'personal',
        cost: 'High',
        restriction: 'Only Biomorphs including Pods and Uplifts'
    },
    {
        id: 41,
        name: 'Anti-Glare',
        description: '',
        details: 'This visual mod eliminates penalties for glare.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 42,
        name: 'Electrical Sense',
        description: '',
        details: 'The character can sense electric fields. Within 5 meters, the character can instantly tell if an electrical device is on or off and can see the precise location of electrical wiring behind a wall or inside a device. This sense gives the character a +10 modifier on any test involving analyzing, repairing, or modifying electrical equipment.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 43,
        name: 'Radiation Sense',
        description: '',
        details: 'The character can sense the presence and approximate source of all forms of dangerous radiation, including neutrons, charged particles, and cosmic rays.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 44,
        name: 'T-Ray Emitter',
        description: '',
        details: 'Mounted under the skin of the user’s forehead, this implant generates low-powered beams of terahertz radiation (T-rays) that allow the character to see using reflected T-rays. As discussed in Using Enhanced Senses, p. 302, this implant combined with the enhanced vision enhancement (or a terahertz sensor) allows the user to effectively see through cloth, plastic, wood, masonry, composites, and ceramics as well as being able to determine the composition of various materials. This implant allows the user to see using reflected T-rays for 20 meters in a normal atmosphere and for 100 meters in vacuum.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 45,
        name: 'Access Jacks',
        description: '',
        details: 'Usually located in the base of the skull or neck, this implant is an external socket with a direct neural interface. It allows the character to establish a direct wired connection using a fiberoptic cable to external devices or other characters, which can be useful in places where wireless links are unreliable or complete privacy is required. Two characters linked via access jack can “speak” mind-to-mind and transfer information between their mesh inserts and other implants. All synthmorphs have these by default.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 46,
        name: 'Dead Switch',
        description: '',
        details: 'This cortical stack (p. 300) accessory is designed to keep the stack from falling into the wrong hands. If the morph is killed, the dead switch wipes and melts the cortical stack completely, so that the ego cannot be recovered. This option is generally only used by covert operatives with recent backups.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 47,
        name: 'Emergency Farcaster',
        description: '',
        details: 'Only characters with cortical stacks can possess this augmentation. The morph has an implanted quantum farcaster (p. 314) linked to a highly secure storage facility. The high cost of this implant also covers the cost of this storage. Using standard radio and quantum encryption, the farcaster broadcasts full backups of the character’s ego (pulled from the cortical stack) once every 48 hours. At the gamemaster’s discretion, the backup interval may be scheduled more or less frequently, keeping in mind that ego broadcasts are generally limited for security purposes and because they hog bandwidth. These broadcasts only work when the character is in radio contact with the storage facility and is typically only used inside a habitat to broadcast backups back to a nearby space ship. If the radio broadcasts are blocked or jammed, this device cannot make backups. In the event of a farcaster failure, this augmentation also includes a single-use emergency neutrino broadcaster (p. 314) as well. This broadcaster contains approximately 10 nanograms of antimatter stored in an orange-sized triply redundant magnetic containment vessel. If the character is dying or urgently wishes to depart the morph, this tiny amount of antimatter is brought into contact with a similarly tiny amount of matter in a controlled fashion that generates a single brief and carefully coded neutrino pulse of the ego’s most recent backup. However, the heat generated by this process literally cooks the entire morph, killing it and destroying all implants and electronics in or on it. This entire process takes less than 0.1 second and the broadcast can be received as long as the neutrino receiver is within 100 astronomical units of the character. Within the solar system, this implant effectively guarantees the character’s backup. It is less useful on exoplanets where the character is out of neutrino range of their backup facility. The amount of antimatter carried by this implant is sufficiently small enough that it does not produce an explosion and will not damage any surrounding objects. Most habitats carefully scan all visitors to determine if they have this implant and if the amounts of antimatter involved are sufficiently low as not to pose a danger to the habitat and its inhabitants, and some ban this implant entirely.',
        type: 'personal',
        cost: 'Expensive',
    },
    {
        id: 48,
        name: 'Ghostrider Module',
        description: '',
        details: 'This implant allows the character to carry another infomorph inside their head. This infomorph could be another muse, an AI, a backed-up ego, or a fork. The module is linked to the character’s mesh inserts, so the ghost-rider can access the mesh. The character may limit the ghostrider’s access, or may allow them direct access to theirsensory information, thoughts, communications, and other implants.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 49,
        name: 'Mnemonic Augmentation',
        description: '',
        details: 'A character with this augmentation and a cortical stack can access digital recordings of all of the sensory data they have experienced in XP format (and they may share these recordings with others). Mnemonic augmentation differs from the eidetic memory bioware because it allows characters to digitally share all of their sensory data with others. It also allows them to closely examine sensory data they did not initially look at. For example, If the character glanced at a note but did not read it, they can later use image enhancement software to enhance this image and in most cases actually read what the note said. Mnemonic augmentation allows the character to clearly hear all background noises, like a conversation at a nearby table that the character only initially heard a few words of. Using mnemonic augmentation to retrieve a specific piece of information is quite easy, but usually requires between 2 and 20 minutes of concentration.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 50,
        name: 'Multi-Tasking',
        description: '',
        details: 'Only characters with cortical stacks can possess this augmentation. The character has an advanced computer installed in their brain that uses the data in the cortical stack to create several simultaneous short-term forks to handle various mental tasks. By design, this computer automatically reintegrates all of these forks into the character’s core personality after a maximum of 4 hours, earlier if desired. This augmentation allows the character to both plan a speech and engage in intensive mesh-browsing while simultaneously fighting a gun battle or running from pursuit, since each of the forks operates independently. However, these forks can only perform purely mental or on-line interactions. This augmentation can produce a maximum of two forks at a time, giving the character an extra two Complex Actions on every Action Phase for mental or on-line actions. This implant cannot be used simultaneously with any other augmentation that allows for extra actions, or with the mental speed augmentation (p. 308).',
        type: 'personal',
        cost: 'High',
    },
    {
        id: 51,
        name: 'Puppet Sock',
        description: '',
        details: 'This implanted computer allows the biomorph’s body (the “puppet”) to be controlled by another character (the “puppeteer”). While active, the puppet has no control over their body and is simply along for the ride (at the gamemaster’s discretion, puppets who are tormented by repeated or extensive loss of control may suffer mental stress). The puppeteer may directly “jam” the puppet or remote control it in the same way that robots and pods are teleoperated (p. 196). The puppeteer must either be ghostriding the puppet (see the Ghostrider Module, p. 307) or have a direct communications link (via mesh, radio, laser, etc.).',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 52,
        name: 'Cyberclaws',
        description: '',
        details: 'The bones on the back of the morph’s hand are bonded to smart material claws. These claws can extend through concealed ports in the morph’s skin and extend 6 inches past the morph’s knuckles. These razor-sharp weapons inflict 1d10 + 3 + (SOM ÷ 10) damage and have an AP of –2. If combined with eelware (p. 304), they can also inflict electric shocks. Likewise, cyberclaws can also deliver poison or nanotoxins secreted from a poison gland (p. 305) or implanted nanotoxins.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 53,
        name: 'Cyberlimb',
        description: '',
        details: 'In an age when arms and legs can easily be regrown, many people consider cybernetic prostheses to be vulgar and distasteful. The Scum and others, however, treat them as iconic symbols of self-expression. Standard replacement cyberlimbs function the same as their biological equivalents, though that particular limb receives a +3/+3 Armor bonus when targeted specifically (this bonus does not apply to synthmorphs). Cyberlimbs may be masked to look real (see Synthetic Mask, p. 311), and may also feature small compartments for hiding/storing small objects.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 54,
        name: 'Cyberlimb Plus',
        description: '',
        details: 'More extravagant cyberlimb models are also available, though they require more severe body alteration to accommodate. These limbs apply a +5 SOM bonus per limb (maximum +10). They may be replacement limbs or “extra” limbs anchored in the body’s skeletal frame. These cyberlimbs may not be masked.',
        type: 'personal',
        cost: 'High',
    },
    {
        id: 55,
        name: 'Hand Laser',
        description: '',
        details: 'The morph has a weapon-grade laser implanted in its forearm, with a flexible waveguide leading to a lens located between the first two knuckles on the morph’s dominant hand. The laser fires from this waveguide, inflicting 2d10 damage with 0 AP. The laser is powered by a small nuclear battery located in the morph’s torso, good for 50 shots before it must be recharged like other beam weapon batteries (p. 339).',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 56,
        name: 'Hardened Skeleton',
        description: '',
        details: 'The morph’s skeleton has been laced with strengthening materials. Apply a +5 DUR and +5 SOM bonus.',
        type: 'personal',
        cost: 'High',
    },
    {
        id: 57,
        name: 'Oxygen Reserve',
        description: '',
        details: 'The morph has a miniature oxygen tank and rebreather installed in its torso. This implant provides the equivalent of the life support system in a light vacsuit (p. 333), allowing the character to breathe comfortably for up to 3 hours. It feeds oxygen directly to the morph’s blood stream, avoiding problems with pressure changes. Implanted sensors automatically cause the character to use the stored oxygen if they detect poisonous or insufficient atmosphere. Without vacuum sealing, the character can only survive in vacuum for 5 minutes, but remains conscious and active for the entire time, giving them far more time to find shelter or a vacsuit than characters without this implant. For every hour the character is in a breathable atmosphere, this implant recovers one hour of oxygen storage. The implant can be fully recharged within 15 minutes if the character is in a high-pressure mostly oxygen atmosphere.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 58,
        name: 'Reflex Boosters',
        description: '',
        details: 'The morph’s spinal column and nervous system is rewired with superconducting materials, boosting transmission speed. This raises the character’s REF by +10 and improves Speed by +1.',
        type: 'personal',
        cost: 'Expensive',
    },
    {
        id: 59,
        name: 'Implanted Nanotoxins',
        description: '',
        details: 'The morph has an implanted nanobot hive that produces nanotoxins (p. 324). This implant is designed so that the character can deploy these nanobots instantly via a scratch with claws, spraying with saliva, or simply making continuous bare-skin contact. Characters can choose whether or not to deploy these nanobots. Each nanotoxin generator only produces a single variety of nanobots, with the most common types being ones designed to kill or incapacitate almost any living target or ones designed to destroy delicate machinery. Characters are immune to their own nanotoxins. Nanotoxins are highly restricted and many habitats will not allow anyone with this implant on board.',
        type: 'personal',
        cost: 'One Cost Category Higher Than Toxin Cost',
    },
    {
        id: 60,
        name: 'Medichines',
        description: '',
        details: 'This is the most common form of nanoware. These nanobots monitor the user’s body at a cellular level and fix any problems that arise. Medichines eliminate most diseases, drugs, and toxins (but not nanodrugs or nanotoxins) before they can do more than minor harm to the host (see Drug Effects, p. 318). If desired, the user can temporarily override this protection to permit intoxication or other effects, but unless the character activates a second specially labeled override, medichines prevent the toxins from accumulating to lethal or permanently harmful levels. In this case, they can also be activated at a later point to reduce a drug or toxin’s remaining duration by half. Medichines allow the character to ignore the effects of 1 wound. They also speed normal healing as noted under see Biomorph Healing, p. 208. If the user suffers 5 or more wounds at once, or more than 6 wounds in an hour, the damage has exceeded the medichines’ ability to repair. In this case, the medichines place the character into a medical stasis, where their mind and body are perfectly preserved, but where the character cannot act in any way. Under these circumstances the medichines also send out a priority call for emergency services via the character’s mesh inserts. Medichines for synthmorphs and bots consist of nanobots that monitor and repair the shell’s integrity and internal system functions. Note that the synthmorph version of medichines allows the synthmorph to self-repair in the same manner by which a biomorph with medichines would naturally heal (p. 208).',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 61,
        name: 'Mental Speed',
        description: '',
        details: 'With this nanoware system, nanobots alter the character’s neural architecture and augment the functioning of their neurons. The character can deliberately speed up their mind to think and also receive and process sensory information far faster than ordinary humans. Time seems to subjectively slow down for the character, allowing them to carefully plan their next action, even if they only have a split second to do so. With this system active, the character can discern things occurring too fast for a normal human to perceive, such as the individual frames of an old analog film or understanding sounds that were accelerated to many times their normal speed. The character can also read 10 times faster than normal and can track the paths of bullets and similar fast-moving objects with a successful Perception Test. When using this augmentation, the character gains two extra Complex Actions during each Action Phase that may only be used for mental actions. The character also receives a +3 Initiative bonus. The character thinks at normal speed whenever this nanoware is inactive. This nanoware is incompatible with any other augmentation that provides any form of extra actions, such as multi-tasking. This augmentation can be used as often as desired, but actively using it renders ordi- nary conversation and social interactions difficult and requires concentration to maintain.',
        type: 'personal',
        cost: 'High',
    },
    {
        id: 62,
        name: 'Nanophages',
        description: '',
        details: 'These nanobots patrol the body, alert for signs of intrusive nanodrugs or -toxins and destroying them before they have more than a minor effect. Nanophages provide automatic immunity against nanodrugs and nanotoxins unless they are specifically commanded to stand down by the user, via their mesh implants.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 63,
        name: 'Oracles',
        description: '',
        details: 'hese neural macrosensing nanobots pay attention to the sensory input on which the character is not focusing, alerting them about important things they might otherwise overlook. Oracles also act as a sort of memory buffer and search aid, extending short term memory, helping the character recall memories and details, and crosschecking them with other memories. Oracles negate Perception modifiers for distraction, apply a +10 modifier to Investigation Tests, and add a +30 bonus to memory-related tests.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 64,
        name: 'Respirocytes',
        description: '',
        details: 'These nanobots act as highly efficient artificial red blood cells, increasing the ability to transfer oxygen and carbon dioxide. This increases the morph’s ability to hold their breath to 4 hours and increases DUR by +5.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 65,
        name: 'Skillware',
        description: '',
        details: 'The morph’s brain is laced with a network of artificial neurons that may be formatted with downloaded information. This allows the user to download skillsofts (p. 332) into their brains, gaining the use of those programmed skills until the skillsoft is erased or replaced. Skillware systems are only capable of handling 100 total skill points worth of skillsofts at a time.',
        type: 'personal',
        cost: 'High',
    },
    {
        id: 66,
        name: 'Skinflex',
        description: '',
        details: 'This disguise implant allows the user to restructure their facial features and musculature and alter skin tone and hair color. The entire process takes a mere 20 minutes. Skinflex adds +30 to Disguise Tests.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 67,
        name: 'Skinlink',
        description: '',
        details: 'Skinlink nanobots live on the morph’s external skin or shell, automatically swarming over and creating a physical connection with any electronics the user touches. They also take advantage of the electrical field in a biomorph’s skin for communication. They allow the user to communicate and mesh with any devices merely by touching them. This is considered a wired link, and so is not subject to wireless interception or interference. Two skinlinked characters can also communicate and mesh simply by touching.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 68,
        name: 'Wrist-Mounted Tools',
        description: '',
        details: 'The morph has a 6 centimeter-wide metal band containing nanobot generators implanted around each wrist. These nanobots link together to duplicate the function of a utilitool (p. 326), creating narrow, highly flexible arms that each ends in a specialized tool. These nanobots can also produce tiny fiber optics to allow the character to see through small openings, as well as being able to create small weapons equal to bioware claws. The fact that these tool are mentally controlled gives the character a +20 modifier to skills involving repairing or modifying devices with mechanical parts, opening locks or disarming alarm systems, or performing first aid.',
        type: 'personal',
        cost: 'Moderate',
    },
    {
        id: 69,
        name: 'Bodysculpting',
        description: '',
        details: 'If your morph’s enhanced physique isn’t enough, you can take it further with custom bodysculpting such as as elongated ears or fingers, nose alteration, hair addition/removal, feathers, exotic eyes, snakeskin, endowed genitalia, and more unusual physical alterations.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 70,
        name: 'Piercings',
        description: '',
        details: 'Name any part of the body and someone’s figured out a way to pierce it, probably multiple times. Hoops, barbells, plugs, and chains are extremely common, often made of shapechanging smart materials.',
        type: 'personal',
        cost: 'Trivial',
    },
    {
        id: 71,
        name: 'Scarification',
        description: '',
        details: 'Given modern medical abilities, scars of any sort are purely an affectation.',
        type: 'personal',
        cost: 'Trivial',
    },
    {
        id: 72,
        name: 'Scent Alteration',
        description: '',
        details: 'Minor changes to a body’s bio-chemistry can alter a character’s natural smell or constantly perfume them.',
        type: 'personal',
        cost: 'Low',
    },
    {
        id: 73,
        name: 'Skindyes',
        description: '',
        details: 'Dye jobs are available in all conceivable colors and patterns.',
        type: 'personal',
        cost: 'Trivial',
    },
    {
        id: 74,
        name: 'Subdermal Implants',
        description: '',
        details: 'Adding small implants under the skin can create bumps, ridges, piercing anchors, and similar textures and alterations.',
        type: 'personal',
        cost: 'Trivial',
    },
    {
        id: 75,
        name: 'Heavy Combat Armor',
        description: '',
        details: 'The synthmorph’s frame is loaded with armor that offers protection from heavy weapons for serious combat operations. This modification is bulky and noticeable; the bot frame is encased in a heavy-duty carapace. It increases the bot’s built-in Armor by +16/+16. The shell’s mobility systems and power output are also enhanced to deal with the extra load.',
        type: 'personal',
        cost: 'High',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 76,
        name: 'Industrial Armor',
        description: '',
        details: 'The shell is equipped with protection against collisions, extreme weather, industrial accidents, and similar wear-and-tear. Increase the bot’s built-in Armor rating by +10/+10.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 77,
        name: 'Light Combat Armor',
        description: '',
        details: 'The synthmorph’s frame is protected by armor designed for policing and security duties. This increases the bot’s built-in Armor by +14/+12.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 78,
        name: 'Hopper Mobility System',
        description: '',
        details: 'Hoppers have two or more legs designed to propel the morph forward or up, much like a frog or grasshopper.',
        type: 'personal',
        cost: '',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 79,
        name: 'Hovercraft Mobility System',
        description: '',
        details: 'The shell uses an impeller to blast a cushion of high-pressure air off the surface below, repelling the frame off the ground (modern hovercraft do not use rubber skirts). Most hovercraft travel a meter or so above the ground, but can temporarily levitate themselves higher for short periods.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 80,
        name: 'Ionic Mobility System',
        description: '',
        details: 'The shell uses principles of magnetohydrodynamics to levitate and fly, by ionizing surrounding air into plasma to create lift and momentum. The shell is also spun for stability. This system does not work in vacuum, but an underwater version uses the same mechanics for propulsion in liquid environments.',
        type: 'personal',
        cost: 'High',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 81,
        name: 'Microlight Mobility System',
        description: '',
        details: 'Popular in low-grav and microgravity environments, microlights encompass several types of ultralight or lighter-than-air systems, such as powered paragliders, autogyros, balloons, aerostats, and blimps. These systems do not work in vacuum.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 82,
        name: 'Roller Mobility System',
        description: '',
        details: 'Only for circular shells, this system allows the synthmorph to roll like a ball. The shell rolls around an interior axle, propelled by a motor-driven pendulum.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 83,
        name: 'Rotorcraft Mobility System',
        description: '',
        details: 'Rotating blades create lift, allowing the shell to move and hover like a helicopter. Most models use tilt-rotors or tilt-wings so that the rotorblades may be moved forward (for faster propeller-like propulsion) and for better maneuverability in zero-G. This system does not work in vacuum.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 84,
        name: 'Snake Mobility System',
        description: '',
        details: 'Commonly used by slitheroids, these shells use lateral undulation, flexing their body from left to right and waving their frame forward. Such shells may also use sidewinding or a concertina motion (straightening forward, then retracting the rear) to move. They also featured gyroscope stabilization so that they may circle into a hoop and roll like a wheel.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 85,
        name: 'Tracked Mobility System',
        description: '',
        details: 'Tracked shells use smart rotating treads to work their way across surfaces that would bog down other ground vehicles. They can prop themselves up in order to overcome taller obstacles or to lay themselves down to bridge across a ditch or crevice.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 86,
        name: 'Thrust Vector Mobility System',
        description: '',
        details: 'These shells use either turbofans or turbojets to create atmospheric lift with a set of wings. The engines may be maneuvered to point and generate thrust in different directions for vertical takeoffs/landings and better maneuverability in zero-G.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 87,
        name: 'Walker Mobility System',
        description: '',
        details: 'Walkers use two or more limbs to walk or crawl across a surface. Many use grip pads (p. 305) or magnetic systems (p. 311) to stick to surfaces.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 88,
        name: 'Wheeled Mobility System',
        description: '',
        details: 'Most wheeled shells feature smart spokes that allow the wheels to conform their shape to obstacles and even climb stairs. Some low-grav shells feature puncture-resistant and self-repairing compressed-gas tires.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 89,
        name: 'Winged Mobility System',
        description: '',
        details: 'Primarily used by smaller shells, this system of four independently controlled wings allows the shell to hover or move rapidly in any direction.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 90,
        name: 'Extra Limbs',
        description: '',
        details: 'The shell is equipped with one or more extra limbs. A character using these limbs suffers an off-hand modifier (see Wielding Two or More Weapons, p. 206. These limbs may be arms (with hand/grippers/etc.), legs, tentacle-like, or otherwise articulated and/or prehensile. Some shells have rotational frames that allow them to move limbs around their body.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 91,
        name: 'Fractal Digits',
        description: '',
        details: 'The synthmorph has “bush robot” digits that are capable of splitting into smaller digits, and those smaller digits into micro digits, and so on down to the micrometer scale, allowing for ultra-fine manipulation. Apply a +20 COO modifier where such fine manipulation is a factor (such as detailed repair work). The bot must have functioning nanoscopic vision (p. 311) to get this bonus.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 92,
        name: 'Hidden Compartment',
        description: '',
        details: 'The shell has a concealed aperture for a shielded interior compartment, ideal for storing valuables or smuggling contraband. Apply a –30 modifier to detect this compartment either manu- ally or with sensor scans.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 93,
        name: 'Magnetic System',
        description: '',
        details: 'A magnetic system allows the shell to cling to most ferrous materials. This enables the character to walk in zero-G situations by magnetically adhering surfaces, hang upside down, and hold onto devices without letting them drop or drift away. The shell receives a +30 modifier whenever maintaining a magnetic hold on something',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 94,
        name: 'Modular Design',
        description: '',
        details: 'This shell is designed to lock together with similar modular morphs in different architectural patterns to create larger gestalt forms. When united with other modules, the group is treated as a single unit/morph, with shared capabilities. If damaged and then separated, damage and wounds are distributed evenly between modules; uneven amounts are allocated randomly. The exact capabilities of different shapes depends on the composition, and is largely left in the gamemaster’s hands.',
        type: 'personal',
        cost: 'High',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 95,
        name: 'Pneumatic Limbs',
        description: '',
        details: 'The limbs are equipped with pneumatic cylinder systems that can generate up to 7,000 newtons of force. This allows the shell to push off and make impressive jumps (a synth of human size/weight can leap over 2 meters up). Apply a +20 to Freerunning Tests. A pneumatic limb used to strike an opponent in unarmed combat inflicts an extra 1d10 damage.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },

    {
        id: 96,
        name: 'Retracting/Telescoping Limbs',
        description: '',
        details: 'The shell’s limbs can either be retracted completely inside it’s frame and/or extended for extra length (usually up to 1 or 2 meters extra). Telescoping limbs may give the shell a reach advantage in melee combat (p. 204).',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 97,
        name: 'Shape Adjusting',
        description: '',
        details: 'This shell is made from smart materials that allow it to alter its shape, altering its height, width, circumference, and external features, while retaining the same mass. This modification is typically employed to reshape the morph into special configurations adapted to specific tasks (for example, lengthening to crawl through a tunnel, widening its base for stability, expanding to reach out and attach to multiple access point simultaneously, and so on). This mod also allows the morph to change its features for disguise purposes; apply a +30 modifier to Disguise Tests.',
        type: 'personal',
        cost: 'High',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 98,
        name: 'Structural Enhancement',
        description: '',
        details: 'This modification bolsters the shell’s structural integrity, boosting its ability to take damage. Increase Durability by 10 and Wound Threshold by 2.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 99,
        name: 'Swarm Composition',
        description: '',
        details: 'The shell is not a single unit but a swarm of hundreds of insect-sized robotic microdrones. Each individual “bug” is capable of crawling, rolling, hopping several meters, or using nanocopter fan blades for airlift. The cyberbrain, sensor systems, and implants are distributed throughout the swarm. Though the swarm can “meld” together into a roughly child-sized shape, the swarm is incapable of tackling physical tasks like grabbing, lifting, or holding as a unit. Individual bugs, however, are quite capable of interfacing with electronics. Swarms cannot carry most gear or wear armor, and may not make strength-based SOM-linked skill tests. For combat purposes, use the same rules as given for nanoswarms (p. 328). Damage and wounds are reflected as damaged/massacred bugs. The swarm may be “healed” by manufacturing more bugs.',
        type: 'personal',
        cost: 'High',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 100,
        name: 'Synthetic Mask',
        description: '',
        details: 'he synthmorph is equipped with a realistic outer casing of faux-skin and carefully sculpted to pass as a biomorph (perhaps even a particular person). The morph can cry, spit, have sex, and will even bleed if cut. Only a detailed physical examination or a radar, terahertz, or x-ray scan will detect the synthmorph’s true nature, and even then such exams/scans suffer a –30 modifier.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 101,
        name: 'Weapon Mount',
        description: '',
        details: 'The shell carries a built-in (or built-on) weapon. This weapon mount may be either internal (concealed, only weapons small in relation to the shell may fit, –30 to Perception Tests to detect) or external (visible). It may be fixed (one direction only), swiveling (limited field of fire), or on an articulated mount (all directions).',
        type: 'personal',
        cost: 'Low; Moderate for concealed/articulated',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 102,
        name: '360° Vision',
        description: '',
        details: 'The shell’s visual sensors are situated for a 360-degree field of vision.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 103,
        name: 'Chemical Sniffer',
        description: '',
        details: 'This sensor detects molecules in the air and analyzes their chemical composition. It enables Chemistry Tests to determine the presence of gases, including toxins and other fumes. It can also detect the presence of explosives and firearms.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 104,
        name: 'Lidar',
        description: '',
        details: 'This sensor emits laser light and measures the reflections to judge range, speed, and image the target. See Using Enhanced Senses, p. 302.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 105,
        name: 'Nanoscopic Vision',
        description: '',
        details: 'The shell’s visual sensors can focus like a microscope, using advanced superlens techniques to beat the optical diffraction limit and image objects as small as a nanometer. This allows the character to view and analyze objects as small as blood cells and even individual nanobots. The synthmorph must stay relatively steady to view objects at this scale.',
        type: 'personal',
        cost: 'Moderate',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    {
        id: 106,
        name: 'Radar',
        description: '',
        details: 'This sensor system bounces radio or microwaves off targets and measures the reflected waves to judge size, composition, and motion. See Using Enhanced Senses, p. 302.',
        type: 'personal',
        cost: 'Low',
        restriction: 'Requires Synthetic Morph or Robot'
    },
    






    {
        id: 10,
        name: '',
        description: '',
        details: '',
        type: 'personal',
        cost: '',
        restriction: ''
    },
];

export default GEAR_DATA;