import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Biography } from "../../components/Biography";
import { Proposals } from "../../components/Proposals";
import { Schedule } from "../../components/Schedule";
import { Footer } from "../../components/Footer";
export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Biography />
        <Proposals />
        <Schedule />
      </Main>
      <Footer />
    </Container>
  );
}
