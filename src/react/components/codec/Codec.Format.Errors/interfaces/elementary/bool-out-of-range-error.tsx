import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "BoolOutOfRangeError";

export const { BoolOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolOutOfRangeError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
