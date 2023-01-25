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
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/components/Format/Values/interfaces/elementary/fixed-value";
import { isUfixedValue } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedValue } from "@/components/Format/Values/interfaces/elementary/ufixed-value";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/components/Format/Values/interfaces/elementary/string-value";
import { isArrayValue } from "@/utils/type-guards/value-and-result/array";
import { ArrayValue } from "@/components/Format/Values/interfaces/container/array-value";
import { isFunctionExternalValue } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalValue } from "@/components/Format/Values/interfaces/function/function-external-value";
import { TupleValue } from "@/components/Format/Values/interfaces/container/tuple-value";

export const AbiValue = createPolymorphicComponent(
  (data: Format.Values.AbiValue) =>
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
    ) : isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : isUfixedValue(data) ? (
      <UfixedValue data={data} />
    ) : isStringValue(data) ? (
      <StringValue data={data} />
    ) : isArrayValue(data) ? (
      <ArrayValue data={data} />
    ) : isFunctionExternalValue(data) ? (
      <FunctionExternalValue data={data} />
    ) : (
      <TupleValue data={data} />
    )
);
