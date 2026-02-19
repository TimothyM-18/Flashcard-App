import { useState } from "react"

import type { Flashcard } from "../types/flashcard"

interface FlashcardFormProps {
    onAdd: (card: Flashcard) => void;
}
 
export default function FlashcardForm({ onAdd }: FlashcardFormProps) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newCard: Flashcard = {
            id: crypto.randomUUID(),
            question,
            answer,
            categoryId: "default",
            interval: 1,
            easeFactor: 2.5,
            nextReview: Date.now()
        }

        onAdd(newCard);
        setQuestion("");
        setAnswer("");
    };

    return (
        <form onSubmit={handleSubmit} className="flashcard-form">
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