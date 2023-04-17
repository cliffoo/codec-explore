import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "StorageNotSuppliedError";

export const { StorageNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.StorageNotSuppliedError) => (
      <Code>{data.slot.toString()}</Code>
    )
  )
};
