import { Container } from "./styles";
import marcoMadureuiraImage from "../../assets/marco_madureira.jpg";
export function Biography() {
  return (
    <Container id="biography">
      <h2>Biografia</h2>
      <div className="biography-content">
        <img src={marcoMadureuiraImage} alt="Marco Madureira" />
        <div className="biography-text">
          <p>
            Marco Madureira é um político brasileiro com uma carreira dedicada
            ao serviço público e à comunidade. Nascido e criado em São Paulo,
            ele sempre teve um forte compromisso com a justiça social e o
            bem-estar da população.
          </p>
          <p>
            Formado em Direito pela Universidade de São Paulo, Marco começou sua
            carreira como advogado, defendendo os direitos dos cidadãos e
            lutando contra as desigualdades sociais. Sua paixão pela política o
            levou a se candidatar a cargos públicos, onde tem trabalhado
            incansavelmente para melhorar a vida dos cidadãos.
          </p>
        </div>
      </div>
    </Container>
  );
}
