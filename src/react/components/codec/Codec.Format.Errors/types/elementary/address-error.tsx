import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { AddressPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/address-padding-error";

const displayName = "AddressError";

export const { AddressError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
  )
};
