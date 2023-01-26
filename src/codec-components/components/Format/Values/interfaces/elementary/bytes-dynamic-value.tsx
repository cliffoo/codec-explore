import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.BytesDynamicValue) => value.asHex
  )
};
