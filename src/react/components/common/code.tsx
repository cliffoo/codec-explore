import React from "react";
import { createCommonComponent } from "../../utils/create-common-component";
import { useBracketDepth } from "../../contexts/bracket-depth";
import { useClassNamePrefix } from "../../contexts/class-name-prefix";
import { useColors } from "../../contexts/colors";
import styles from "./code.module.scss";

export type CodeProps = {
  children: React.ReactNode;
  type?:
    | "address"
    | "boolean"
    | "bytes"
    | "number"
    | "string"
    | "enum"
    | "struct"
    | "new-keyword"
    | "contract"
    | "function"
    | "event"
    | "event-keyword"
    | "error"
    | "revert-keyword"
    | "bracket"
    | "name"
    | "colon"
    | "comma"
    | "period"
    | "default";
} & React.HTMLAttributes<HTMLSpanElement>;

export const { Code } = createCommonComponent(
  "Code",
  ({ children, type, ...props }) => {
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
);
