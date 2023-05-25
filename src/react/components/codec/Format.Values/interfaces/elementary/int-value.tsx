import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { IntValue } = createCodecComponent(
  "IntValue",
  ({ value, type }: Format.Values.IntValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.asBN.toString()}
        {content?.suffix}
      </Code>
    );
  }
);
