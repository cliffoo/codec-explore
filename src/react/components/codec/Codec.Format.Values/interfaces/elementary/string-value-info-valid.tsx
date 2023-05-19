import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoValid) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="string" title="type: string">
          {prefix?.prefix}"{data.asString}"{content?.suffix}
        </Code>
      );
    }
  )
};
