import React from "react";
import type {
  CustomCodecComponent,
  CustomComponentsContextValue
} from "@/react/contexts/internal/custom-components";
import { useCustomComponents } from "@/react/contexts/internal/custom-components";

export function createCodecComponent<
  Name extends keyof NonNullable<CustomComponentsContextValue["codec"]>,
  D
>(displayName: Name, createDefaultElement: (data: D) => JSX.Element) {
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
      | CustomCodecComponent<D>
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

  return {
    [displayName]: PolymorphicComponent
  } as {
    [name in Name]: typeof PolymorphicComponent;
  };
}
