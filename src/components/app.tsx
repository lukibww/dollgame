import { Switch, Route, Link as WouterLink } from "wouter";

import Container from "./container";
import Header from "./header";
import Navigation from "./navigation";
import Link from "./link";

function App() {
  return (
    <Container>
      <Navigation>
        <WouterLink href="/">
          <Link>Strona Główna</Link>
        </WouterLink>
        <WouterLink href="/project">
          <Link>Projekt</Link>
        </WouterLink>
        <WouterLink href="/authors">
          <Link>Autorzy</Link>
        </WouterLink>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lukibw/dollgame"
        >
          Github
        </Link>
      </Navigation>
      <Switch>
        <Route path="/">
          <Header>Lalka</Header>
        </Route>
        <Route path="/project">Projekt</Route>
        <Route path="/authors">Autorzy</Route>
        <Route>Nie znaleziono strony</Route>
      </Switch>
    </Container>
  );
}

export default App;
