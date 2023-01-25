import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/components/Format/Values/interfaces/elementary/fixed-value";
import { FixedErrorResult } from "@/components/Format/Errors/interfaces/elementary/fixed-error-result";

export const FixedResult = createPolymorphicComponent(
  (data: Format.Values.FixedResult) =>
    isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : (
      <FixedErrorResult data={data} />
    )
);
