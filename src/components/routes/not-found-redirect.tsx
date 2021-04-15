import { Redirect } from "wouter";

export function NotFoundRedirect() {
  return <Redirect replace href="/not-found" />;
}
