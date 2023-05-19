import { createContext, useContext } from "react";

export interface InjectedNodeContextValue {
  prefix?: { prefix?: React.ReactNode };
  content?: { suffix?: React.ReactNode };
  suffix?: { suffix?: React.ReactNode };
}
export const InjectedNodeContext = createContext<InjectedNodeContextValue>({});
export const useInjectedNode = () => useContext(InjectedNodeContext);

export interface InjectedNodeProviderBaseProps {
  children: React.ReactNode;
  value?: InjectedNodeContextValue;
  reset?: boolean;
}
export type InjectedNodeProviderProps =
  | (InjectedNodeProviderBaseProps & { value: InjectedNodeContextValue })
  | (InjectedNodeProviderBaseProps & { reset: boolean });
export function InjectedNodeProvider({
  children,
  value,
  reset
}: InjectedNodeProviderProps): JSX.Element {
  if (!value && !reset) return <>{children}</>;
  if (!value || reset) value = {};
  return (
    <InjectedNodeContext.Provider value={value}>
      {children}
    </InjectedNodeContext.Provider>
  );
}
