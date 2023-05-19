import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "StringValueInfoMalformed";

export const { StringValueInfoMalformed } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoMalformed) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="bytes" title={`type: string (${data.kind})`}>
          {prefix?.prefix}
          {data.asHex}
          {content?.suffix}
        </Code>
      );
    }
  )
};
