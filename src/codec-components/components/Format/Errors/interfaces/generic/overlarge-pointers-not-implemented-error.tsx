import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "OverlargePointersNotImplementedError";

export const { OverlargePointersNotImplementedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlargePointersNotImplementedError) =>
      // TODO
      data.pointerAsBN.toString()
  )
};
