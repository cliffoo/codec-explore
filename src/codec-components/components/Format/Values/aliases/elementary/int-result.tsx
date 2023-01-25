import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/components/Format/Values/interfaces/elementary/int-value";
import { IntErrorResult } from "@/components/Format/Errors/interfaces/elementary/int-error-result";

export const IntResult = createPolymorphicComponent(
  (data: Format.Values.IntResult) =>
    isIntValue(data) ? <IntValue data={data} /> : <IntErrorResult data={data} />
);
