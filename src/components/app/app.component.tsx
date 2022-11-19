import { useDecodings } from "../decoder";
import { Decoding } from "../decoding";

export function App(): JSX.Element {
  const decodings = useDecodings();

  const decodingComponents = Object.keys(decodings).map(label => (
    <Decoding key={label} data={decodings[label]} />
  ));

  return <div>{decodingComponents}</div>;
}
