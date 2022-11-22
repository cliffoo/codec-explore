import { App } from "./app.component";
import { DecoderProvider } from "../decoder";

export function WrappedApp(): JSX.Element {
  if (!window.ethereum) {
    return <h1>No wallet</h1>;
  }

  return (
    <DecoderProvider>
      <App />
    </DecoderProvider>
  );
}
