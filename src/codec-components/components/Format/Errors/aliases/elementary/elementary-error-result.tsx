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
import { isStringErrorResult } from "@/utils/type-guards/value-and-result/string";
import { StringErrorResult } from "@/components/Format/Errors/interfaces/elementary/string-error-result";
import { isFixedErrorResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/fixed-error-result";
import { isUfixedErrorResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/ufixed-error-result";
import { isEnumErrorResult } from "@/utils/type-guards/value-and-result/enum";
import { EnumErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/enum-error-result";
import { isUserDefinedValueTypeErrorResult } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/user-defined-value-type-error-result";
import { ContractErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/contract-error-result";

const displayName = "ElementaryErrorResult";

export const { ElementaryErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ElementaryErrorResult) =>
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
      ) : isStringErrorResult(data) ? (
        <StringErrorResult data={data} />
      ) : isFixedErrorResult(data) ? (
        <FixedErrorResult data={data} />
      ) : isUfixedErrorResult(data) ? (
        <UfixedErrorResult data={data} />
      ) : isEnumErrorResult(data) ? (
        <EnumErrorResult data={data} />
      ) : isUserDefinedValueTypeErrorResult(data) ? (
        <UserDefinedValueTypeErrorResult data={data} />
      ) : (
        <ContractErrorResult data={data} />
      )
  )
};
