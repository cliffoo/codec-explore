import type { CalldataDecoding } from "@truffle/codec";
import { Inspected } from "./inspected.component";
import styles from "./decoding.module.scss";

export interface DecodingProps {
  label: string;
  data: CalldataDecoding;
}

export function Decoding(props: DecodingProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{props.label}</h2>
      <Inspected {...props} />
    </div>
  );
}
