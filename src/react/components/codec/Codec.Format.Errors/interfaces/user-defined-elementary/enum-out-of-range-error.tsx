import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "EnumOutOfRangeError";

export const { EnumOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumOutOfRangeError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
