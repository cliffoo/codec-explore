import { createContext, useContext } from "react";

export interface ContainerDepthContextValue {
  current: number;
  initialFoldDepth: number;
}
export const ContainerDepthContext = createContext<ContainerDepthContextValue>({
  current: 0,
  initialFoldDepth: 1
});
export const useContainerDepth = () => {
  const { current, initialFoldDepth } = useContext(ContainerDepthContext);
  return {
    current,
    initialFoldDepth,
    initialFold: initialFoldDepth > -1 && current >= initialFoldDepth,
    root: current === 0
  };
};

export interface ContainerDepthProviderProps {
  children: React.ReactNode;
}
export function ContainerDepthProvider({
  children
}: ContainerDepthProviderProps): JSX.Element {
  const newValue = useContainerDepth();
  newValue.current += 1;
  return (
    <ContainerDepthContext.Provider value={newValue}>
      {children}
    </ContainerDepthContext.Provider>
  );
}
