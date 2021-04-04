import { Fragment } from "react";
import { Paragraph } from "../styled";

function DefaultPage() {
  return (
    <Fragment>
      <Paragraph>Nie znaleziono strony</Paragraph>
      <Paragraph>Upewnij się, czy podałeś właściwy adres URL</Paragraph>
    </Fragment>
  );
}

export default DefaultPage;
