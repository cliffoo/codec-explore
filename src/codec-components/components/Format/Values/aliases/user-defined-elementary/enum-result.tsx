import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isEnumValue } from "@/utils/type-guards/value-and-result/enum";
import { EnumValue } from "@/components/Format/Values/interfaces/user-defined-elementary/enum-value";
import { EnumErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/enum-error-result";

export const EnumResult = createPolymorphicComponent(
  (data: Format.Values.EnumResult) =>
    isEnumValue(data) ? (
      <EnumValue data={data} />
    ) : (
      <EnumErrorResult data={data} />
    )
);
