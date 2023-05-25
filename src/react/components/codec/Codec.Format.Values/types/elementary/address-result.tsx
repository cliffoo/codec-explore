import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isAddressValue } from "@/utils/type-guards/value-and-result/address";
import { AddressValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/address-value";
import { AddressErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/address-error-result";

export const { AddressResult } = createCodecComponent(
  "AddressResult",
  (data: Format.Values.AddressResult) =>
    isAddressValue(data) ? (
      <AddressValue data={data} />
    ) : (
      <AddressErrorResult data={data} />
    )
);
