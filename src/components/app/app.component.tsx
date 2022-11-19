import { useDecodings } from "../decoder";
import { Decoding } from "../decoding";
import styles from "./app.module.scss";

export function App(): JSX.Element {
  const decodings = useDecodings();

  const decodingComponents = Object.keys(decodings).map(label => (
    <Decoding key={label} label={label} data={decodings[label]} />
  ));

  return <div className={styles.container}>{decodingComponents}</div>;
}
