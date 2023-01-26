import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isAddressValue } from "@/utils/type-guards/value-and-result/address";
import { AddressValue } from "@/components/Format/Values/interfaces/elementary/address-value";
import { AddressErrorResult } from "@/components/Format/Errors/interfaces/elementary/address-error-result";

const displayName = "AddressResult";

export const { AddressResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.AddressResult) =>
      isAddressValue(data) ? (
        <AddressValue data={data} />
      ) : (
        <AddressErrorResult data={data} />
      )
  )
};
