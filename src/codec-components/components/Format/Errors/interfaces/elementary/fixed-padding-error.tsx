import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FixedPaddingError";

export const { FixedPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FixedPaddingError) => <Code>{data.raw}</Code>
  )
};
