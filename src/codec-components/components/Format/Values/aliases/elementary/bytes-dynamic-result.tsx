import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesDynamicValue } from "@/utils/type-guards/value-and-result/bytes-dynamic";
import { BytesDynamicValue } from "@/components/Format/Values/interfaces/elementary/bytes-dynamic-value";
import { BytesDynamicErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-dynamic-error-result";

const displayName = "BytesDynamicResult";

export const { BytesDynamicResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BytesDynamicResult) =>
      isBytesDynamicValue(data) ? (
        <BytesDynamicValue data={data} />
      ) : (
        <BytesDynamicErrorResult data={data} />
      )
  )
};
