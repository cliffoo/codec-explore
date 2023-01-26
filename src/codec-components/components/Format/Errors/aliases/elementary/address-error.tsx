import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { AddressPaddingError } from "@/components/Format/Errors/interfaces/elementary/address-padding-error";

const displayName = "AddressError";

export const { AddressError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
  )
};
