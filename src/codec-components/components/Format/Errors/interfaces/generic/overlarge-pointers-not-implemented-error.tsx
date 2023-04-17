import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "OverlargePointersNotImplementedError";

export const { OverlargePointersNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlargePointersNotImplementedError) => (
      // TODO
      <Code>{data.pointerAsBN.toString()}</Code>
    )
  )
};
