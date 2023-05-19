import { createContext, useContext } from "react";

export const RootContainerContext = createContext<boolean>(true);
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
