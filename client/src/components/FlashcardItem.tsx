import type { Flashcard } from "../types/flashcard";

interface FlashcardItemProps {
    card: Flashcard;
    onDelete: (id: string) => void;
}

export default function FlashCard({ card, onDelete }: FlashcardItemProps) {
    return (
        <div className="flashcard-item">
            <h3>{card.question}</h3>
            <p>{card.answer}</p>

            <button onClick={() => onDelete(card.id)}>
                Delete
            </button>
        </div>
    );

}