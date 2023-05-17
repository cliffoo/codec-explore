/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Container({
  children,
  prefix,
  suffix
}: ContainerProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrapThreshold, setWrapThreshold] = useState<number>();
  const [wrap, setWrap] = useState<boolean>();

  useEffect(
    () => setWrapThreshold(contentRef.current!.scrollWidth),
    [setWrapThreshold]
  );

  useLayoutEffect(() => {
    if (!wrapThreshold) return;
    const observer = new ResizeObserver(([container]) =>
      setWrap(container.target.clientWidth < wrapThreshold)
    );
    observer.observe(contentRef.current!);
    return () => observer.disconnect();
  });

  return (
    <div
      className={
        styles[`${wrapThreshold ? "responsive" : "flattened"}-container`]
      }
    >
      <div ref={contentRef} className={styles[`content${wrap ? "-wrap" : ""}`]}>
        <div className={styles["prefix"]}>{prefix}</div>
        <div className={styles["children"]}>{children}</div>
        <div className={styles["suffix"]}>{suffix}</div>
      </div>
    </div>
  );
}
