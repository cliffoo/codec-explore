import type { CalldataDecoding } from "@truffle/codec";
import { inspectCalldataDecoding } from "../utils";
import { Codec } from "../codec";
import styles from "./card.module.scss";
import { Hi } from "codec-components";

export interface CardProps {
  label: string;
  data: CalldataDecoding;
}

export function Card({ label, data }: CardProps): JSX.Element {
  const inspected = inspectCalldataDecoding(data);

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{label}</h2>

      <Hi />
      <div>
        <h3>util.inspect</h3>
        <code>{inspected}</code>
      </div>

      <Codec data={data} />
    </div>
  );
}
