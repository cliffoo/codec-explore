import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "StringValueInfoMalformed";

export const { StringValueInfoMalformed } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoMalformed) => (
      <Code color="brown" title={`type: string (${data.kind})`}>
        {data.asHex}
      </Code>
    )
  )
};
