import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { AddressPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/address-padding-error";

const displayName = "AddressError";

export const { AddressError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
  )
};
