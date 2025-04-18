import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { questions } from '../assets/questions';
import { toDefaultSelection } from '../components/utils';

export function useGameState() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState(toDefaultSelection(questions[0].fixes));
  const [actionWord, setActionWord] = useState<string>('change');
  const [score, setScore] = useState(0);
  const [isCardFlashing, setIsCardFlashing] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    setSelectedWords(toDefaultSelection(questions[currentQuestionIndex].fixes));
    setIsCardFlashing(false);
  }, [currentQuestionIndex]);

  const handleWordSelection = useCallback(
    (position: number, suggestion: string, endPosition?: number, groupId?: string) => {
      setSelectedWords(prev => {
        const newState = { ...prev };

        newState[position] = {
          text: suggestion,
          endPosition,
          groupId,
        };

        // If this is part of a group, update all related selections
        if (groupId) {
          questions[currentQuestionIndex].fixes.forEach(fix => {
            if (fix.groupId === groupId && fix.startPosition !== position) {
              const option = fix.options.find(
                opt =>
                  questions[currentQuestionIndex].fixes
                    .find(f => f.startPosition === position)
                    ?.options.find(o => o.suggestion === suggestion)?.correct === opt.correct
              );

              if (option) {
                newState[fix.startPosition] = {
                  text: option.suggestion,
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
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 1 },
      });
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
      // Could add a notification here to select all words
    } else if (allCorrect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.2 },
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
  }, [currentQuestionIndex, moveToNextQuestion, selectedWords]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
  }, []);

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return {
    currentQuestionIndex,
    selectedWords,
    actionWord,
    score,
    isCardFlashing,
    isQuizCompleted,
    progressPercentage,
    handleWordSelection,
    handleActionWordSelection,
    checkAnswers,
    handleRestart,
    currentQuestion: questions[currentQuestionIndex],
    totalQuestions: questions.length,
  };
}
