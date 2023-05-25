import React from "react";
import type {
  CustomComponent,
  CustomComponentsContextValue
} from "@/react/contexts/internal/custom-components";
import { useCustomComponents } from "@/react/contexts/internal/custom-components";

type CustomComponentProps<C> = C extends CustomComponent<infer P> ? P : never;

export function createCommonComponent<
  N extends keyof NonNullable<CustomComponentsContextValue["common"]>,
  P extends CustomComponentProps<
    NonNullable<CustomComponentsContextValue["common"]>[N]
  >
>(name: N, createDefaultElement: (props: P) => JSX.Element) {
  function CommonComponent(props: P): JSX.Element {
    const customComponents = useCustomComponents();
    const customComponent = customComponents.common?.[name];

    return customComponent
      ? React.createElement(customComponent, props)
      : createDefaultElement(props);
  }
  return {
    [name]: CommonComponent
  } as {
    [name in N]: typeof CommonComponent;
  };
}