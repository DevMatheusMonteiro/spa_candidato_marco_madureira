import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Biography } from "../../components/Biography";
import { Proposals } from "../../components/Proposals";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Biography />
        <Proposals />
      </Main>
    </Container>
  );
}
