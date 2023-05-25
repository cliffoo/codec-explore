import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUintValue } from "@/utils/type-guards/value-and-result/uint";
import { UintValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/uint-value";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/int-value";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bool-value";
import { isBytesValue } from "@/utils/type-guards/value-and-result/bytes";
import { BytesValue } from "@/react/components/codec/Codec.Format.Values/types/elementary/bytes-value";
import { isAddressValue } from "@/utils/type-guards/value-and-result/address";
import { AddressValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/address-value";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/string-value";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/fixed-value";
import { isUfixedValue } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/ufixed-value";
import { isEnumValue } from "@/utils/type-guards/value-and-result/enum";
import { EnumValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/enum-value";
import { isUserDefinedValueTypeValue } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/user-defined-value-type-value";
import { ContractValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/contract-value";

export const { ElementaryValue } = createCodecComponent(
  "ElementaryValue",
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
);
