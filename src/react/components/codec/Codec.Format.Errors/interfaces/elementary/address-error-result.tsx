import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/address-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

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
