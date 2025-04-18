import { QuestionData } from 'src/models.ts';
import { FlipCard } from 'components/FlipCard';
import { GameCard } from 'components/Card';
import { VictoryScreen } from 'components/VictoryScreen';
import { Buttons } from 'components/Buttons';
import { ScoreDisplay } from 'components/ScoreDisplay';

interface GameAreaProps {
  isQuizCompleted: boolean;
  currentQuestionIndex: number;
  currentQuestion: QuestionData;
  totalQuestions: number;
  selectedWords: Record<number, { text: string; endPosition?: number; groupId?: string }>;
  isCardFlashing: boolean;
  score: number;
  maxPossibleScore: number;
  handleWordSelection: (
    position: number,
    suggestion: string,
    endPosition?: number,
    groupId?: string
  ) => void;
  checkAnswers: () => void;
  handleRestart: () => void;
}

export function GameArea({
  isQuizCompleted,
  currentQuestionIndex,
  currentQuestion,
  totalQuestions,
  selectedWords,
  isCardFlashing,
  score,
  handleWordSelection,
  checkAnswers,
  handleRestart,
  maxPossibleScore,
}: GameAreaProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl">
      <div className="w-full">
        {!isQuizCompleted ? (
          <FlipCard questionIndex={currentQuestionIndex}>
            <GameCard
              text={`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
              statement={currentQuestion.statement}
              fixes={currentQuestion.fixes}
              selectedWords={selectedWords}
              onSelectWord={handleWordSelection}
              isFlashing={isCardFlashing}
              difficulty={currentQuestion.difficulty}
            />
          </FlipCard>
        ) : (
          <VictoryScreen score={score} maxScore={maxPossibleScore} />
        )}
      </div>

      <Buttons
        isQuizCompleted={isQuizCompleted}
        onCheckAnswers={checkAnswers}
        onRestart={handleRestart}
      />

      <ScoreDisplay score={score} />
    </div>
  );
}
