import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container id="contact">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <p>Contato: marco@madureira2026.com.br</p>
      </div>
    </Container>
  );
}
