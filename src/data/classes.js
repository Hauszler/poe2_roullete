export const classes = [
  {
    name: "Warrior",
    attribute: "Strength",
    ascendancies: ["Warbringer", "Titan", "Smith of Kitava"],
    ascendancyDetails: {
      "Warbringer": "Specializes in Warcries, Totems, and Blocking. Enhances battlefield control and provides strong defensive synergies, such as blocking while the shield is lowered.",
      "Titan": "Designed for massive high-impact hits focusing on Slam Skills and Stunning enemies. Boosts area damage and grants Aftershocks to crushing blows.",
      "Smith of Kitava": "A master crafter specializing in Normal Body Armour transformation. Focuses on Fire-based damage and extreme elemental resilience by converting fire resistance to other elements."
    },
    mobalyticsUrls: {
      "Warbringer": "https://mobalytics.gg/poe-2/warbringer-builds",
      "Titan": "https://mobalytics.gg/poe-2/titan-builds",
      "Smith of Kitava": "https://mobalytics.gg/poe-2/smith-of-kitava-builds"
    },
    description: "A master of heavy weapons and brutal physical force.",
    image: "/images/warrior.jpg"
  },
  {
    name: "Ranger",
    attribute: "Dexterity",
    ascendancies: ["Deadeye", "Pathfinder"],
    ascendancyDetails: {
      "Deadeye": "The quintessential markswoman. Focuses on precision, speed, and projectile manipulation. Features mechanics like Endless Munitions and Gathering Winds (Tailwind).",
      "Pathfinder": "An expert in poison damage and tactical resource management. Utilizes concoctions and enhances ailment potency while providing high utility and life-flask synergy."
    },
    mobalyticsUrls: {
      "Deadeye": "https://mobalytics.gg/poe-2/deadeye-builds",
      "Pathfinder": "https://mobalytics.gg/poe-2/pathfinder-builds"
    },
    description: "Quick and deadly with a bow and extreme agility.",
    image: "/images/ranger.jpg"
  },
  {
    name: "Mercenary",
    attribute: "Dexterity",
    ascendancies: ["Witchhunter", "Gemling Legionnaire", "Tactician"],
    ascendancyDetails: {
      "Witchhunter": "Focuses on suppressing magic and explosive area-of-effect damage. Uses 'Concentration' mechanics, culling strikes, and ward-based defenses.",
      "Gemling Legionnaire": "The master of gem synergy. Embeds skill gems directly into the body to exceed normal restrictions and gain extra power from levels and quality.",
      "Tactician": "A master of battlefield control using Banners, Ballista totems, and 'Pin' mechanics to stop enemies and provide tactical buffs to allies."
    },
    mobalyticsUrls: {
      "Witchhunter": "https://mobalytics.gg/poe-2/witchhunter-builds",
      "Gemling Legionnaire": "https://mobalytics.gg/poe-2/gemling-legionnaire-builds",
      "Tactician": "https://mobalytics.gg/poe-2/tactician-builds"
    },
    description: "Specializes in crossbows and tactical gadgets.",
    image: "/images/mercenary.jpg"
  },
  {
    name: "Witch",
    attribute: "Intelligence",
    ascendancies: ["Blood Mage", "Infernalist", "Lich"],
    ascendancyDetails: {
      "Blood Mage": "Uses Life as a primary resource. Specializes in Life Remnants to recover health and deals high critical damage based on maximum life totals.",
      "Infernalist": "A fire spellcaster who replaces Mana with Infernal Flame. Can summon a Loyal Hellhound and transform into a powerful demon form.",
      "Lich": "A master of the necrotic arts, focusing on undeath, soul manipulation, and life-draining curses to wither away enemies."
    },
    mobalyticsUrls: {
      "Blood Mage": "https://mobalytics.gg/poe-2/blood-mage-builds",
      "Infernalist": "https://mobalytics.gg/poe-2/infernalist-builds",
      "Lich": "https://mobalytics.gg/poe-2/lich-builds"
    },
    description: "Masters of the dark arts and summoning the undead.",
    image: "/images/witch.jpg"
  },
  {
    name: "Sorceress",
    attribute: "Intelligence",
    ascendancies: ["Stormweaver", "Chronomancer", "Disciple of Varashta"],
    ascendancyDetails: {
      "Stormweaver": "Focuses on mastering elemental ailments like Ignite, Shock, and Freeze. Amplifies elemental damage and strips away enemy resistances.",
      "Chronomancer": "Leverages time manipulation to control battleflow. Can reset cooldowns (Time Snap), freeze enemies (Time Freeze), and rewind status (Temporal Rift).",
      "Disciple of Varashta": "Commands powerful invulnerable elemental entities called Djinns. Features a hybrid playstyle between direct casting and minion control."
    },
    mobalyticsUrls: {
      "Stormweaver": "https://mobalytics.gg/poe-2/stormweaver-builds",
      "Chronomancer": "https://mobalytics.gg/poe-2/chronomancer-builds",
      "Disciple of Varashta": "https://mobalytics.gg/poe-2/disciple-of-varashta-builds"
    },
    description: "Harnesses the pure power of the elements.",
    image: "/images/sorceress.png"
  },
  {
    name: "Monk",
    attribute: "Str/Dex",
    ascendancies: ["Invoker", "Acolyte of Chayula", "Martial Artist"],
    ascendancyDetails: {
      "Invoker": "Harnesses elemental power to create waves of destruction. Emphasizes meditation to recharge Energy Shield and elemental amplification.",
      "Acolyte of Chayula": "Embraces the darkness by replacing Spirit with 'Darkness'. Utilizes chaos magic and trades resources for high resilience and damage.",
      "Martial Artist": "A master of melee combat and clones. Uses 'Hollow Form' to summon astral copies and 'Way of the Stonefist' for brutal unarmed attacks."
    },
    mobalyticsUrls: {
      "Invoker": "https://mobalytics.gg/poe-2/invoker-builds",
      "Acolyte of Chayula": "https://mobalytics.gg/poe-2/acolyte-of-chayula-builds",
      "Martial Artist": "https://mobalytics.gg/poe-2/martial-artist-builds"
    },
    description: "Agile fighter using quarterstaffs and elemental strikes.",
    image: "/images/monk.jpg"
  },
  {
    name: "Druid",
    attribute: "Str/Int",
    ascendancies: ["Oracle", "Shaman"],
    ascendancyDetails: {
      "Shaman": "A consistent powerhouse using Rage to empower both spells and attacks. Excels in hybrid combat, blending animal forms with nature magic.",
      "Oracle": "A strategic ascendancy that manipulates fate and the passive tree. Can allocate unconnected nodes and use 'Visages' to duplicate spellcasting."
    },
    mobalyticsUrls: {
      "Oracle": "https://mobalytics.gg/poe-2/oracle-builds",
      "Shaman": "https://mobalytics.gg/poe-2/shaman-builds"
    },
    description: "Shape-shifter and controller of nature's wrath.",
    image: "/images/druid.png"
  },
  {
    name: "Huntress",
    attribute: "Dex/Int",
    ascendancies: ["Amazon", "Ritualist", "Spirit Walker"],
    ascendancyDetails: {
      "Amazon": "Focuses on direct offensive speed and elemental fury. Excels at weaving between spear and bow attacks with high-speed mobility.",
      "Ritualist": "Uses ritualistic sacrifices of life or enemies to gain temporary boons. Features unique gear scaling with extra charm and ring synergies.",
      "Spirit Walker": "Draws power from Azmerian Animal Spirits (Stag, Owl, Bear). Can tame Unique Beast bosses as permanent companions."
    },
    mobalyticsUrls: {
      "Amazon": "https://mobalytics.gg/poe-2/amazon-builds",
      "Ritualist": "https://mobalytics.gg/poe-2/ritualist-builds",
      "Spirit Walker": "https://mobalytics.gg/poe-2/spirit-walker-builds"
    },
    description: "Versatile hunter using spears and ancestral spirits.",
    image: "/images/huntress.png"
  }
  /* 
  Unreleased classes:
  { name: "Marauder", attribute: "Strength", ascendancies: [], description: "Brutal and resilient force.", image: "/images/marauder.jpg" },
  { name: "Duelist", attribute: "Str/Dex", ascendancies: [], description: "Master of blades.", image: "/images/duelist.jpg" },
  { name: "Templar", attribute: "Str/Int", ascendancies: [], description: "Holy warrior.", image: "/images/templar.jpg" },
  { name: "Shadow", attribute: "Dex/Int", ascendancies: [], description: "Silent killer.", image: "/images/shadow.jpg" }
   
  */
];
