interface VictoryScreenProps {
  score: number;
  totalQuestions: number;
}

export function VictoryScreen({ score, totalQuestions }: VictoryScreenProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 m-auto border-4 sm:border-8 border-blue-400 rotate-[0.042rad] bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold bangers-regular text-blue-600">
        Quiz Completed!
      </h2>
      <p className="text-xl sm:text-2xl nanum-myeongjo-regular text-black">
        Well done! Your score is:
      </p>
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold bangers-regular text-blue-600 my-2 sm:my-4">
        {score} / {totalQuestions}
      </div>
    </div>
  );
}
