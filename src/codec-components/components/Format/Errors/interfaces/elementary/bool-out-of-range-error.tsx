import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BoolOutOfRangeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BoolOutOfRangeError) => data.rawAsBN.toString()
);
