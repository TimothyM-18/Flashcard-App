import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Flashcards</h2>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/study">
          Study
        </NavLink>
      </nav>
    </header>
  );
}