export interface QuizResponse {
    response_code: number;
    results:       QuizQuestion[];
}

export interface QuizQuestion {
    category:          string;
    type:              Type;
    difficulty:        Difficulty;
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
    user_answer?: string
}

export enum Difficulty {
    Easy = "easy",
    Hard = "hard",
    Medium = "medium",
}

export enum Type {
    Boolean = "boolean",
    Multiple = "multiple",
}
