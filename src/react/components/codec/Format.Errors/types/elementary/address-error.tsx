import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { AddressPaddingError } from "@/react/components/codec/Format.Errors/interfaces/elementary/address-padding-error";

export const { AddressError } = createCodecComponent(
  "AddressError",
  (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
);
