import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesDynamicValue } from "@/utils/type-guards/value-and-result/bytes-dynamic";
import { BytesDynamicValue } from "@/components/Format/Values/interfaces/elementary/bytes-dynamic-value";
import { BytesDynamicErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-dynamic-error-result";

export const BytesDynamicResult = createPolymorphicComponent(
  (data: Format.Values.BytesDynamicResult) =>
    isBytesDynamicValue(data) ? (
      <BytesDynamicValue data={data} />
    ) : (
      <BytesDynamicErrorResult data={data} />
    )
);
