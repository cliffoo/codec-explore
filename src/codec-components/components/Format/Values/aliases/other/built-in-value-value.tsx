import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintValue } from "@/utils/type-guards/value-and-result/uint";
import { UintValue } from "@/components/Format/Values/interfaces/elementary/uint-value";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/components/Format/Values/interfaces/elementary/int-value";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/components/Format/Values/interfaces/elementary/bool-value";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/components/Format/Values/interfaces/elementary/bytes-static-value";
import { isAddressValue } from "@/utils/type-guards/value-and-result/address";
import { AddressValue } from "@/components/Format/Values/interfaces/elementary/address-value";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/components/Format/Values/interfaces/elementary/fixed-value";
import { UfixedValue } from "@/components/Format/Values/interfaces/elementary/ufixed-value";

const displayName = "BuiltInValueValue";

export const { BuiltInValueValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BuiltInValueValue) =>
      isUintValue(data) ? (
        <UintValue data={data} />
      ) : isIntValue(data) ? (
        <IntValue data={data} />
      ) : isBoolValue(data) ? (
        <BoolValue data={data} />
      ) : isBytesStaticValue(data) ? (
        <BytesStaticValue data={data} />
      ) : isAddressValue(data) ? (
        <AddressValue data={data} />
      ) : isFixedValue(data) ? (
        <FixedValue data={data} />
      ) : (
        <UfixedValue data={data} />
      )
  )
};
