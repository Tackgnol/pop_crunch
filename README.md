# <img src="src/assets/explosion.svg" width="30" height="30" alt="Pop Crunch Logo"> Pop Crunch - Documentation

> Pop Crunch is an interactive quiz game built with React and TypeScript that challenges players to identify and fix incorrect statements about popular culture. Players are presented with statements containing potential errors that they must identify and correct.
## 🚀 Building and Launching
### Prerequisites
- Node.js (latest stable version)
- npm package manager
### Setting Up the Project
1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd pop_crunch
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Development Mode**
   Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or another port if 5173 is in use).
4. **Building for Production**
   Create a production build:
   ```bash
   npm run build
   ```
   This generates optimized files in the `dist` directory.
5. **Preview Production Build**
   To preview the production build locally:
   ```bash
   npm run preview
   ```
## ❓ Creating and Adding Questions
### Question Structure
Each question follows this format:
```typescript 
{
  statement: string, // The statement with potential errors 
  difficulty: string, // 'easy', 'medium', or 'hard'
  fixes: [{
     text: string, // Text segment that might need fixing 
     startPosition: number, // Starting position in the statement 
     endPosition?: number, // Optional ending position 
     groupId?: string, // Optional group identifier 
     options:[{
         suggestion: string, // Possible replacement text 
         correct: boolean // Whether this is the correct option
     }]
  }
}
``` 
### Adding a New Question
1. Open `src/assets/questions.ts`
2. Add your new question to the `questions` array:
```typescript
{
    statement: "Your pop culture statement with potential errors",
    difficulty: 'easy', // or 'medium' or 'hard'
    fixes: [
        {
            text: "TextToFix",
            startPosition: 4, // Position in the statement (index)
            options: [
                { suggestion: "Correct option", correct: true },
                { suggestion: "Wrong option 1", correct: false },
                { suggestion: "Wrong option 2", correct: false },
                { suggestion: "Wrong option 3", correct: false }
            ]
        }
        // Add more fixable segments as needed
    ]
}
``` 
### Example Question
```typescript
{
    statement: "In Harry Potter, the main character attends Hogwarts School of Magic and Wizardry.",
    difficulty: 'easy',
    fixes: [
        {
            text: "Magic",
            startPosition: 10,
            options: [
                { suggestion: "Magic", correct: false },
                { suggestion: "Witchcraft", correct: true },
                { suggestion: "Sorcery", correct: false },
                { suggestion: "Spells", correct: false }
            ]
        }
    ]
}
``` 
### Guidelines for Effective Questions
1. **Clear Statements**: Write clear and concise statements.
2. **Appropriate Difficulty**: Label questions as 'easy', 'medium', or 'hard' based on how obscure the references are.
3. **Multiple Fix Points**: Include 2-3 potential fix points per question to increase engagement.
4. **Balanced Options**: For each fix point, provide one correct option and several plausible but incorrect options.
5. **Position Accuracy**: Ensure `startPosition` correctly identifies where the text appears in the statement.
6. **Varied Topics**: Cover a range of popular culture topics including movies, games, TV shows, and books.
## ⚙️ Game Mechanics
The game presents players with statements that may contain errors about popular culture. Players must:
1. Identify which parts of the statement might be incorrect
2. Select the correct option from several alternatives
3. Submit their answers to check if they're correct
4. Earn points for correctly identifying and fixing errors
The game provides immediate feedback and tracks the player's score. After completing all questions, a victory screen displays the final score.
### Key Components
- **FlipCard**: Provides a card-flipping animation between questions
- **GameCard**: Displays the current question and options
- **ScoreDisplay**: Shows the current score
- **VictoryScreen**: Appears when all questions are completed
### Testing New Questions
After adding new questions:
1. Run the application in development mode (`npm run dev`)
2. Play through the game to ensure your questions appear correctly
3. Verify that the correct answers are properly identified
4. Check that the difficulty level feels appropriate
