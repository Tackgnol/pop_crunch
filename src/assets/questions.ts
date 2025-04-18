interface QuestionData {
    statement: string;
    difficulty: 'easy' | 'medium' | 'hard';
    fixes: {
        word: string;
        position: number;
        options: {
            suggestion: string;
            correct: boolean;
        }[];
    }[];
}

export const questions: QuestionData[] = [
    {
        statement: "In The Lord of the Rings, Frodo must destroy the One Ring in the fires of Mount Destiny.",
        difficulty: 'easy',
        fixes: [
            {
                word: "Destiny",
                position: 17,
                options: [
                    {suggestion: "Doom", correct: true},
                    {suggestion: "Gloom", correct: false},
                    {suggestion: "Fate", correct: false},
                    {suggestion: "Destiny", correct: false}
                ]
            },
            {
                word: "Frodo",
                position: 6,
                options: [
                    {suggestion: "Frodo", correct: true},
                    {suggestion: "Sam", correct: false},
                    {suggestion: "Bilbo", correct: false},
                    {suggestion: "Gandalf", correct: false},
                ]
            },
            {
                word: "Ring",
                position: 11,
                options: [
                    {suggestion: "Sword", correct: false},
                    {suggestion: "Amulet", correct: false},
                    {suggestion: "Crown", correct: false},
                    {suggestion: "Ring", correct: true}
                ]
            }
        ]
    },
    {
        statement: "In Star Wars, the Millennium Falcon made the Kessel Run in less than 14 parsecs.",
        difficulty: 'easy',
        fixes: [
            {
                word: "14",
                position: 13,
                options: [
                    {suggestion: "14", correct: false},
                    {suggestion: "12", correct: true},
                    {suggestion: "15", correct: false},
                    {suggestion: "10", correct: false}
                ]
            },
            {
                word: "Millennium",
                position: 4,
                options: [
                    {suggestion: "Millennium", correct: true},
                    {suggestion: "Enterprise", correct: false},
                    {suggestion: "Discovery", correct: false},
                    {suggestion: "Razor", correct: false}
                ]
            },
            {
                word: "parsecs",
                position: 14,
                options: [
                    {suggestion: "parsecs", correct: true},
                    {suggestion: "seconds", correct: false},
                    {suggestion: "minutes", correct: false},
                    {suggestion: "hours", correct: false}
                ]
            }
        ]
    },
    {
        statement: "In the Marvel universe, Tony Stark becomes Iron Man after building a suit in a cave.",
        difficulty: "easy",
        fixes: [
            {
                word: "Tony",
                position: 4,
                options: [
                    {suggestion: "Tony", correct: true},
                    {suggestion: "Bruce", correct: false},
                    {suggestion: "Steve", correct: false},
                    {"suggestion": "Peter", "correct": false}
                ]
            },
            {
                word: "Iron",
                position: 7,
                options: [
                    {suggestion: "Iron", correct: true},
                    {suggestion: "Spider", correct: false},
                    {suggestion: "Hulk", correct: false},
                    {suggestion: "Ant", correct: false}
                ]
            },
            {
                word: "cave",
                position: 15,
                options: [
                    {suggestion: "spacecraft", correct: false},
                    {suggestion: "cave", correct: true},
                    {suggestion: "lab", correct: false},
                    {suggestion: "garage", correct: false}
                ]
            }
        ]
    },
    {
        statement: "In Star Wars: Episode V – The Empire Strikes Back, Luke Skywalker trains with Yoda on the planet Dagobah.",
        difficulty: 'medium',
        fixes: [
            {
                word: "Yoda",
                position: 14,
                options: [
                    {suggestion: "Yoda", correct: true},
                    {suggestion: "Obi‑Wan", correct: false},
                    {suggestion: "Leia", correct: false},
                    {suggestion: "Han Solo", correct: false}
                ]
            },
            {
                word: "Dagobah",
                position: 18,
                options: [
                    {suggestion: "Tatooine", correct: false},
                    {suggestion: "Endor", correct: false},
                    {suggestion: "Hoth", correct: false},
                    {suggestion: "Dagobah", correct: true}
                ]
            },
            {
                word: "Luke",
                position: 10,
                options: [
                    {suggestion: "Luke", correct: true},
                    {suggestion: "Leia", correct: false},
                    {suggestion: "Han", correct: false},
                    {suggestion: "Anakin", correct: false}
                ]
            }
        ]
    },
    {
        statement: "In The Legend of Zelda: Breath of the Wild, Link awakens from a 100‑year slumber in the Shrine of Resurrection.",
        difficulty: 'medium',
        fixes: [
            {
                word: "Link",
                position: 9,
                options: [
                    { suggestion: "Zelda", correct: false },
                    { suggestion: "Link", correct: true },
                    { suggestion: "Ganondorf", correct: false },
                    { suggestion: "Impa", correct: false }
                ]
            },
            {
                word: "100‑year",
                position: 13,
                options: [
                    { suggestion: "100‑year", correct: true },
                    { suggestion: "1000‑year", correct: false },
                    { suggestion: "century‑long", correct: false },
                    { suggestion: "millennia-long", correct: false },
                ]
            },
            {
                word: "Resurrection",
                position: 19,
                options: [
                    { suggestion: "Resurrection", correct: true },
                    { suggestion: "Rebirth", correct: false },
                    { suggestion: "Ascension", correct: false },
                    { suggestion: "Redemption", correct: false }
                ]
            }
        ]
    },
    {
        statement: "In Christopher Nolan's Inception, Cobb must plant an idea in Fischer's subconscious by descending into multiple dream levels.",
        difficulty: 'hard',
        fixes: [
            {
                word: "Cobb",
                position: 4,
                options: [
                    { suggestion: "Cobb", correct: true },
                    { suggestion: "Arthur", correct: false },
                    { suggestion: "Eames", correct: false },
                    { suggestion: "Yusuf", correct: false }
                ]
            },
            {
                word: "Fischer's",
                position: 10,
                options: [
                    { suggestion: "Mal's", correct: false },
                    { suggestion: "Saito's", correct: false },
                    { suggestion: "Fischer's", correct: true },
                    { suggestion: "Browning's", correct: false }
                ]
            },
            {
                word: "levels",
                position: 15,
                options: [
                    { suggestion: "levels", correct: true },
                    { suggestion: "layers", correct: false },
                    { suggestion: "stages", correct: false },
                    { suggestion: "phases", correct: false }
                ]
            }
        ]
    },
    {
        statement: "In The Witcher series, Geralt of Rivia is bound by a Law of Surprise after rescuing Duny, which later ties him to Ciri.",
        difficulty: 'hard',
        fixes: [
            {
                word: "Geralt",
                position: 4,
                options: [
                    { suggestion: "Geralt", correct: true },
                    { suggestion: "Jaskier", correct: false },
                    { suggestion: "Vesemir", correct: false },
                    { suggestion: "Dandelion", correct: false }
                ]
            },
            {
                word: "Surprise",
                position: 13,
                options: [
                    { suggestion: "Surprise", correct: true },
                    { suggestion: "Promise", correct: false },
                    { suggestion: "Destiny", correct: false },
                    { suggestion: "Oath", correct: false }
                ]
            },
            {
                word: "Ciri",
                position: 22,
                options: [
                    { suggestion: "Yennefer", correct: false },
                    { suggestion: "Triss", correct: false },
                    { suggestion: "Ciri", correct: true },
                    { suggestion: "Fringilla", correct: false }
                ]
            }
        ]
    },
    {
        statement: "In Dark Souls, the player character traverses Lordran to ring the Bells of Awakening and gather Lord Souls to link the First Flame.",
        difficulty: 'hard',
        fixes: [
            {
                word: "Lordran",
                position: 7,
                options: [
                    { suggestion: "Lordran", correct: true },
                    { suggestion: "Drangleic", correct: false },
                    { suggestion: "Anor'Londo", correct: false },
                    { suggestion: "Artorias", correct: false }
                ]
            },
            {
                word: "Awakening",
                position: 13,
                options: [
                    { suggestion: "Awakening", correct: true },
                    { suggestion: "Revival", correct: false },
                    { suggestion: "Resurrection", correct: false },
                    { suggestion: "Rebirth", correct: false }
                ]
            },
            {
                word: "Flame",
                position: 22,
                options: [
                    { suggestion: "Fire", correct: false },
                    { suggestion: "Cinder", correct: false },
                    { suggestion: "Ash", correct: false },
                    { suggestion: "Flame", correct: true }
                ]
            }
        ]
    }
];
