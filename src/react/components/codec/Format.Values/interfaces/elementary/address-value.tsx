import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { AddressValue } = createCodecComponent(
  "AddressValue",
  ({ value, type }: Format.Values.AddressValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="address" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.asAddress}
        {content?.suffix}
      </Code>
    );
  }
);
