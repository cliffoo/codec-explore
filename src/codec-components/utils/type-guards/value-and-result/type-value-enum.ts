import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

const [isTypeValueEnum, _, __, typeValueEnumGuards] =
  valueAndResultTypeGuardHelper<Format.Values.TypeValueEnum, any, any>(
    data =>
      data.type.typeClass === "type" && data.type.type.typeClass === "enum"
  );

export { isTypeValueEnum, typeValueEnumGuards };
