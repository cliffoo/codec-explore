import type { Format } from "@truffle/codec";
import { typeString } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value, type }: Format.Values.BytesDynamicValue) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="bytes" title={`type: ${typeString(type)}`}>
          {prefix?.prefix}
          {value.asHex}
          {content?.suffix}
        </Code>
      );
    }
  )
};
