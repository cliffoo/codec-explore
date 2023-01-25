import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintErrorResult } from "@/utils/type-guards/value-and-result/uint";
import { UintErrorResult } from "@/components/Format/Errors/interfaces/elementary/uint-error-result";
import { isIntErrorResult } from "@/utils/type-guards/value-and-result/int";
import { IntErrorResult } from "@/components/Format/Errors/interfaces/elementary/int-error-result";
import { isBoolErrorResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolErrorResult } from "@/components/Format/Errors/interfaces/elementary/bool-error-result";
import { isBytesErrorResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesErrorResult } from "@/components/Format/Errors/aliases/elementary/bytes-error-result";
import { isAddressErrorResult } from "@/utils/type-guards/value-and-result/address";
import { AddressErrorResult } from "@/components/Format/Errors/interfaces/elementary/address-error-result";
import { isFixedErrorResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/fixed-error-result";
import { isUfixedErrorResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/ufixed-error-result";
import { isStringErrorResult } from "@/utils/type-guards/value-and-result/string";
import { StringErrorResult } from "@/components/Format/Errors/interfaces/elementary/string-error-result";
import { isArrayErrorResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayErrorResult } from "@/components/Format/Errors/interfaces/container/array-error-result";
import { isFunctionExternalErrorResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalErrorResult } from "@/components/Format/Errors/interfaces/function/function-external-error-result";
import { TupleErrorResult } from "@/components/Format/Errors/interfaces/container/tuple-error-result";

export const AbiErrorResult = createPolymorphicComponent(
  (data: Format.Errors.AbiErrorResult) =>
    isUintErrorResult(data) ? (
      <UintErrorResult data={data} />
    ) : isIntErrorResult(data) ? (
      <IntErrorResult data={data} />
    ) : isBoolErrorResult(data) ? (
      <BoolErrorResult data={data} />
    ) : isBytesErrorResult(data) ? (
      <BytesErrorResult data={data} />
    ) : isAddressErrorResult(data) ? (
      <AddressErrorResult data={data} />
    ) : isFixedErrorResult(data) ? (
      <FixedErrorResult data={data} />
    ) : isUfixedErrorResult(data) ? (
      <UfixedErrorResult data={data} />
    ) : isStringErrorResult(data) ? (
      <StringErrorResult data={data} />
    ) : isArrayErrorResult(data) ? (
      <ArrayErrorResult data={data} />
    ) : isFunctionExternalErrorResult(data) ? (
      <FunctionExternalErrorResult data={data} />
    ) : (
      <TupleErrorResult data={data} />
    )
);
