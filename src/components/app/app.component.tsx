import { useDecodings } from "../decoder";
import { Card } from "../card";
import styles from "./app.module.scss";

export function App(): JSX.Element {
  const decodings = useDecodings();

  const cards = Object.keys(decodings).map(label => (
    <Card key={label} label={label} data={decodings[label]} />
  ));

  return <div className={styles.container}>{cards}</div>;
}
