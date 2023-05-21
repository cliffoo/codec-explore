import { useRef, useState, useLayoutEffect } from "react";
import {
  RootContainerContext,
  useRootContainer
} from "@/react/contexts/internal/root-container";
import styles from "./container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  empty: boolean;
}
export function Container({
  children,
  prefix,
  suffix,
  empty
}: ContainerProps): JSX.Element {
  const triangleButtonRef = useRef<HTMLButtonElement>(null);
  const [triangleButtonWidth, setTriangleButtonWidth] = useState<number>();
  const root = useRootContainer();
  const [fold, setFold] = useState<boolean>();
  const toggleFold = () => setFold(!fold);

  useLayoutEffect(
    () => setTriangleButtonWidth(triangleButtonRef.current?.clientWidth),
    []
  );

  const containerClassName =
    styles["container"] + ` ${fold || empty ? "" : styles["container-wrap"]}`;
  const childrenClassName =
    styles["children"] + ` ${fold ? styles["hide"] : ""}`;
  const ellipsisButtonClassName =
    styles["toggle"] + ` ${fold ? "" : styles["hide"]}`;

  return (
    <RootContainerContext.Provider value={false}>
      <div
        className={containerClassName}
        style={{ marginLeft: root ? triangleButtonWidth : undefined }}
      >
        <div className={styles["prefix"]}>
          {!empty && (
            <button
              ref={triangleButtonRef}
              onClick={toggleFold}
              className={styles["toggle"]}
              style={{ marginLeft: -(triangleButtonWidth || 0) }}
            >
              {fold ? <>&#9656;</> : <>&#9662;</>}
            </button>
          )}
          {prefix}
        </div>
        <div className={childrenClassName}>{children}</div>
        <button onClick={toggleFold} className={ellipsisButtonClassName}>
          &#8943;
        </button>
        <div className={styles["suffix"]}>{suffix}</div>
      </div>
    </RootContainerContext.Provider>
  );
}
