import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isTypeValue } from "@/utils/type-guards/value-and-result/type";
import { TypeValue } from "@/components/Format/Values/aliases/special-container/type-value";
import { TypeErrorResult } from "@/components/Format/Errors/interfaces/special-container/type-error-result";

export const TypeResult = createPolymorphicComponent(
  (data: Format.Values.TypeResult) =>
    isTypeValue(data) ? (
      <TypeValue data={data} />
    ) : (
      <TypeErrorResult data={data} />
    )
);
