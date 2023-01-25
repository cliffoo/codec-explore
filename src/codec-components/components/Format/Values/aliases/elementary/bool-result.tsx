import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/components/Format/Values/interfaces/elementary/bool-value";
import { BoolErrorResult } from "@/components/Format/Errors/interfaces/elementary/bool-error-result";

export const BoolResult = createPolymorphicComponent(
  (data: Format.Values.BoolResult) =>
    isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : (
      <BoolErrorResult data={data} />
    )
);
