import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUfixedValue } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedValue } from "@/components/Format/Values/interfaces/elementary/ufixed-value";
import { UfixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/ufixed-error-result";

const displayName = "UfixedResult";

export const { UfixedResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.UfixedResult) =>
      isUfixedValue(data) ? (
        <UfixedValue data={data} />
      ) : (
        <UfixedErrorResult data={data} />
      )
  )
};
