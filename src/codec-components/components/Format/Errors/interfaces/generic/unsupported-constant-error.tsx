import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UnsupportedConstantError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UnsupportedConstantError) => data.definition.name
);
