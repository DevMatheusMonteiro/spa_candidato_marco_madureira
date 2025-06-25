import { Container } from "./styles";

export function Schedule() {
  return (
    <Container id="schedule">
      <h2>Agenda</h2>
      <ul className="schedule-list">
        <li>25 - Caminhada em Copacabana</li>
        <li>27 - Encontro com líderes comunitários</li>
        <li>29 - Comício em Madureira</li>
        <li>30 - Visita ao Complexo do Alemão</li>
      </ul>
    </Container>
  );
}
