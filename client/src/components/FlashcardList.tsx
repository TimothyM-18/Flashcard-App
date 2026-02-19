import FlashcardItem from "./FlashcardItem"
import type { Flashcard } from "../types/flashcard"


interface FlashcardListProps {
    flashcards: Flashcard[];
    onDelete: (id: string) => void;
}

export default function FlashcardList({flashcards, onDelete}: FlashcardListProps) {
    if (flashcards.length === 0) {
        return <p>No flashcards yet. Add one 👀</p>;
    }

    return (
        <div className="flashcard-list">
            {
                flashcards.map(card => (<FlashcardItem 
                    key={card.id}
                    card={card}
                    onDelete={onDelete}
                />))
            }
        </div>
    );

}