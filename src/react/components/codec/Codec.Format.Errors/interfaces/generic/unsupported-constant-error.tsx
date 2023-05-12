import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "UnsupportedConstantError";

export const { UnsupportedConstantError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnsupportedConstantError) => (
      <span>{data.definition.name}</span>
    )
  )
};
