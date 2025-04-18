import { useState, useEffect, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { pointsMap } from 'src/constants.ts';
import { questions } from '../assets/questions';
import { toDefaultSelection } from '../components/utils';

export function useGameState() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState(toDefaultSelection(questions[0].fixes));
  const [actionWord, setActionWord] = useState<string>('change');
  const [score, setScore] = useState(0);
  const [isCardFlashing, setIsCardFlashing] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Calculate the total possible score by summing points for each question's difficulty
  const maxPossibleScore = useMemo(() => {
    return questions.reduce((total, question) => {
      // Add points for the current question's difficulty to the total
      return total + (pointsMap[question.difficulty] || 0); // Use || 0 as a safeguard
    }, 0); // Start the sum at 0
  }, []); // Recalculate only if questions array changes (which it shouldn't in this setup)

  useEffect(() => {
    setSelectedWords(toDefaultSelection(questions[currentQuestionIndex].fixes));
    setIsCardFlashing(false);
  }, [currentQuestionIndex]);

  const handleWordSelection = useCallback(
    (position: number, suggestion: string, endPosition?: number, groupId?: string) => {
      setSelectedWords(prev => {
        const newState = { ...prev };
        newState[position] = { text: suggestion, endPosition, groupId };
        if (groupId) {
          // Handle grouped selections (existing logic)
          questions[currentQuestionIndex].fixes.forEach(fix => {
            if (fix.groupId === groupId && fix.startPosition !== position) {
              const originalFix = questions[currentQuestionIndex].fixes.find(
                f => f.startPosition === position
              );
              const selectedOptionCorrectness = originalFix?.options.find(
                o => o.suggestion === suggestion
              )?.correct;
              const correspondingOption = fix.options.find(
                opt => opt.correct === selectedOptionCorrectness
              );
              if (correspondingOption) {
                newState[fix.startPosition] = {
                  text: correspondingOption.suggestion,
                  endPosition: fix.endPosition,
                  groupId,
                };
              }
            }
          });
        }
        return newState;
      });
    },
    [currentQuestionIndex]
  );

  const handleActionWordSelection = useCallback((_: number, suggestion: string) => {
    setActionWord(suggestion);
  }, []);

  const moveToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      setIsQuizCompleted(true);
      confetti({ particleCount: 200, spread: 100, origin: { y: 1 } });
    }
  }, [currentQuestionIndex]);

  const checkAnswers = useCallback(() => {
    const currentQuestion = questions[currentQuestionIndex];
    let allCorrect = true;
    let totalSelected = 0;

    for (const fix of currentQuestion.fixes) {
      const selectedWord = selectedWords[fix.startPosition];
      if (!selectedWord) {
        allCorrect = false;
        continue;
      }
      totalSelected++;
      const option = fix.options.find(opt => opt.suggestion === selectedWord.text);
      if (!option || !option.correct) {
        allCorrect = false;
      }
    }

    if (totalSelected < currentQuestion.fixes.length) {
      // Handle incomplete selection if needed
    } else if (allCorrect) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.2 } });
      // Award points based on difficulty
      const pointsToAdd = pointsMap[currentQuestion.difficulty];
      setScore(prevScore => prevScore + pointsToAdd);
      setTimeout(moveToNextQuestion, 200);
    } else {
      setIsCardFlashing(true);
      setTimeout(() => {
        setIsCardFlashing(false);
        moveToNextQuestion();
      }, 200);
    }
  }, [currentQuestionIndex, moveToNextQuestion, selectedWords]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
  }, []);

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return {
    score,
    isQuizCompleted,
    handleRestart,
    currentQuestion: questions[currentQuestionIndex],
    totalQuestions: questions.length,
    maxPossibleScore,
    currentQuestionIndex,
    selectedWords,
    actionWord,
    isCardFlashing,
    progressPercentage,
    handleWordSelection,
    handleActionWordSelection,
    checkAnswers,
  };
}
