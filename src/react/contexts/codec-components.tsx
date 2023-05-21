import type { ClassNamePrefixContextValue } from "@/react/contexts/internal/class-name-prefix";
import {
  ClassNamePrefixContext,
  useClassNamePrefix
} from "@/react/contexts/internal/class-name-prefix";
import type { ColorsContextValue } from "@/react/contexts/internal/colors";
import { ColorsContext, useColors } from "@/react/contexts/internal/colors";
import type { CustomComponentsContextValue } from "@/react/contexts/internal/custom-components";
import {
  CustomComponentsContext,
  useCustomComponents
} from "@/react/contexts/internal/custom-components";

export type CodecComponentsProviderProps = {
  children: React.ReactNode;
  classNamePrefix?: ClassNamePrefixContextValue;
  colors?: ColorsContextValue;
  components?: CustomComponentsContextValue;
};
export function CodecComponentsProvider({
  children,
  classNamePrefix,
  colors,
  components
}: CodecComponentsProviderProps): JSX.Element {
  const customComponents = useCustomComponents();
  return (
    <ClassNamePrefixContext.Provider
      value={classNamePrefix || useClassNamePrefix()}
    >
      <ColorsContext.Provider value={{ ...useColors(), ...colors }}>
        <CustomComponentsContext.Provider
          value={{
            codec: { ...customComponents.codec, ...components?.codec },
            common: { ...customComponents.common, ...components?.common }
          }}
        >
          {children}
        </CustomComponentsContext.Provider>
      </ColorsContext.Provider>
    </ClassNamePrefixContext.Provider>
  );
}
