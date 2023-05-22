import type { ClassNamePrefixContextValue } from "@/react/contexts/internal/class-name-prefix";
import {
  ClassNamePrefixContext,
  useClassNamePrefix
} from "@/react/contexts/internal/class-name-prefix";
import type { ColorsContextValue } from "@/react/contexts/internal/colors";
import { ColorsContext, useColors } from "@/react/contexts/internal/colors";
import type { ContainerDepthContextValue } from "@/react/contexts/internal/container-depth";
import {
  ContainerDepthContext,
  useContainerDepth
} from "@/react/contexts/internal/container-depth";
import type { CustomComponentsContextValue } from "@/react/contexts/internal/custom-components";
import {
  CustomComponentsContext,
  useCustomComponents
} from "@/react/contexts/internal/custom-components";

export type CodecComponentsProviderProps = {
  children: React.ReactNode;
  classNamePrefix?: ClassNamePrefixContextValue;
  colors?: ColorsContextValue;
  initialFoldDepth?: ContainerDepthContextValue["initialFoldDepth"];
  components?: CustomComponentsContextValue;
};
export function CodecComponentsProvider(
  props: CodecComponentsProviderProps
): JSX.Element {
  const classNamePrefix = useClassNamePrefix();
  const containerDepth = useContainerDepth();
  const customComponents = useCustomComponents();
  return (
    <ClassNamePrefixContext.Provider
      value={props.classNamePrefix || classNamePrefix}
    >
      <ColorsContext.Provider value={{ ...useColors(), ...props.colors }}>
        <ContainerDepthContext.Provider
          value={{
            current: containerDepth.current,
            initialFoldDepth:
              props.initialFoldDepth || containerDepth.initialFoldDepth
          }}
        >
          <CustomComponentsContext.Provider
            value={{
              codec: {
                ...customComponents.codec,
                ...props.components?.codec
              },
              common: {
                ...customComponents.common,
                ...props.components?.common
              }
            }}
          >
            {props.children}
          </CustomComponentsContext.Provider>
        </ContainerDepthContext.Provider>
      </ColorsContext.Provider>
    </ClassNamePrefixContext.Provider>
  );
}
