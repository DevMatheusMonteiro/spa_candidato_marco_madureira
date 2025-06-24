import { Container } from "./styles";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <h1>Marco Madureira</h1>
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaAlignJustify />
      </button>
      <nav className={!isOpen ? "hidden" : ""}>
        <ul>
          <li>
            <a href="#biography">Biografia</a>
          </li>
          <li>
            <a href="#proposals">Propostas</a>
          </li>
          <li>
            <a href="#schedules">Agenda</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
