import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/components/Format/Errors/aliases/elementary/address-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "AddressErrorResult";

export const { AddressErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.AddressErrorResult) =>
      isAddressError(error) ? (
        <AddressError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
