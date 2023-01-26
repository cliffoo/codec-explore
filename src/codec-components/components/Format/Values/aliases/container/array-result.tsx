import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isArrayValue } from "@/utils/type-guards/value-and-result/array";
import { ArrayValue } from "@/components/Format/Values/interfaces/container/array-value";
import { ArrayErrorResult } from "@/components/Format/Errors/interfaces/container/array-error-result";

const displayName = "ArrayResult";

export const { ArrayResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.ArrayResult) =>
      isArrayValue(data) ? (
        <ArrayValue data={data} />
      ) : (
        <ArrayErrorResult data={data} />
      )
  )
};
