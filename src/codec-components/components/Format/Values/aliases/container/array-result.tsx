import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isArrayValue } from "@/utils/type-guards/value-and-result/array";
import { ArrayValue } from "@/components/Format/Values/interfaces/container/array-value";
import { ArrayErrorResult } from "@/components/Format/Errors/interfaces/container/array-error-result";

export const ArrayResult = createPolymorphicComponent(
  (data: Format.Values.ArrayResult) =>
    isArrayValue(data) ? (
      <ArrayValue data={data} />
    ) : (
      <ArrayErrorResult data={data} />
    )
);
