/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export function Container(props: ContainerProps): JSX.Element {
  const [wrapThreshold, setWrapThreshold] = useState<number>();

  return wrapThreshold ? (
    <ResponsiveContainer {...props} wrapThreshold={wrapThreshold} />
  ) : (
    <FlattenedContainer {...props} setWrapThreshold={setWrapThreshold} />
  );
}

interface FlattenedContainerProps extends ContainerProps {
  setWrapThreshold: React.Dispatch<React.SetStateAction<number | undefined>>;
}
function FlattenedContainer({
  children,
  prefix,
  suffix,
  setWrapThreshold
}: FlattenedContainerProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => setWrapThreshold(contentRef.current!.scrollWidth),
    [setWrapThreshold]
  );

  return (
    <div className={styles["flattened-container"]}>
      <div ref={contentRef} className={styles["content"]}>
        <div className={styles["prefix"]}>{prefix}</div>
        <div className={styles["children"]}>{children}</div>
        <div className={styles["suffix"]}>{suffix}</div>
      </div>
    </div>
  );
}

interface ResponsiveContainerProps extends ContainerProps {
  wrapThreshold: number;
}
function ResponsiveContainer({
  children,
  prefix,
  suffix,
  wrapThreshold
}: ResponsiveContainerProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrap, setWrap] = useState<boolean>();

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([container]) =>
      setWrap(container.target.clientWidth < wrapThreshold)
    );
    observer.observe(contentRef.current!);
    return () => observer.disconnect();
  });

  return (
    <div className={styles["responsive-container"]}>
      <div ref={contentRef} className={styles[`content${wrap ? "-wrap" : ""}`]}>
        <div className={styles["prefix"]}>{prefix}</div>
        <div className={styles["children"]}>{children}</div>
        <div className={styles["suffix"]}>{suffix}</div>
      </div>
    </div>
  );
}
