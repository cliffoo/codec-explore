import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const OverlargePointersNotImplementedError = createPolymorphicComponent(
  (data: Format.Errors.OverlargePointersNotImplementedError) =>
    // TODO
    data.pointerAsBN.toString()
);
