import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const OverlongArrayOrStringStrictModeError = createPolymorphicComponent(
  (data: Format.Errors.OverlongArrayOrStringStrictModeError) =>
    // TODO
    data.lengthAsBN.toString()
);
