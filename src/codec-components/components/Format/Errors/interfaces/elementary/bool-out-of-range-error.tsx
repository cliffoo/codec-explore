import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "BoolOutOfRangeError";

export const { BoolOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolOutOfRangeError) => (
      <Code>{data.rawAsBN.toString()}</Code>
    )
  )
};
