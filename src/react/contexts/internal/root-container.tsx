import { createContext, useContext } from "react";

export type RootContainerContextValue = boolean;
export const RootContainerContext =
  createContext<RootContainerContextValue>(true);
export const useRootContainer = () => useContext(RootContainerContext);

export interface DescendantContainerProviderProps {
  children: React.ReactNode;
}
export function DescendantContainerProvider({
  children
}: DescendantContainerProviderProps) {
  return (
    <RootContainerContext.Provider value={false}>
      {children}
    </RootContainerContext.Provider>
  );
}
