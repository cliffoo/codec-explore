import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "UserDefinedTypeNotFoundError";

export const { UserDefinedTypeNotFoundError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UserDefinedTypeNotFoundError) => (
      <Code>{data.kind}</Code>
    )
  )
};
