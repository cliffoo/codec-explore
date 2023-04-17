import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "ContractPaddingError";

export const { ContractPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ContractPaddingError) => <Code>{data.raw}</Code>
  )
};
