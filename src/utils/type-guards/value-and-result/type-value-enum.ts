import type { Format } from "@truffle/codec";
import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

const [isTypeValueEnum, , , typeValueEnumGuards] =
  valueAndResultTypeGuardHelper<Format.Values.TypeValueEnum, never, never>(
    data =>
      data.type.typeClass === "type" && data.type.type.typeClass === "enum"
  );

export { isTypeValueEnum, typeValueEnumGuards };
