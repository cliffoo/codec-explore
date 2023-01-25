import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStructValue } from "@/utils/type-guards/value-and-result/struct";
import { StructValue } from "@/components/Format/Values/interfaces/container/struct-value";
import { StructErrorResult } from "@/components/Format/Errors/interfaces/container/struct-error-result";

export const StructResult = createPolymorphicComponent(
  (data: Format.Values.StructResult) =>
    isStructValue(data) ? (
      <StructValue data={data} />
    ) : (
      <StructErrorResult data={data} />
    )
);
