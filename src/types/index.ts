export interface Question {
  id: string;
  category: 'civil' | 'procesal';
  type: 'multiple' | 'open' | 'case';
  question: string;
  options?: string[];
  correctAnswer?: string;
  explanation: string;
}

export interface SavedQuestion extends Question {
  savedAt: string;
  notes?: string;
}

export interface UserProgress {
  questionsAttempted: number;
  correctAnswers: number;
  savedQuestions: SavedQuestion[];
  points: number;
  categoryProgress: {
    civil: number;
    procesal: number;
  };
  learningMetrics: {
    completionTime: number;
    accuracy: number;
    userDemographic: number;
    participants: number;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  progress: UserProgress;
}

export interface LearningMode {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}