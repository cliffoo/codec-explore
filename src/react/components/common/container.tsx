import { useRef, useState, useLayoutEffect } from "react";
import {
  useContainerDepth,
  ContainerDepthProvider
} from "@/react/contexts/internal/container-depth";
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
  const { initialFold, root } = useContainerDepth();
  const [fold, setFold] = useState(initialFold);
  const toggleFold = () => setFold(!fold);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    if (!triangleButtonWidth)
      setTriangleButtonWidth(triangleButtonRef.current?.clientWidth);
  });

  const containerClassName =
    styles["container"] + ` ${fold || empty ? "" : styles["container-wrap"]}`;
  const childrenClassName =
    styles["children"] + ` ${fold ? styles["hide"] : ""}`;
  const ellipsisButtonClassName =
    styles["toggle"] + ` ${fold ? "" : styles["hide"]}`;

  return (
    <ContainerDepthProvider>
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
    </ContainerDepthProvider>
  );
}
