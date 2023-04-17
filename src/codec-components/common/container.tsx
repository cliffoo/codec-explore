import { useRef, useState, useEffect, useLayoutEffect } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  indentOnWrap?: boolean;
}

/**
 * TODO: Implement open / collapse content.
 *
 * The initial state is determined by children length and nest depth.
 * Nest depth should be passed via React.Children.
 * If children length > 0 and nest level > 0 (root), collapse, otherwise open.
 * When collapsed, only give button to open if children length > 0.
 */

export function Container({
  children,
  prefix,
  suffix,
  indentOnWrap = true
}: ContainerProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [wrap, setWrap] = useState<boolean>();
  const [wrapThreshold, setWrapThreshold] = useState<number>();

  useEffect(() => setWrapThreshold(contentRef.current!.clientWidth), []);

  useLayoutEffect(() => {
    if (wrapThreshold && containerRef.current) {
      const observer = new ResizeObserver(([container]) =>
        setWrap(container.target.clientWidth < wrapThreshold)
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  });

  const ready = typeof wrap === "boolean";
  const containerClassName = styles[`container${ready ? "" : "-hide"}`];
  const contentClassName =
    styles[
      `content${
        wrap && indentOnWrap ? "-wrap-with-indent" : wrap ? "-wrap" : ""
      }`
    ];

  return (
    <div ref={containerRef} className={containerClassName}>
      <div ref={contentRef} className={contentClassName}>
        <div>{prefix}</div>
        {children}
        <div>{suffix}</div>
      </div>
    </div>
  );
}
