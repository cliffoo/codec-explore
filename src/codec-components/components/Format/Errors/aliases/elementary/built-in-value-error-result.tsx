import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintErrorResult } from "@/utils/type-guards/value-and-result/uint";
import { UintErrorResult } from "@/components/Format/Errors/interfaces/elementary/uint-error-result";
import { isIntErrorResult } from "@/utils/type-guards/value-and-result/int";
import { IntErrorResult } from "@/components/Format/Errors/interfaces/elementary/int-error-result";
import { isBoolErrorResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolErrorResult } from "@/components/Format/Errors/interfaces/elementary/bool-error-result";
import { isBytesStaticErrorResult } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-static-error-result";
import { isAddressErrorResult } from "@/utils/type-guards/value-and-result/address";
import { AddressErrorResult } from "@/components/Format/Errors/interfaces/elementary/address-error-result";
import { isFixedErrorResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/fixed-error-result";
import { UfixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/ufixed-error-result";

const displayName = "BuiltInValueErrorResult";

export const { BuiltInValueErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BuiltInValueErrorResult) =>
      isUintErrorResult(data) ? (
        <UintErrorResult data={data} />
      ) : isIntErrorResult(data) ? (
        <IntErrorResult data={data} />
      ) : isBoolErrorResult(data) ? (
        <BoolErrorResult data={data} />
      ) : isBytesStaticErrorResult(data) ? (
        <BytesStaticErrorResult data={data} />
      ) : isAddressErrorResult(data) ? (
        <AddressErrorResult data={data} />
      ) : isFixedErrorResult(data) ? (
        <FixedErrorResult data={data} />
      ) : (
        <UfixedErrorResult data={data} />
      )
  )
};
