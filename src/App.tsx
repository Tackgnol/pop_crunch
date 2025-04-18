import confetti from 'canvas-confetti'
import {useCallback, useEffect, useState} from "react";
import {ScoreDisplay} from "./components/ScoreDisplay.tsx";
import {questions} from "./assets/questions.ts";
import {GameCard} from "./components/Card";
import {FlipCard} from "./components/FlipCard";
import {toDefaultSelection} from "./components/utils.ts";
import {WordBadge} from "./components/WordBadge";

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedWords, setSelectedWords] = useState<Record<number, string>>(toDefaultSelection(questions[currentQuestionIndex].fixes));
    const [isVisible, setIsVisible] = useState(false);
    const [actionWord, setActionWord] = useState<string>("change");
    const [score, setScore] = useState(0);
    const [isCardFlashing, setIsCardFlashing] = useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    useEffect(() => {
        setSelectedWords(toDefaultSelection(questions[currentQuestionIndex].fixes));
        setIsVisible(false);
        setIsCardFlashing(false);
    }, [currentQuestionIndex]);

    const handleWordSelection = useCallback((position: number, suggestion: string) => {
        setSelectedWords(prev => ({...prev, [position]: suggestion}));
    }, []);

    const handleActionWordSelection = useCallback((_: number, suggestion: string) => {
        setActionWord(suggestion);
    }, []);

    const checkAnswers = () => {
        const currentQuestion = questions[currentQuestionIndex];
        let allCorrect = true;
        let totalSelected = 0;

        for (const fix of currentQuestion.fixes) {
            const selectedWord = selectedWords[fix.position];
            if (!selectedWord) {
                allCorrect = false;
                continue;
            }
            totalSelected++;
            const option = fix.options.find(opt => opt.suggestion === selectedWord);
            if (!option || !option.correct) {
                allCorrect = false;
            }
        }

        if (totalSelected < currentQuestion.fixes.length) {

        } else if (allCorrect) {

            confetti({
                particleCount: 100,
                spread: 70,
                origin: {y: 0.2}
            });
            setScore(prevScore => prevScore + 1);
            setTimeout(() => {
                moveToNextQuestion();
            }, 200);
        } else {

            setIsCardFlashing(true);
            setTimeout(() => {
                setIsCardFlashing(false);
                moveToNextQuestion();
            }, 200);
        }

        setIsVisible(true);
    };

    const moveToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
        } else {
            setIsQuizCompleted(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: {y: 1}
            });
        }
    };

    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    const actionOptions = [
        {suggestion: "change", correct: true},
        {suggestion: "fix", correct: true},
        {suggestion: "update", correct: true},
        {suggestion: "correct", correct: true}
    ];

    return (
        <div
            className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <main
                className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-[1280px] mx-auto px-4 py-8 h-full relative overflow-hidden">
                <div className="text-center mb-2 sm:mb-4">
                    <h1 className="bangers-regular text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 text-blue-600">PoP Crunch</h1>
                    <div className="text-base sm:text-lg md:text-xl flex flex-wrap justify-center items-center gap-1 nanum-myeongjo-regular text-black">
                        <p className="text-black  m-0 inline">These statements have mistakes in them, can you spot them all and</p>
                        <WordBadge
                            word={actionWord}
                            options={actionOptions}
                            position={0}
                            badgeColor="badge-primary"
                            onSelect={handleActionWordSelection}
                        />
                        <p className="text-black m-0 inline">them?</p>
                    </div>
                </div>

                <div className={`transition-all duration-500 ease-in-out transform ${
                    isVisible ? 'opacity-100 scale-100 max-h-20' : 'opacity-0 scale-95 max-h-0 overflow-hidden'
                } w-full z-10`}>

                </div>

                <div className="w-full max-w-2xl bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{width: `${progressPercentage}%`}}
                    />
                </div>

                <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl">
                    <div className="w-full">
                        {!isQuizCompleted ? (
                            <FlipCard questionIndex={currentQuestionIndex}>
                                <GameCard
                                    type="white"
                                    text={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
                                    statement={questions[currentQuestionIndex].statement}
                                    fixes={questions[currentQuestionIndex].fixes}
                                    selectedWords={selectedWords}
                                    onSelectWord={handleWordSelection}
                                    isFlashing={isCardFlashing}
                                />
                            </FlipCard>
                        ) : (
                            <div
                                className="flex flex-col gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 m-auto border-4 sm:border-8 border-blue-400 rotate-[0.042rad] bg-white text-center">
                                <h2 className="text-2xl sm:text-3xl font-semibold bangers-regular text-blue-600">Quiz
                                    Completed!</h2>
                                <p className="text-xl sm:text-2xl nanum-myeongjo-regular text-black">
                                    Well done! Your score is:
                                </p>
                                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bangers-regular text-blue-600 my-2 sm:my-4">
                                    {score} / {questions.length}
                                </div>
                            </div>
                        )}
                    </div>

                    {!isQuizCompleted ? (
                        <button
                            className="btn btn-outline btn-primary text-blue-600 w-full"
                            onClick={checkAnswers}
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button className="btn btn-outline btn-primary text-blue-600 w-full"
                                onClick={() => {
                                    setCurrentQuestionIndex(0);
                                    setScore(0);
                                    setIsQuizCompleted(false);
                                }}
                        >
                            Play Again
                        </button>
                    )}

                   <ScoreDisplay score={score}/>
                </div>
            </main>
        </div>
    );
}

export default App;
