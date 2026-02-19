import { Routes, Route } from "react-router-dom"
import FlashcardList from "./components/FlashcardList";
import FlashcardForm from "./components/FlashcardForm";
import Study from "./pages/Study"
import type { Flashcard } from "./types/flashcard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";

function App() {
  const [flashcards, setFlashcards] =
  useLocalStorage<Flashcard[]>("flashcards", []);

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
                <FlashcardList
                  flashcards={flashcards}
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
