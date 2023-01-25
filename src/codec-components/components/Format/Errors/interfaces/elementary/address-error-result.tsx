import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/components/Format/Errors/aliases/elementary/address-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const AddressErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.AddressErrorResult) =>
    isAddressError(error) ? (
      <AddressError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
