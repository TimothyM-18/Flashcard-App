import { useState, useEffect } from "react"
import StudyCard from "../components/StudyCard";
import { calculateNextReview } from "../hooks/useSpacedRepetition";
import type { Flashcard } from "../types/flashcard";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Study() {
    const [flashcards, setFlashcards] = useLocalStorage<Flashcard[]>("flashcards", []);
    const [dueCards, setDueCards] = useState<Flashcard[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
        const now = Date.now();
        const due = flashcards.filter(card => card.nextReview <= now);

        setDueCards(due);
        setCurrentIndex(0);
    }, [flashcards]);

    if (dueCards.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>No cards due for review! 🎉</p>;
    }

    const currentCard = dueCards[currentIndex];

    const handleRate = (card: Flashcard, rating: number) => {
        const updatedCard = calculateNextReview(card, rating);

        // Update flashcards in localStorage
        const updatedFlashcards = flashcards.map(c => c.id === card.id ? updatedCard : c);
        setFlashcards(updatedFlashcards);

        // Move to next card
        if (currentIndex < dueCards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            alert("You completed all due cards for today! 🎉");
            setDueCards([]);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>Study Mode</h1>
            <p>Card {currentIndex + 1} of {dueCards.length}</p>

            <StudyCard card={currentCard} onRate={handleRate}/>
        </div>
    );


}