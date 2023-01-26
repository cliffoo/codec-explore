import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "OverlongArraysAndStringsNotImplementedError";

export const { OverlongArraysAndStringsNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) =>
      // TODO
      data.lengthAsBN.toString()
  )
};
