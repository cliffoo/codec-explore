import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { BytesStaticValue } = createCodecComponent(
  "BytesStaticValue",
  ({ value, type }: Format.Values.BytesStaticValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="bytes" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.asHex}
        {content?.suffix}
      </Code>
    );
  }
);
