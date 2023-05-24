import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createCodecComponent(
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
