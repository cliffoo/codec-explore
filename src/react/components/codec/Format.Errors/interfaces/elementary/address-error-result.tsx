import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/react/components/codec/Format.Errors/types/elementary/address-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { AddressErrorResult } = createCodecComponent(
  "AddressErrorResult",
  ({ error }: Format.Errors.AddressErrorResult) =>
    isAddressError(error) ? (
      <AddressError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
