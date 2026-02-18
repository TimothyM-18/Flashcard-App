
export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    categoryId: string;
    interval: number;
    easeFactor: number;
    nextReview: number;
}

export interface Category {
    id: string;
    name: string;
}
