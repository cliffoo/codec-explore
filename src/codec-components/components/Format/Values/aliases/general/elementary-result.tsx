import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintResult } from "@/utils/type-guards/value-and-result/uint";
import { UintResult } from "@/components/Format/Values/aliases/elementary/uint-result";
import { isIntResult } from "@/utils/type-guards/value-and-result/int";
import { IntResult } from "@/components/Format/Values/aliases/elementary/int-result";
import { isBoolResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolResult } from "@/components/Format/Values/aliases/elementary/bool-result";
import { isBytesResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesResult } from "@/components/Format/Values/aliases/elementary/bytes-result";
import { isAddressResult } from "@/utils/type-guards/value-and-result/address";
import { AddressResult } from "@/components/Format/Values/aliases/elementary/address-result";
import { isStringResult } from "@/utils/type-guards/value-and-result/string";
import { StringResult } from "@/components/Format/Values/aliases/elementary/string-result";
import { isFixedResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedResult } from "@/components/Format/Values/aliases/elementary/fixed-result";
import { isUfixedResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedResult } from "@/components/Format/Values/aliases/elementary/ufixed-result";
import { isEnumResult } from "@/utils/type-guards/value-and-result/enum";
import { EnumResult } from "@/components/Format/Values/aliases/user-defined-elementary/enum-result";
import { isUserDefinedValueTypeResult } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeResult } from "@/components/Format/Values/aliases/user-defined-elementary/user-defined-value-type-result";
import { ContractResult } from "@/components/Format/Values/aliases/user-defined-elementary/contract-result";

export const ElementaryResult = createPolymorphicComponent(
  (data: Format.Values.ElementaryResult) =>
    isUintResult(data) ? (
      <UintResult data={data} />
    ) : isIntResult(data) ? (
      <IntResult data={data} />
    ) : isBoolResult(data) ? (
      <BoolResult data={data} />
    ) : isBytesResult(data) ? (
      <BytesResult data={data} />
    ) : isAddressResult(data) ? (
      <AddressResult data={data} />
    ) : isStringResult(data) ? (
      <StringResult data={data} />
    ) : isFixedResult(data) ? (
      <FixedResult data={data} />
    ) : isUfixedResult(data) ? (
      <UfixedResult data={data} />
    ) : isEnumResult(data) ? (
      <EnumResult data={data} />
    ) : isUserDefinedValueTypeResult(data) ? (
      <UserDefinedValueTypeResult data={data} />
    ) : (
      <ContractResult data={data} />
    )
);
