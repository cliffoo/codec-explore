import type { CalldataDecoding } from "@truffle/codec";
import { Calldata } from "./calldata.component";
import { inspectCalldataDecoding } from "../utils";
import styles from "./card.module.scss";

export interface CardProps {
  label: string;
  data: CalldataDecoding;
}

export function Card({ label, data }: CardProps): JSX.Element {
  const inspected = inspectCalldataDecoding(data);

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{label}</h2>

      <div>
        <h3>util.inspect</h3>
        <pre>{inspected}</pre>
      </div>

      <div className={styles.codec}>
        <h3>codec-component</h3>
        <Calldata data={data} />
      </div>
    </div>
  );
}
