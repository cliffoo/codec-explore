import { useId, useRef, useEffect } from "react";
import styles from "./code-tooltip.module.scss";

interface CodeTooltipProps {
  data: string;
  dataOnHover: string;
}

const hideDelayMs = 150;

export function CodeTooltip({
  data,
  dataOnHover
}: CodeTooltipProps): JSX.Element {
  const id = `tooltip-${useId()}`;
  const dataElementRef = useRef<HTMLElement>(null);
  const dataOnHoverElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!dataElementRef.current || !dataOnHoverElementRef.current) return;
    const dataElement = dataElementRef.current;
    const dataOnHoverElement = dataOnHoverElementRef.current;

    let entered = false;
    const handleDataElementMouseEnter = () => {
      entered = true;
      dataOnHoverElement.classList.add(styles["show"]);
    };
    const handleDataOnHoverElementMouseEnter = () => {
      entered = true;
    };
    const handleMouseLeave = () => {
      entered = false;
      setTimeout(() => {
        if (!entered) dataOnHoverElement.classList.remove(styles["show"]);
      }, hideDelayMs);
    };
    dataElement.addEventListener("mouseenter", handleDataElementMouseEnter);
    dataOnHoverElement.addEventListener(
      "mouseenter",
      handleDataOnHoverElementMouseEnter
    );
    dataElement.addEventListener("mouseleave", handleMouseLeave);
    dataOnHoverElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dataElement.removeEventListener(
        "mouseenter",
        handleDataElementMouseEnter
      );
      dataOnHoverElement.removeEventListener(
        "mouseenter",
        handleDataOnHoverElementMouseEnter
      );
      dataElement.removeEventListener("mouseleave", handleMouseLeave);
      dataOnHoverElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <span className={styles["wrapper"]}>
      <code ref={dataElementRef} aria-describedby={id}>
        {data}
      </code>
      <code
        ref={dataOnHoverElementRef}
        id={id}
        className={styles["data-on-hover"]}
      >
        {dataOnHover}
      </code>
    </span>
  );
}
