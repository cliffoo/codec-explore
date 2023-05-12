import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "OverlongArrayOrStringStrictModeError";

export const { OverlongArrayOrStringStrictModeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArrayOrStringStrictModeError) => (
      // TODO
      <span>{data.lengthAsBN.toString()}</span>
    )
  )
};
