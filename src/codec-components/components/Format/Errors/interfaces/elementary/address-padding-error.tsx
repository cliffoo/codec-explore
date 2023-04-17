import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "AddressPaddingError";

export const { AddressPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.AddressPaddingError) => <Code>{data.raw}</Code>
  )
};
