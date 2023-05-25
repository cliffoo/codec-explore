import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUintResult } from "@/utils/type-guards/value-and-result/uint";
import { UintResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/uint-result";
import { isIntResult } from "@/utils/type-guards/value-and-result/int";
import { IntResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/int-result";
import { isBoolResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bool-result";
import { isBytesResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bytes-result";
import { isAddressResult } from "@/utils/type-guards/value-and-result/address";
import { AddressResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/address-result";
import { isStringResult } from "@/utils/type-guards/value-and-result/string";
import { StringResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/string-result";
import { isFixedResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/fixed-result";
import { isUfixedResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/ufixed-result";
import { isEnumResult } from "@/utils/type-guards/value-and-result/enum";
import { EnumResult } from "@/react/components/codec/Codec.Format.Values/types/user-defined-elementary/enum-result";
import { isUserDefinedValueTypeResult } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeResult } from "@/react/components/codec/Codec.Format.Values/types/user-defined-elementary/user-defined-value-type-result";
import { ContractResult } from "@/react/components/codec/Codec.Format.Values/types/user-defined-elementary/contract-result";

export const { ElementaryResult } = createCodecComponent(
  "ElementaryResult",
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
