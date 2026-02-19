import { useState } from "react"
import type { Flashcard } from "../types/flashcard"

interface StudyCardProps {
    card: Flashcard;
    onRate: (card: Flashcard, rating: number) => void;
}

export default function StudyCard({ card, onRate}: StudyCardProps) {
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className="study-card">
            <div onClick={() => setShowAnswer(prev => !prev)}
                style={{ cursor: "pointer"}}>
                <h2>{showAnswer ? card.answer : card.question}</h2>
                <p style={{ color: showAnswer ? "#4b5563" : "#2563eb" }}>
                    {showAnswer ? "Answer" : "Question (click to reveal)"}
                </p>
            </div>

            {showAnswer && (
                <div style={{ marginTop: "20px", display: "flex", gap: "12px", justifyContent: "center" }}>
                    <button onClick={() => onRate(card, 0)} style={{ backgroundColor: "#ef4444" }}>Again</button>
                    <button onClick={() => onRate(card, 3)} style={{ backgroundColor: "#f59e0b" }}>Hard</button>
                    <button onClick={() => onRate(card, 4)} style={{ backgroundColor: "#10b981" }}>Good</button>
                    <button onClick={() => onRate(card, 5)} style={{ backgroundColor: "#2563eb", color: "white" }}>Easy</button>
                </div>
            )}
        </div>
    );
}