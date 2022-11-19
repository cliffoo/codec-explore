import { App } from "./app.component";

export function WrappedApp(): JSX.Element {
  if (!window.ethereum) {
    return <h1>No wallet</h1>;
  }

  return <App />;
}
