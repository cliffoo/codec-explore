import styles from "./code.module.scss";
import { useCodecComponents } from "@/react/contexts/codec-components";

export type CodeProps = {
  children: React.ReactNode;
  type?:
    | "address"
    | "boolean"
    | "bytes"
    | "number"
    | "string"
    | "new-keyword"
    | "contract"
    | "function"
    | "event"
    | "event-keyword"
    | "error"
    | "revert-keyword"
    | "enum"
    | "bracket"
    | "name"
    | "colon"
    | "comma"
    | "period"
    | "default";
  bracketDepth?: number;
} & React.HTMLAttributes<HTMLSpanElement>;

export function Code({
  children,
  type,
  bracketDepth,
  ...props
}: CodeProps): JSX.Element {
  const { colors, classNamePrefix } = useCodecComponents();
  const color =
    type === "bracket"
      ? colors["bracket"][(bracketDepth || 0) % colors["bracket"].length] ||
        colors["default"]
      : colors[type || "default"];

  return (
    <span
      className={`${styles["code"]} ${classNamePrefix}-code`}
      style={{ color }}
      {...props}
    >
      {children}
    </span>
  );
}
