export interface IFix {
  text: string;
  startPosition: number;
  endPosition?: number;
  groupId?: string;
  options: {
    suggestion: string;
    correct: boolean;
  }[];
}

export interface QuestionData {
  statement: string;
  difficulty: 'easy' | 'medium' | 'hard';
  fixes: {
    text: string;
    startPosition: number;
    endPosition?: number;
    groupId?: string;
    options: {
      suggestion: string;
      correct: boolean;
    }[];
  }[];
}

export interface IOption {
  suggestion: string;
  correct: boolean;
}
