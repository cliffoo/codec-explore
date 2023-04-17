import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "BytesPaddingError";

export const { BytesPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesPaddingError) => <Code>{data.raw}</Code>
  )
};
