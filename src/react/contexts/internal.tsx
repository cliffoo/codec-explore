import { createContext, useContext } from "react";

export interface InternalContextValue {
  content?: { suffix?: React.ReactNode };
  suffix?: { suffix?: React.ReactNode };
  bracketDepth: number;
}
export const InternalContext = createContext<InternalContextValue>({
  bracketDepth: 0
});
export const useInternal = () => useContext(InternalContext);

export interface InternalProviderProps {
  children: React.ReactNode;
  value: Partial<InternalContextValue>;
}
export function InternalProvider({
  children,
  value
}: InternalProviderProps): JSX.Element {
  return (
    <InternalContext.Provider
      value={{ ...value, bracketDepth: value.bracketDepth || 0 }}
    >
      {children}
    </InternalContext.Provider>
  );
}
