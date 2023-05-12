import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "StringValueInfoMalformed";

export const { StringValueInfoMalformed } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoMalformed) => (
      <Code type="bytes" title={`type: string (${data.kind})`}>
        {data.asHex}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};
