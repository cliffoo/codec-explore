import { useId } from "react";
import styles from "./code-tooltip.module.scss";

interface CodeTooltipProps {
  data: string;
  dataOnHover: string;
}

export function CodeTooltip({
  data,
  dataOnHover
}: CodeTooltipProps): JSX.Element {
  const id = `tooltip-${useId()}`;

  return (
    <span className={styles["wrapper"]}>
      <code aria-describedby={id}>{data}</code>
      <code id={id} className={styles["data-on-hover"]}>
        {dataOnHover}
      </code>
    </span>
  );
}
