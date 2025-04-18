import { QuestionData } from '../models.ts';

export const questions: QuestionData[] = [
  {
    statement:
      'In The Lord of the Rings, Frodo must destroy the One Ring in the fires of Mount Destiny.',
    difficulty: 'easy',
    fixes: [
      {
        text: 'Destiny',
        startPosition: 17,
        options: [
          { suggestion: 'Doom', correct: true },
          { suggestion: 'Gloom', correct: false },
          { suggestion: 'Fate', correct: false },
          { suggestion: 'Destiny', correct: false },
        ],
      },
      {
        text: 'Frodo',
        startPosition: 6,
        options: [
          { suggestion: 'Frodo', correct: true },
          { suggestion: 'Sam', correct: false },
          { suggestion: 'Bilbo', correct: false },
          { suggestion: 'Gandalf', correct: false },
        ],
      },
      {
        text: 'Ring',
        startPosition: 11,
        options: [
          { suggestion: 'Sword', correct: false },
          { suggestion: 'Amulet', correct: false },
          { suggestion: 'Crown', correct: false },
          { suggestion: 'Ring', correct: true },
        ],
      },
    ],
  },
  {
    statement:
      "In George R.R. Martin's A Song of Ice and Fire, the Wall, a massive ice structure, is defended by the Night's Watch to protect the realms of men from the Others and wildlings beyond.",
    difficulty: 'medium',
    fixes: [
      {
        text: 'ice structure',
        startPosition: 14,
        endPosition: 15,
        options: [
          { suggestion: 'ice structure', correct: true },
          { suggestion: 'stone fortress', correct: false },
          { suggestion: 'ancient forest', correct: false },
          { suggestion: 'magical barrier', correct: false },
        ],
      },
      {
        text: "Night's Watch",
        startPosition: 20,
        endPosition: 21,
        options: [
          { suggestion: 'Kingsguard', correct: false },
          { suggestion: 'Gold Cloaks', correct: false },
          { suggestion: "Night's Watch", correct: true },
          { suggestion: 'Brotherhood Without Banners', correct: false },
        ],
      },
      {
        text: 'Others',
        startPosition: 30,
        options: [
          { suggestion: 'Others', correct: true },
          { suggestion: 'Dothraki', correct: false },
          { suggestion: 'Lannisters', correct: false },
          { suggestion: 'Giants', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      "In Terry Pratchett's Discworld, the Patrician of Ankh-Morpork is Lord Vetinari, a wise and benevolent leader who rules with absolute democracy.",
    difficulty: 'medium',
    fixes: [
      {
        text: 'Patrician',
        startPosition: 5,
        options: [
          { suggestion: 'King', correct: false },
          { suggestion: 'Patrician', correct: true },
          { suggestion: 'Mayor', correct: false },
          { suggestion: 'Archchancellor', correct: false },
        ],
      },
      {
        text: 'wise and benevolent leader',
        startPosition: 12,
        endPosition: 15,
        options: [
          { suggestion: 'wise and ruthless leader', correct: true },
          { suggestion: 'chaotic and unpredictable figure', correct: false },
          { suggestion: 'kind and elderly advisor', correct: false },
          { suggestion: 'powerful magical entity', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      "In Brandon Sanderson's Mistborn series, the inhabitants of the Final Empire, primarily Skaa and Nobles, lived under the oppressive rule of the Lord Ruler for a thousand years.",
    difficulty: 'hard',
    fixes: [
      {
        text: 'Final Empire',
        startPosition: 9,
        endPosition: 10,
        options: [
          { suggestion: 'Final Empire', correct: true },
          { suggestion: 'Scarred Lands', correct: false },
          { suggestion: 'Steel Ministry', correct: false },
          { suggestion: 'Shattered Plains', correct: false },
        ],
      },
      {
        text: 'Skaa and Nobles',
        startPosition: 12,
        endPosition: 14,
        options: [
          { suggestion: 'Skaa and Nobles', correct: true },
          { suggestion: 'Lighteyes and Darkeyes', correct: false },
          { suggestion: 'Radiants and Squires', correct: false },
          { suggestion: 'Ferrings and Terrismen', correct: false },
        ],
      },
      {
        text: 'Lord Ruler',
        startPosition: 22,
        endPosition: 23,
        options: [
          { suggestion: 'Lord Ruler', correct: true },
          { suggestion: 'Vin Venture', correct: false },
          { suggestion: 'Kelsier', correct: false },
          { suggestion: 'Harmony', correct: false },
        ],
      },
    ],
  },
  {
    statement: 'In Star Wars, the Millennium Falcon made the Kessel Run in less than 14 parsecs.',
    difficulty: 'easy',
    fixes: [
      {
        text: '14',
        startPosition: 13,
        options: [
          { suggestion: '14', correct: false },
          { suggestion: '12', correct: true },
          { suggestion: '15', correct: false },
          { suggestion: '10', correct: false },
        ],
      },
      {
        text: 'Millennium',
        startPosition: 4,
        options: [
          { suggestion: 'Millennium', correct: true },
          { suggestion: 'Enterprise', correct: false },
          { suggestion: 'Discovery', correct: false },
          { suggestion: 'Razor', correct: false },
        ],
      },
      {
        text: 'parsecs',
        startPosition: 14,
        options: [
          { suggestion: 'parsecs', correct: true },
          { suggestion: 'seconds', correct: false },
          { suggestion: 'minutes', correct: false },
          { suggestion: 'hours', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In the Marvel universe, Tony Stark becomes Iron Man after building a suit in a cave.',
    difficulty: 'easy',
    fixes: [
      {
        text: 'Tony',
        startPosition: 4,
        options: [
          { suggestion: 'Tony', correct: true },
          { suggestion: 'Bruce', correct: false },
          { suggestion: 'Steve', correct: false },
          { suggestion: 'Peter', correct: false },
        ],
      },
      {
        text: 'Iron',
        startPosition: 7,
        options: [
          { suggestion: 'Iron', correct: true },
          { suggestion: 'Spider', correct: false },
          { suggestion: 'Hulk', correct: false },
          { suggestion: 'Ant', correct: false },
        ],
      },
      {
        text: 'cave',
        startPosition: 15,
        options: [
          { suggestion: 'spacecraft', correct: false },
          { suggestion: 'cave', correct: true },
          { suggestion: 'lab', correct: false },
          { suggestion: 'garage', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In Star Wars: Episode V – The Empire Strikes Back, Luke Skywalker trains with Yoda on the planet Dagobah.',
    difficulty: 'medium',
    fixes: [
      {
        text: 'Yoda',
        startPosition: 14,
        options: [
          { suggestion: 'Yoda', correct: true },
          { suggestion: 'Obi‑Wan', correct: false },
          { suggestion: 'Leia', correct: false },
          { suggestion: 'Han Solo', correct: false },
        ],
      },
      {
        text: 'Dagobah',
        startPosition: 18,
        options: [
          { suggestion: 'Tatooine', correct: false },
          { suggestion: 'Endor', correct: false },
          { suggestion: 'Hoth', correct: false },
          { suggestion: 'Dagobah', correct: true },
        ],
      },
      {
        text: 'Luke',
        startPosition: 10,
        options: [
          { suggestion: 'Luke', correct: true },
          { suggestion: 'Leia', correct: false },
          { suggestion: 'Han', correct: false },
          { suggestion: 'Anakin', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In The Legend of Zelda: Breath of the Wild, Link awakens from a 100‑year slumber in the Shrine of Resurrection.',
    difficulty: 'medium',
    fixes: [
      {
        text: 'Link',
        startPosition: 9,
        options: [
          { suggestion: 'Zelda', correct: false },
          { suggestion: 'Link', correct: true },
          { suggestion: 'Ganondorf', correct: false },
          { suggestion: 'Impa', correct: false },
        ],
      },
      {
        text: '100‑year',
        startPosition: 13,
        options: [
          { suggestion: '100‑year', correct: true },
          { suggestion: '1000‑year', correct: false },
          { suggestion: 'century‑long', correct: false },
          { suggestion: 'millennia-long', correct: false },
        ],
      },
      {
        text: 'Resurrection',
        startPosition: 19,
        options: [
          { suggestion: 'Resurrection', correct: true },
          { suggestion: 'Rebirth', correct: false },
          { suggestion: 'Ascension', correct: false },
          { suggestion: 'Redemption', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      "In Christopher Nolan's Inception, Cobb must plant an idea in Fischer's subconscious by descending into multiple dream levels.",
    difficulty: 'hard',
    fixes: [
      {
        text: 'Cobb',
        startPosition: 4,
        options: [
          { suggestion: 'Cobb', correct: true },
          { suggestion: 'Arthur', correct: false },
          { suggestion: 'Eames', correct: false },
          { suggestion: 'Yusuf', correct: false },
        ],
      },
      {
        text: "Fischer's",
        startPosition: 10,
        options: [
          { suggestion: "Mal's", correct: false },
          { suggestion: "Saito's", correct: false },
          { suggestion: "Fischer's", correct: true },
          { suggestion: "Browning's", correct: false },
        ],
      },
      {
        text: 'levels',
        startPosition: 15,
        options: [
          { suggestion: 'levels', correct: true },
          { suggestion: 'layers', correct: false },
          { suggestion: 'stages', correct: false },
          { suggestion: 'phases', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In The Witcher series, Geralt of Rivia is bound by a Law of Surprise after rescuing Duny, which later ties him to Ciri.',
    difficulty: 'hard',
    fixes: [
      {
        text: 'Geralt',
        startPosition: 4,
        options: [
          { suggestion: 'Geralt', correct: true },
          { suggestion: 'Jaskier', correct: false },
          { suggestion: 'Vesemir', correct: false },
          { suggestion: 'Dandelion', correct: false },
        ],
      },
      {
        text: 'Surprise',
        startPosition: 13,
        options: [
          { suggestion: 'Surprise', correct: true },
          { suggestion: 'Promise', correct: false },
          { suggestion: 'Destiny', correct: false },
          { suggestion: 'Oath', correct: false },
        ],
      },
      {
        text: 'Ciri',
        startPosition: 22,
        options: [
          { suggestion: 'Yennefer', correct: false },
          { suggestion: 'Triss', correct: false },
          { suggestion: 'Ciri', correct: true },
          { suggestion: 'Fringilla', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In Dark Souls, the player character traverses Lordran to ring the Bells of Awakening and gather Lord Souls to link the First Flame.',
    difficulty: 'hard',
    fixes: [
      {
        text: 'Lordran',
        startPosition: 7,
        options: [
          { suggestion: 'Lordran', correct: true },
          { suggestion: 'Drangleic', correct: false },
          { suggestion: 'Lothric', correct: false },
          { suggestion: 'Anor Londo', correct: false },
        ],
      },
      {
        text: 'Bells of Awakening',
        startPosition: 12,
        endPosition: 14,
        options: [
          { suggestion: 'Bells of Calling', correct: false },
          { suggestion: 'Bells of Summoning', correct: false },
          { suggestion: 'Bells of Awakening', correct: true },
          { suggestion: 'Bells of Destiny', correct: false },
        ],
      },
      {
        text: 'First Flame',
        startPosition: 21,
        endPosition: 22,
        options: [
          { suggestion: 'First Flame', correct: true },
          { suggestion: 'Dark Soul', correct: false },
          { suggestion: 'Eternal Fire', correct: false },
          { suggestion: 'Ancient Ember', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'In many D&D settings, the Astral Plane is a silvery realm connecting other planes, where thought can allow movement and Githyanki hunt Mind Flayers.',
    difficulty: 'medium',
    fixes: [
      {
        text: 'Astral Plane',
        startPosition: 5,
        endPosition: 6,
        options: [
          { suggestion: 'Astral Plane', correct: true },
          { suggestion: 'Shadowfell', correct: false },
          { suggestion: 'Elemental Plane of Air', correct: false },
          { suggestion: 'Ethereal Plane', correct: false },
        ],
      },
      {
        text: 'silvery realm',
        startPosition: 9,
        endPosition: 10,
        options: [
          { suggestion: 'silvery realm', correct: true },
          { suggestion: 'fiery void', correct: false },
          { suggestion: 'endless forest', correct: false },
          { suggestion: 'chaotic maelstrom', correct: false },
        ],
      },
      {
        text: 'Githyanki',
        startPosition: 20,
        options: [
          { suggestion: 'Githyanki', correct: true },
          { suggestion: 'Githzerai', correct: false },
          { suggestion: 'Illithid', correct: false },
          { suggestion: 'Modrons', correct: false },
        ],
      },
      {
        text: 'Mind Flayers',
        startPosition: 22,
        endPosition: 23,
        options: [
          { suggestion: 'Beholders', correct: false },
          { suggestion: 'Mind Flayers', correct: true },
          { suggestion: 'Aboleths', correct: false },
          { suggestion: 'Demons', correct: false },
        ],
      },
    ],
  },
  {
    statement:
      'Vecna is a powerful lich who sought godhood, known for his artifacts: the Eye of Vecna and Hand of Vecna.',
    difficulty: 'medium',
    fixes: [
      {
        text: 'lich',
        startPosition: 4,
        options: [
          { suggestion: 'lich', correct: true },
          { suggestion: 'vampire', correct: false },
          { suggestion: 'demilich', correct: false },
          { suggestion: 'mummy lord', correct: false },
        ],
      },
      {
        text: 'Eye of Vecna and Hand of Vecna',
        startPosition: 12,
        endPosition: 19,
        options: [
          { suggestion: 'Sphere of Annihilation', correct: false },
          { suggestion: 'Rod of Seven Parts', correct: false },
          { suggestion: 'Blade of Kas', correct: false },
          { suggestion: 'Eye of Vecna and Hand of Vecna', correct: true },
        ],
      },
    ],
  },
  {
    statement: 'Han Solo piloted the Millennium Eagle across the galaxy to avoid Imperial forces.',
    difficulty: 'medium',
    fixes: [
      {
        text: 'Millennium Eagle',
        startPosition: 4,
        endPosition: 5,
        options: [
          { suggestion: 'Millennium Falcon', correct: true },
          { suggestion: 'Millennium Eagle', correct: false },
          { suggestion: 'Death Star', correct: false },
          { suggestion: 'Star Destroyer', correct: false },
        ],
      },
      {
        text: 'Imperial',
        startPosition: 11,
        options: [
          { suggestion: 'Rebel', correct: false },
          { suggestion: 'Imperial', correct: true },
          { suggestion: 'Republic', correct: false },
          { suggestion: 'Alliance', correct: false },
        ],
      },
    ],
  },
];
