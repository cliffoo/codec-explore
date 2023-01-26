import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.BytesStaticValue) => value.asHex
  )
};
