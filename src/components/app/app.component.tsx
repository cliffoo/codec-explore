import { DecoderProvider } from "../decoder";

export function App(): JSX.Element {
  return (
    <DecoderProvider>
      <h1>Hi</h1>
    </DecoderProvider>
  );
}
