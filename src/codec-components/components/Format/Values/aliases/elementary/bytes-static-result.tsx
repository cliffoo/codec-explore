import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/components/Format/Values/interfaces/elementary/bytes-static-value";
import { BytesStaticErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-static-error-result";

export const BytesStaticResult = createPolymorphicComponent(
  (data: Format.Values.BytesStaticResult) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesStaticErrorResult data={data} />
    )
);
