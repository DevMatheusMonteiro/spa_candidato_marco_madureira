import { FaSchool, FaShieldAlt, FaBus, FaHospital } from "react-icons/fa";
import { Container } from "./styles";

export function Proposals() {
  return (
    <Container id="proposals">
      <h2>Propostas</h2>
      <div className="proposals-content">
        <div className="proposal-card">
          <FaSchool />
          <h3>Educação de Qualidade</h3>
          <p>Investimento em escolas e formação de professores.</p>
        </div>
        <div className="proposal-card">
          <FaShieldAlt />
          <h3>Segurança e Ordem</h3>
          <p>Mais policiamento comunitário e tecnologia na segurança.</p>
        </div>
        <div className="proposal-card">
          <FaBus />
          <h3>Transporte Eficiente</h3>
          <p>Modernização da frota e ampliação de linhas.</p>
        </div>
        <div className="proposal-card">
          <FaHospital />
          <h3>Saúde para Todos</h3>
          <p>Fortalecimento da rede de saúde básica.</p>
        </div>
      </div>
      <ul>
        <li>Geração de Empregos</li>
        <li>Combate à Fome</li>
        <li>Sustentabilidade</li>
        <li>Gestão Transparente</li>
        <li>Turismo e Cultura</li>
      </ul>
    </Container>
  );
}
