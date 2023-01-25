import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isContractValue,
  isContractErrorResult,
  isContractResult,
  contractGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.ContractValue,
  Format.Errors.ContractErrorResult,
  Format.Values.ContractResult
>(data => data.type.typeClass === "contract");
