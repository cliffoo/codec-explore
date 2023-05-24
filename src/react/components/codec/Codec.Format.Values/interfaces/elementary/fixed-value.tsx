import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "FixedValue";

export const { FixedValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value, type }: Format.Values.FixedValue) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
          {prefix?.prefix}
          {value.asBig.toString()}
          {content?.suffix}
        </Code>
      );
    }
  )
};
