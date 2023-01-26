import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintValue } from "@/utils/type-guards/value-and-result/uint";
import { UintValue } from "@/components/Format/Values/interfaces/elementary/uint-value";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/components/Format/Values/interfaces/elementary/int-value";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/components/Format/Values/interfaces/elementary/bool-value";
import { isBytesValue } from "@/utils/type-guards/value-and-result/bytes";
import { BytesValue } from "@/components/Format/Values/aliases/elementary/bytes-value";
import { isAddressValue } from "@/utils/type-guards/value-and-result/address";
import { AddressValue } from "@/components/Format/Values/interfaces/elementary/address-value";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/components/Format/Values/interfaces/elementary/string-value";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/components/Format/Values/interfaces/elementary/fixed-value";
import { isUfixedValue } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedValue } from "@/components/Format/Values/interfaces/elementary/ufixed-value";
import { isEnumValue } from "@/utils/type-guards/value-and-result/enum";
import { EnumValue } from "@/components/Format/Values/interfaces/user-defined-elementary/enum-value";
import { isUserDefinedValueTypeValue } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeValue } from "@/components/Format/Values/interfaces/user-defined-elementary/user-defined-value-type-value";
import { ContractValue } from "@/components/Format/Values/interfaces/user-defined-elementary/contract-value";

const displayName = "ElementaryValue";

export const { ElementaryValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.ElementaryValue) =>
      isUintValue(data) ? (
        <UintValue data={data} />
      ) : isIntValue(data) ? (
        <IntValue data={data} />
      ) : isBoolValue(data) ? (
        <BoolValue data={data} />
      ) : isBytesValue(data) ? (
        <BytesValue data={data} />
      ) : isAddressValue(data) ? (
        <AddressValue data={data} />
      ) : isStringValue(data) ? (
        <StringValue data={data} />
      ) : isFixedValue(data) ? (
        <FixedValue data={data} />
      ) : isUfixedValue(data) ? (
        <UfixedValue data={data} />
      ) : isEnumValue(data) ? (
        <EnumValue data={data} />
      ) : isUserDefinedValueTypeValue(data) ? (
        <UserDefinedValueTypeValue data={data} />
      ) : (
        <ContractValue data={data} />
      )
  )
};
