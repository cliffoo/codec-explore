import React from "react";
import type {
  CustomComponent,
  CustomComponentsContextValue
} from "@/react/contexts/internal/custom-components";
import { useCustomComponents } from "@/react/contexts/internal/custom-components";

export function createCodecComponent<D>(
  displayName: keyof NonNullable<CustomComponentsContextValue["codec"]>,
  createDefaultElement: (data: D) => JSX.Element
) {
  interface BaseProps {
    data: D;
  }
  interface PropsWithComponent<C> extends BaseProps {
    component: C;
  }
  interface PropsWithoutComponent extends BaseProps {
    component?: never;
  }
  type Props<C> = C extends React.ElementType
    ? PropsWithComponent<C> &
        Omit<React.ComponentProps<C>, keyof PropsWithComponent<C>>
    : PropsWithoutComponent;

  function PolymorphicComponent<C>({
    data,
    component,
    ...props
  }: Props<C>): JSX.Element {
    const customComponents = useCustomComponents();
    const customComponent = customComponents.codec?.[displayName] as
      | CustomComponent<D>
      | undefined;

    return component
      ? React.createElement(component, { ...props, data })
      : customComponent
      ? React.createElement(customComponent, { data })
      : createDefaultElement(data);
  }

  Object.defineProperty(PolymorphicComponent, "displayName", {
    value: `@truffle/codec-components/${displayName}`
  });

  return PolymorphicComponent;
}
