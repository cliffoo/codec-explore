import type { CalldataDecoding } from "@truffle/codec";
import { Inspected } from "../decoding-inspected";
import { Codec } from "../codec";
import styles from "./decoding.module.scss";

export interface DecodingProps {
  label: string;
  data: CalldataDecoding;
}

export function Decoding({ label, data }: DecodingProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{label}</h2>
      <Inspected data={data} />
      <Codec data={data} />
    </div>
  );
}
