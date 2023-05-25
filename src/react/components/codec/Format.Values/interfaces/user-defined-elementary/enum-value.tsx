import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { EnumValue } = createCodecComponent(
  "EnumValue",
  ({ value, type }: Format.Values.EnumValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="enum" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.name}
        {content?.suffix}
      </Code>
    );
  }
);
