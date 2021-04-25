import { Fragment } from "react";
import { Header, Paragraph, List } from "../styled";

const authors = [
  "Fabuła - Maksymilian Mazela, Leon Wałach",
  "Kod - Łukasz Włodarczyk",
  "Grafika - Zuzanna Bielec, Julia Matoga",
  "Efekty dźwiękowe - Magdalena Sulima",
  "Ścieżka dźwiękowa - Mateusz Miliutin",
];

export function Authors() {
  return (
    <Fragment>
      <Header small gutter>
        Autorzy
      </Header>
      <List>
        {authors.map((author, index) => (
          <Paragraph key={index} small as="li">
            {author}
          </Paragraph>
        ))}
      </List>
    </Fragment>
  );
}
