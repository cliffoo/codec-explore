import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const EnumOutOfRangeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumOutOfRangeError) => data.rawAsBN.toString()
);
