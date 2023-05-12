import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "OverlargePointersNotImplementedError";

export const { OverlargePointersNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlargePointersNotImplementedError) => (
      // TODO
      <span>{data.pointerAsBN.toString()}</span>
    )
  )
};
