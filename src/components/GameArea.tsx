import {QuestionData} from "../models.ts";
import { FlipCard } from "./FlipCard";
import { GameCard } from "./Card";
import { VictoryScreen } from "./VictoryScreen";
import { Buttons } from "./Buttons";
import { ScoreDisplay } from "./ScoreDisplay";

interface GameAreaProps {
  isQuizCompleted: boolean;
  currentQuestionIndex: number;
  currentQuestion: QuestionData;
  totalQuestions: number;
  selectedWords: Record<number, { text: string, endPosition?: number, groupId?: string }>;
  isCardFlashing: boolean;
  score: number;
  handleWordSelection: (position: number, suggestion: string, endPosition?: number, groupId?: string) => void;
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
  handleRestart
}: GameAreaProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl">
      <div className="w-full">
        {!isQuizCompleted ? (
          <FlipCard questionIndex={currentQuestionIndex}>
            <GameCard
              type="white"
              text={`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
              statement={currentQuestion.statement}
              fixes={currentQuestion.fixes}
              selectedWords={selectedWords}
              onSelectWord={handleWordSelection}
              isFlashing={isCardFlashing}
            />
          </FlipCard>
        ) : (
          <VictoryScreen 
            score={score} 
            totalQuestions={totalQuestions} 
          />
        )}
      </div>

      <Buttons 
        isQuizCompleted={isQuizCompleted}
        onCheckAnswers={checkAnswers}
        onRestart={handleRestart}
      />

      <ScoreDisplay score={score}/>
    </div>
  );
}
