export interface RubricRequest {
  subject: string;
  topic: string;
  assignmentType: string;
  gradingScale: string;
  learningObjectives: string[];
  customCriteria?: string[];
}

export interface HomeworkRequest {
  subject: string;
  grade: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionTypes: string[];
  numberOfQuestions: number;
  includeStepByStep: boolean;
}

export interface SamplePaperRequest {
  subject: string;
  grade: string;
  examType: string;
  duration: number;
  totalMarks: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  includeAnswerKey: boolean;
  sections: {
    type: string;
    marks: number;
    questions: number;
  }[];
}