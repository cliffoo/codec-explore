import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isAddressValue,
  isAddressErrorResult,
  isAddressResult,
  addressGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.AddressValue,
  Format.Errors.AddressErrorResult,
  Format.Values.AddressResult
>(data => data.type.typeClass === "address");
