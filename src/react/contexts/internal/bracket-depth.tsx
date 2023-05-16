import { createContext, useContext } from "react";

export type BracketDepthContextValue = number;
export const BracketDepthContext = createContext<BracketDepthContextValue>(0);
export const useBracketDepth = () => useContext(BracketDepthContext);

export interface BracketDepthProviderBaseProps {
  children: React.ReactNode;
  value?: number;
  increment?: boolean;
}
export type BracketDepthProviderProps =
  | (BracketDepthProviderBaseProps & { value: number })
  | (BracketDepthProviderBaseProps & { increment: boolean });
export function BracketDepthProvider({
  children,
  value,
  increment
}: BracketDepthProviderProps): JSX.Element {
  if (!value && !increment) return <>{children}</>;
  if (!value) value = useBracketDepth() + 1;
  return (
    <BracketDepthContext.Provider value={value}>
      {children}
    </BracketDepthContext.Provider>
  );
}
