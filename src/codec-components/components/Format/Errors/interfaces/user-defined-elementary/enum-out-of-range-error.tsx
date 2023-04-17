import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "EnumOutOfRangeError";

export const { EnumOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumOutOfRangeError) => (
      <Code>{data.rawAsBN.toString()}</Code>
    )
  )
};
