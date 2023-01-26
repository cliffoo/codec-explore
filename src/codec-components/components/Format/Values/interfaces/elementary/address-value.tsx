import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "AddressValue";

export const { AddressValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.AddressValue) => value.asAddress
  )
};
