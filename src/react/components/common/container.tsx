/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useRef, useEffect, useLayoutEffect, Children } from "react";
import styles from "./container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  foldable?: boolean;
}
export function Container({
  children,
  prefix,
  suffix,
  foldable
}: ContainerProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrapThreshold, setWrapThreshold] = useState<number>();
  const [wrap, setWrap] = useState<boolean>();
  const [fold, setFold] = useState<boolean>();
  foldable &&= Children.count(children) > 0;

  useEffect(
    () =>
      void setTimeout(
        () => setWrapThreshold(contentRef.current!.scrollWidth),
        0
      ),
    [setWrapThreshold, fold]
  );

  useLayoutEffect(() => {
    if (!wrapThreshold) return;
    const observer = new ResizeObserver(([container]) =>
      setWrap(container.target.clientWidth < wrapThreshold)
    );
    observer.observe(contentRef.current!);
    return () => observer.disconnect();
  });

  const toggleFold = () => setFold(!fold);

  return (
    <div
      className={
        styles[`${wrapThreshold ? "responsive" : "flattened"}-container`]
      }
    >
      <div ref={contentRef} className={styles[`content${wrap ? "-wrap" : ""}`]}>
        <div className={styles["prefix"]}>
          {foldable && (
            <button onClick={toggleFold} className={styles["toggle"]}>
              {fold ? <>&#9656;</> : <>&#9662;</>}
            </button>
          )}
          {prefix}
        </div>
        <div className={`${styles["children"]} ${fold ? styles["hide"] : ""}`}>
          {children}
        </div>
        <button
          onClick={toggleFold}
          className={`${styles["toggle"]} ${fold ? "" : styles["hide"]}`}
        >
          &#8943;
        </button>
        <div className={styles["suffix"]}>{suffix}</div>
      </div>
    </div>
  );
}
