import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoValid) => (
      <Code type="string" title="type: string">
        "{data.asString}"{useInternal().content?.suffix}
      </Code>
    )
  )
};
