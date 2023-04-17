import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "OverlongArraysAndStringsNotImplementedError";

export const { OverlongArraysAndStringsNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) => (
      // TODO
      <Code>{data.lengthAsBN.toString()}</Code>
    )
  )
};
