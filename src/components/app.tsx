import { Switch, Route, Link as WouterLink, useLocation } from "wouter";

import Container from "./container";
import Header from "./header";
import Navigation from "./navigation";
import Link from "./link";
import Paragraph from "./paragraph";
import Button from "./button";

function App() {
  const [location] = useLocation();

  return (
    <Container>
      <Navigation>
        <WouterLink href="/">
          <Link active={location === "/"}>Strona Główna</Link>
        </WouterLink>
        <WouterLink href="/play">
          <Link active={location === "/play"}>Gra</Link>
        </WouterLink>
        <WouterLink href="/project">
          <Link active={location === "/project"}>Projekt</Link>
        </WouterLink>
        <WouterLink href="/authors">
          <Link active={location === "/authors"}>Autorzy</Link>
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
          <Paragraph>
            Gra przeglądarkowa inspirowana powieścią Bolesława Prusa
          </Paragraph>
          <Paragraph gutter>Zagraj teraz za darmo</Paragraph>
          <WouterLink href="/play">
            <Button as="a">Zacznij teraz</Button>
          </WouterLink>
        </Route>
        <Route path="/play">
          <Header small>Gra</Header>
          <Paragraph>Tutaj będzie gra</Paragraph>
        </Route>
        <Route path="/project">
          <Header small>Projekt</Header>
          <Paragraph>Tutaj będzie o projekcie</Paragraph>
        </Route>
        <Route path="/authors">
          <Header small>Autorzy</Header>
          <Paragraph>Tutaj będzie o autorach</Paragraph>
        </Route>
        <Route>
          <Paragraph>Nie znaleziono strony</Paragraph>
          <Paragraph>Upewnij się, czy podałeś właściwy adres URL</Paragraph>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
