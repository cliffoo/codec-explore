import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintValue } from "@/utils/type-guards/value-and-result/uint";
import { UintValue } from "@/components/Format/Values/interfaces/elementary/uint-value";
import { UintErrorResult } from "@/components/Format/Errors/interfaces/elementary/uint-error-result";

const displayName = "UintResult";

export const { UintResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.UintResult) =>
      isUintValue(data) ? (
        <UintValue data={data} />
      ) : (
        <UintErrorResult data={data} />
      )
  )
};
