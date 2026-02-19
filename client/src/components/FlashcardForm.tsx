import { useState } from "react"

import type { Flashcard } from "../types/flashcard"

interface FlashcardFormProps {
    onAdd: (card: Flashcard) => void;
}
 
export default function FlashcardForm({ onAdd }: FlashcardFormProps) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!question || !answer || !category) return;

        const newCard: Flashcard = {
            id: crypto.randomUUID(),
            question,
            answer,
            category,
            categoryId: "default",
            interval: 1,
            easeFactor: 2.5,
            nextReview: Date.now()
        }

        onAdd(newCard);
        setQuestion("");
        setAnswer("");
        setCategory("");
    };

    return (
        <form onSubmit={handleSubmit} className="flashcard-form">
            <input 
                type="text"
                placeholder="Category (e.g Algorithms, React)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Question"
                value={question}
                onChange={e => setQuestion(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />

            <button type="submit">
                Add Flashcard
            </button>
        </form>
    );   
}