interface ButtonsProps {
  isQuizCompleted: boolean;
  onCheckAnswers: () => void;
  onRestart: () => void;
}

export function Buttons({ isQuizCompleted, onCheckAnswers, onRestart }: ButtonsProps) {
  return (
    <>
      {!isQuizCompleted ? (
        <button
          className="btn btn-outline btn-primary text-blue-600 w-full"
          onClick={onCheckAnswers}
        >
          Submit Answer
        </button>
      ) : (
        <button 
          className="btn btn-outline btn-primary text-blue-600 w-full"
          onClick={onRestart}
        >
          Play Again
        </button>
      )}
    </>
  );
}