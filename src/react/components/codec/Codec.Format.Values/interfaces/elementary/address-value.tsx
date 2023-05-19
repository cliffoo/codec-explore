import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "AddressValue";

export const { AddressValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
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
  )
};
