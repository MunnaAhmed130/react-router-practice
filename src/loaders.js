import { getVans } from "./api";

export function vanLoader() {
  return getVans();
}

export function vanDetailsLoader({ params }) {
  return getVans(params.id);
}
