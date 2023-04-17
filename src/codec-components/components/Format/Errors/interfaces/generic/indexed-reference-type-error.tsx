import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "IndexedReferenceTypeError";

export const { IndexedReferenceTypeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.IndexedReferenceTypeError) => <Code>{data.raw}</Code>
  )
};
