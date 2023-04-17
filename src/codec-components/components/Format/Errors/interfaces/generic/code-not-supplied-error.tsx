import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "CodeNotSuppliedError";

export const { CodeNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.CodeNotSuppliedError) => <Code>{data.address}</Code>
  )
};
