import React from "react";

export function createPolymorphicComponent<D>(
  displayName: string,
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
    return component
      ? React.createElement(component, { ...props, data })
      : createDefaultElement(data);
  }

  Object.defineProperty(PolymorphicComponent, "displayName", {
    value: `@truffle/codec-components/${displayName}`
  });

  return PolymorphicComponent;
}