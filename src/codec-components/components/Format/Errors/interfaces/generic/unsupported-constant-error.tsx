import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UnsupportedConstantError";

export const { UnsupportedConstantError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnsupportedConstantError) => data.definition.name
  )
};
