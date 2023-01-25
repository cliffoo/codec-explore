import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { AddressPaddingError } from "@/components/Format/Errors/interfaces/elementary/address-padding-error";

export const AddressError = createPolymorphicComponent(
  (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
);
