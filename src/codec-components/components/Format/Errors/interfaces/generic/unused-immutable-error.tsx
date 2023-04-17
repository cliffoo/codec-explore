import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "UnusedImmutableError";

export const { UnusedImmutableError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnusedImmutableError) => <Code>{data.kind}</Code>
  )
};
