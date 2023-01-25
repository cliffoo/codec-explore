import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isTupleValue } from "@/utils/type-guards/value-and-result/tuple";
import { TupleValue } from "@/components/Format/Values/interfaces/container/tuple-value";
import { TupleErrorResult } from "@/components/Format/Errors/interfaces/container/tuple-error-result";

export const TupleResult = createPolymorphicComponent(
  (data: Format.Values.TupleResult) =>
    isTupleValue(data) ? (
      <TupleValue data={data} />
    ) : (
      <TupleErrorResult data={data} />
    )
);
