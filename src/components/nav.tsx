import { Link as WouterLink, useLocation } from "wouter";
import { Navigation, Link } from "./styled";

function Nav() {
  const [location] = useLocation();

  return (
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
  );
}

export default Nav;
