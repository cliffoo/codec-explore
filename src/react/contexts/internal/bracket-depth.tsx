import { createContext, useContext } from "react";

export const BracketDepthContext = createContext<number>(0);
export const useBracketDepth = () => useContext(BracketDepthContext);

export interface BracketDepthProviderProps {
  children: React.ReactNode;
}
export function BracketDepthProvider({
  children
}: BracketDepthProviderProps): JSX.Element {
  return (
    <BracketDepthContext.Provider value={useBracketDepth() + 1}>
      {children}
    </BracketDepthContext.Provider>
  );
}
