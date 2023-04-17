import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

const [isTypeValueContract, , , typeValueContractGuards] =
  valueAndResultTypeGuardHelper<Format.Values.TypeValueContract, any, any>(
    data =>
      data.type.typeClass === "type" && data.type.type.typeClass === "contract"
  );

export { isTypeValueContract, typeValueContractGuards };
