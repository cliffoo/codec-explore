import styles from "./code.module.scss";
import { useBracketDepth } from "@/react/contexts/internal/bracket-depth";
import { useClassNamePrefix } from "@/react/contexts/internal/class-name-prefix";
import { useColors } from "@/react/contexts/internal/colors";

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
} & React.HTMLAttributes<HTMLSpanElement>;

export function Code({ children, type, ...props }: CodeProps): JSX.Element {
  type ||= "default";
  const bracketDepth = useBracketDepth();
  const classNamePrefix = useClassNamePrefix();
  const colors = useColors();
  const color =
    type === "bracket"
      ? colors["bracket"][(bracketDepth || 0) % colors["bracket"].length] ||
        colors["default"]
      : colors[type];

  return (
    <span
      className={
        styles["code"] +
        ` ${classNamePrefix}-code` +
        ` ${classNamePrefix}-code-${type}`
      }
      style={{ color }}
      {...props}
    >
      {children}
    </span>
  );
}
