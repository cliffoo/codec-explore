import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "OverlongArraysAndStringsNotImplementedError";

export const { OverlongArraysAndStringsNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) => (
      // TODO
      <span>{data.lengthAsBN.toString()}</span>
    )
  )
};
