import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "OverlongArrayOrStringStrictModeError";

export const { OverlongArrayOrStringStrictModeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArrayOrStringStrictModeError) => (
      // TODO
      <Code>{data.lengthAsBN.toString()}</Code>
    )
  )
};
