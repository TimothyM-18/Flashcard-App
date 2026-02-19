import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";
import Study from "./pages/Study"
import type { Flashcard } from "./types/flashcard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";

function App() {
  const [flashcards, setFlashcards] =
  useLocalStorage<Flashcard[]>("flashcards", []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(flashcards.map(card => card.category))
  ]

  const visibleFlashcards =
  selectedCategory === "All"
    ? flashcards
    : flashcards.filter(card => card.category === selectedCategory);

  const addFlashcard = (card: Flashcard) => {
    setFlashcards([...flashcards, card]);
  };

  const deleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <h1>Flash Card App</h1>
                <FlashcardForm onAdd={addFlashcard} />
                <div className="category-filter">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={category === selectedCategory ? "active" : ""}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <FlashcardList
                  flashcards={visibleFlashcards}
                  onDelete={deleteFlashcard}
                />
              </>
            }
          />

          <Route path="/study" element={<Study />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App
