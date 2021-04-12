import { Fragment } from "react";
import { Paragraph } from "./styled";

export function NotFound() {
  return (
    <Fragment>
      <Paragraph>Nie znaleziono strony</Paragraph>
      <Paragraph>Upewnij się, czy podałeś właściwy adres URL</Paragraph>
    </Fragment>
  );
}
