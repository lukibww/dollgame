import Container from "./container";
import Header from "./header";
import Navigation from "./navigation";
import Link from "./link";

function App() {
  return (
    <Container>
      <Navigation>
        <Link href="/project">Projekt</Link>
        <Link href="/autorzy">Autorzy</Link>
        <Link href="https://github.com/lukibw/dollgame">Github</Link>
      </Navigation>
      <Header>Lalka</Header>
    </Container>
  );
}

export default App;
