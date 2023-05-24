import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value, type }: Format.Values.BoolValue) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="boolean" title={`type: ${typeStringWithoutLocation(type)}`}>
          {prefix?.prefix}
          {value.asBoolean.toString()}
          {content?.suffix}
        </Code>
      );
    }
  )
};
