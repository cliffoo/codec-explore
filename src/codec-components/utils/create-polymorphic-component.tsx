import React from "react";

export function createPolymorphicComponent<D>(
  createChildren: (data: D) => JSX.Element | string,
  defaultComponent: React.ElementType = React.Fragment
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

  return function <C>({ data, component, ...props }: Props<C>): JSX.Element {
    return component
      ? React.createElement(component, { ...props, data })
      : React.createElement(defaultComponent, undefined, createChildren(data));
  };
}
