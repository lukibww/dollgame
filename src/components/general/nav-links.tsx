import { Fragment } from "react";
import { useLocation, Link as WouterLink } from "wouter";
import { Link } from "../styled";

export function NavLinks() {
  const [location] = useLocation();

  return (
    <Fragment>
      <WouterLink href="/">
        <Link active={location === "/"}>Strona Główna</Link>
      </WouterLink>
      <WouterLink href="/game">
        <Link active={location.startsWith("/game")}>Gra</Link>
      </WouterLink>
      <WouterLink href="/project">
        <Link active={location.startsWith("/project")}>Projekt</Link>
      </WouterLink>
      <WouterLink href="/authors">
        <Link active={location.startsWith("/authors")}>Autorzy</Link>
      </WouterLink>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/lukibw/dollgame"
      >
        Github
      </Link>
    </Fragment>
  );
}
